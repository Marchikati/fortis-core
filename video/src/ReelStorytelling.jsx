import {
  AbsoluteFill, Audio, Img, interpolate, spring,
  staticFile, useCurrentFrame, useVideoConfig, Sequence
} from 'remotion';

const LARANJA = '#FD7A22';
const BRANCO  = '#FFFFFF';

// ── Utilitários ────────────────────────────────────────────────────────
const fi = (frame, start, dur, from = 0, to = 1) =>
  interpolate(frame, [start, start + dur], [from, to], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

// ── Legenda — sincronizada por silences detectados do áudio ────────────
// Sub aparece em start, some em end (frames RELATIVOS à sequência)
const Sub = ({ frame, start, end, children, size = 58, weight = 600,
               color = BRANCO, accent = false, shadow = true }) => {
  if (frame < start - 4 || frame > end + 4) return null;
  const fadeIn  = fi(frame, start - 4, 6);
  const fadeOut = fi(frame, end, 4, 1, 0);
  const op = Math.min(fadeIn, fadeOut);
  return (
    <div style={{
      fontFamily: accent ? '"Bebas Neue", sans-serif' : '"Poppins", sans-serif',
      fontSize: size,
      fontWeight: weight,
      color,
      lineHeight: 1.2,
      textAlign: 'center',
      padding: '0 52px',
      letterSpacing: accent ? 2 : 0.3,
      opacity: op,
      textShadow: shadow
        ? '0 2px 20px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.8)'
        : 'none',
      whiteSpace: 'pre-line',
    }}>
      {children}
    </div>
  );
};

// ── Plano de fundo com Ken Burns ───────────────────────────────────────
const BG = ({ src, fromScale = 1.0, toScale = 1.1, fromX = 0, toX = 0,
              fromY = 0, toY = 0, totalFrames }) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, totalFrames], [fromScale, toScale], {
    extrapolateRight: 'clamp',
  });
  const tx = interpolate(frame, [0, totalFrames], [fromX, toX], { extrapolateRight: 'clamp' });
  const ty = interpolate(frame, [0, totalFrames], [fromY, toY], { extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{
      transform: `scale(${scale}) translate(${tx}px, ${ty}px)`,
      transformOrigin: 'center center',
    }}>
      <Img src={staticFile(src)}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </AbsoluteFill>
  );
};

// ── Flash de impacto (corte bruto entre cenas) ─────────────────────────
const FlashCut = ({ absFrame, cutAt, duration = 5, color = '#ffffff', intensity = 0.8 }) => {
  const local = absFrame - cutAt;
  if (local < 0 || local > duration) return null;
  const op = local < duration / 2
    ? fi(local, 0, duration / 2, 0, intensity)
    : fi(local, duration / 2, duration / 2, intensity, 0);
  return <AbsoluteFill style={{ background: color, opacity: op, zIndex: 100 }} />;
};

// ══════════════════════════════════════════════════════════════════════
// TIMING EXATO — mapeado por silencedetect do ffmpeg (@ 30fps)
//
// Frase  1 "Uma vez."                           0.00–0.63s   (  0–19f)
// Frase  2 "Foi só uma vez...proteção."         1.31–4.17s   ( 39–125f)
// Frase  3 "Tinha pressa."                      4.75–5.30s   (143–159f)
// Frase  4 "Ia ser rápido."                     5.67–6.33s   (170–190f)
// ── CORTE CENA 2 @ frame 190 ─────────────────────────────────────────
// Frase  5 "Não foi rápido."    rel: abs 6.63–7.29s   abs 199–219  rel 9–29
// Frase  6 "Uma peça caiu."     rel: abs 8.18–9.11s   abs 245–273  rel 55–83
// Frase  7 "E não teve..."      rel: abs 9.65–11.06s  abs 290–332  rel 100–142
// ── CORTE CENA 3 @ frame 340 ─────────────────────────────────────────
// Frase  8 "No Brasil..."       rel: abs 11.86–15.54s abs 356–466  rel 16–126
// Frase  9 "Na maioria..."      rel: abs 16.45–19.45s abs 494–584  rel 154–244
// ── CORTE CENA 4 @ frame 590 ─────────────────────────────────────────
// Frase 10 "O risco não avisa." rel: abs 20.20–21.25s abs 606–638  rel 16–48
// Frase 11 "Não espera..."      rel: abs 21.84–23.09s abs 655–693  rel 65–103
// ── CORTE CENA 5 @ frame 710 ─────────────────────────────────────────
// Frase 12 "Use seu equip..."   rel: abs 23.76–25.15s abs 713–755  rel 3–45
// Frase 13 "Todo dia."          rel: abs 25.56–26.05s abs 767–782  rel 57–72
// Frase 14 "Sem exceção."       rel: abs 26.32–27.31s abs 790–820  rel 80–109
// ══════════════════════════════════════════════════════════════════════

// ── CENA 1: 0→190  Vestiário — abandono ──────────────────────────────
const Cena1 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sp1 = spring({ frame: frame - 2, fps, config: { damping: 20, stiffness: 120 } });
  const scaleImpact = interpolate(sp1, [0, 1], [1.12, 1.0]);

  return (
    <AbsoluteFill>
      <BG src="reel-cena1-vestiario.png"
        fromScale={1.0} toScale={1.10} fromX={0} toX={-20} totalFrames={190} />

      {/* Gradiente dramático */}
      <AbsoluteFill style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.65) 100%)',
      }} />
      <AbsoluteFill style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 25%, transparent 55%, rgba(0,0,0,0.92) 100%)',
      }} />

      {/* Linha laranja no topo */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 7, background: LARANJA, opacity: fi(frame, 0, 15),
      }} />

      {/* "1" fantasma no fundo — impacto visual */}
      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 500, color: BRANCO,
          opacity: interpolate(frame, [0, 15, 100, 190], [0, 0.07, 0.07, 0], { extrapolateRight: 'clamp' }),
          lineHeight: 1, userSelect: 'none',
          transform: `scale(${scaleImpact})`,
        }}>1</div>
      </AbsoluteFill>

      {/* Legendas */}
      <AbsoluteFill style={{
        justifyContent: 'flex-end', alignItems: 'center',
        paddingBottom: 72, flexDirection: 'column',
      }}>
        <Sub frame={frame} start={0} end={19} size={96} weight={900} accent>UMA VEZ.</Sub>
        <Sub frame={frame} start={39} end={125} size={52} weight={600}>
          {'Foi só uma vez que ele entrou\nsem o equipamento de proteção.'}
        </Sub>
        <Sub frame={frame} start={143} end={159} size={62} weight={700}>Tinha pressa.</Sub>
        <Sub frame={frame} start={170} end={190} size={62} weight={700}>Ia ser rápido.</Sub>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ── CENA 2: 190→340  Viga caída — consequência ───────────────────────
const Cena2 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Zoom punch em "Uma peça caiu" (rel frame 55–83)
  const inImpact = frame >= 50 && frame <= 100;
  const punchScale = inImpact
    ? 1 + interpolate(
        spring({ frame: frame - 52, fps, config: { damping: 12, stiffness: 200 } }),
        [0, 1], [0, 0.09]
      )
    : 1;

  // Vignette vermelha pulsa no impacto
  const redPulse = frame >= 50 && frame <= 110
    ? interpolate(frame, [50, 65, 90, 110], [0, 0.35, 0.25, 0], { extrapolateRight: 'clamp' })
    : 0;

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ transform: `scale(${punchScale})`, transformOrigin: 'center center' }}>
        <BG src="reel-cena2-acidente.png"
          fromScale={1.08} toScale={1.0} fromX={15} toX={0} totalFrames={150} />
      </AbsoluteFill>

      <AbsoluteFill style={{ background: 'rgba(0,0,0,0.35)' }} />
      {/* Vinheta vermelha de impacto */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse at center, transparent 40%, rgba(120,0,0,${redPulse}) 100%)`,
      }} />
      <AbsoluteFill style={{
        background: 'linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.93) 100%)',
      }} />

      <AbsoluteFill style={{
        justifyContent: 'flex-end', alignItems: 'center',
        paddingBottom: 72, flexDirection: 'column',
      }}>
        <Sub frame={frame} start={9} end={29} size={68} weight={700}>Não foi rápido.</Sub>

        {/* Frase de impacto — laranja, maior */}
        <Sub frame={frame} start={55} end={83} size={92} weight={900} accent
          color={LARANJA}>UMA PEÇA CAIU.</Sub>

        <Sub frame={frame} start={100} end={142} size={58} weight={700}>
          E não teve segunda chance.
        </Sub>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ── CENA 3: 340→590  Brasil industrial — estatística ─────────────────
const Cena3 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const count = Math.round(interpolate(
    spring({ frame: frame - 20, fps, config: { damping: 14, stiffness: 60 } }),
    [0, 1], [0, 3], { extrapolateRight: 'clamp' }
  ));

  return (
    <AbsoluteFill>
      <BG src="reel-cena3-brasil.png"
        fromScale={1.0} toScale={1.07} fromX={0} toX={10} totalFrames={250} />

      <AbsoluteFill style={{ background: 'rgba(0,0,0,0.62)' }} />
      <AbsoluteFill style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 25%, rgba(0,0,0,0.8) 100%)',
      }} />

      {/* Contador central */}
      <AbsoluteFill style={{
        justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
        opacity: fi(frame, 8, 20),
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 280, color: LARANJA, lineHeight: 0.85,
            textShadow: '0 4px 60px rgba(253,122,34,0.6)',
          }}>{count}</div>
          <div style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 56, color: BRANCO, letterSpacing: 6,
            opacity: fi(frame, 40, 20),
          }}>MORTES POR DIA</div>
          <div style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: 36, color: 'rgba(255,255,255,0.65)',
            marginTop: 12, opacity: fi(frame, 60, 20),
          }}>por acidente de trabalho · Brasil</div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{
        justifyContent: 'flex-end', alignItems: 'center',
        paddingBottom: 72, flexDirection: 'column',
      }}>
        <Sub frame={frame} start={16} end={126} size={50} weight={600}>
          {'No Brasil, 3 trabalhadores morrem\npor acidente de trabalho todo dia.'}
        </Sub>
        <Sub frame={frame} start={154} end={244} size={50} weight={600}
          color="rgba(255,255,255,0.88)">
          {'Na maioria dos casos, o equipamento\ncerto teria feito diferença.'}
        </Sub>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ── CENA 4: 590→710  Casa ao entardecer — virada emocional ──────────
const Cena4 = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <BG src="reel-cena4-casa.png"
        fromScale={1.05} toScale={1.12} fromX={0} toX={-15} totalFrames={120} />

      {/* Overlay escuro com tom quente — peso emocional máximo */}
      <AbsoluteFill style={{ background: 'rgba(20,10,0,0.55)' }} />
      <AbsoluteFill style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 30%, rgba(0,0,0,0.92) 100%)',
      }} />

      <AbsoluteFill style={{
        justifyContent: 'flex-end', alignItems: 'center',
        paddingBottom: 72, flexDirection: 'column',
      }}>
        <Sub frame={frame} start={16} end={48} size={84} weight={900} accent>
          O RISCO NÃO AVISA.
        </Sub>
        <Sub frame={frame} start={65} end={103} size={60} weight={600}>
          Não espera você estar pronto.
        </Sub>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ── CENA 5: 710→820  Avatar com capacete — resolução ─────────────────
const Cena5 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Zoom out suave — revela o trabalhador protegido, sensação de esperança
  const scale = interpolate(frame, [0, 110], [1.12, 1.0], { extrapolateRight: 'clamp' });

  // Brilho suave no início da cena — virada emocional
  const warmGlow = fi(frame, 0, 30, 0.3, 0);

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ transform: `scale(${scale})`, transformOrigin: 'center top' }}>
        <Img src={staticFile('reel-cena5-avatar.png')}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
      </AbsoluteFill>

      {/* Overlay quente laranja no início — contraste com cenas sombrias */}
      <AbsoluteFill style={{ background: `rgba(253,122,34,${warmGlow})` }} />
      <AbsoluteFill style={{ background: 'rgba(0,0,0,0.35)' }} />
      <AbsoluteFill style={{
        background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.9) 100%)',
      }} />

      {/* Linha laranja rodapé */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 8, background: LARANJA,
        opacity: fi(frame, 0, 20),
      }} />

      <AbsoluteFill style={{
        justifyContent: 'flex-end', alignItems: 'center',
        paddingBottom: 80, flexDirection: 'column',
      }}>
        <Sub frame={frame} start={3} end={45} size={60} weight={700}
          color={LARANJA}>
          Use seu equipamento de proteção.
        </Sub>
        <Sub frame={frame} start={57} end={72} size={84} weight={900} accent>
          TODO DIA.
        </Sub>
        <Sub frame={frame} start={80} end={99} size={84} weight={900} accent
          color={LARANJA}>
          SEM EXCEÇÃO.
        </Sub>
      </AbsoluteFill>

      {/* CTA final — rodapé visível, aparece após as legendas */}
      <AbsoluteFill style={{
        justifyContent: 'flex-end', alignItems: 'center',
        paddingBottom: 28, flexDirection: 'column',
        opacity: fi(frame, 96, 10),
      }}>
        <div style={{
          background: 'rgba(0,0,0,0.78)',
          borderRadius: 20,
          padding: '20px 52px 18px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          border: `2px solid rgba(253,122,34,0.4)`,
        }}>
          <div style={{
            fontFamily: '"Poppins", sans-serif', fontSize: 52,
            fontWeight: 800, textAlign: 'center',
            lineHeight: 1.1,
          }}>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Siga </span>
            <span style={{ color: LARANJA }}>@fortisepis</span>
          </div>
          <div style={{
            fontFamily: '"Poppins", sans-serif', fontSize: 34,
            color: 'rgba(255,255,255,0.85)',
            textAlign: 'center',
            lineHeight: 1.35,
          }}>
            A loja que te ensina a se proteger de verdade.
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ════════════════════════════════════════════════════════════════════════
// COMPOSIÇÃO — 820 frames (27.35s @ 30fps)
// ════════════════════════════════════════════════════════════════════════
export const ReelStorytelling = () => {
  const frame = useCurrentFrame();

  // Pontos de corte entre cenas
  const cuts = [190, 340, 590, 710];

  return (
    <AbsoluteFill>
      <Audio src={staticFile('narracao-seg20.mp3')} />

      <Sequence from={0}   durationInFrames={190}><Cena1 /></Sequence>
      <Sequence from={190} durationInFrames={150}><Cena2 /></Sequence>
      <Sequence from={340} durationInFrames={250}><Cena3 /></Sequence>
      <Sequence from={590} durationInFrames={120}><Cena4 /></Sequence>
      <Sequence from={710} durationInFrames={110}><Cena5 /></Sequence>

      {/* Flash de corte em cada transição de cena */}
      {cuts.map(cut => (
        <FlashCut key={cut} absFrame={frame} cutAt={cut} duration={6}
          color={cut === 340 ? '#ffffff' : '#ffffff'} intensity={cut === 190 ? 0.9 : 0.6} />
      ))}
    </AbsoluteFill>
  );
};
