import {
  AbsoluteFill, Audio, interpolate, spring,
  staticFile, useCurrentFrame, useVideoConfig, Sequence
} from 'remotion';

// ── Cores ───────────────────────────────────────────────────────────────
const AZUL   = '#365EB5';
const LARANJA = '#FD7A22';
const NAVY   = '#0D1B2A';
const PRETO  = '#0D0D0D';
const BRANCO = '#FFFFFF';
const VERMELHO = '#C0392B';

// ── Utilitários ─────────────────────────────────────────────────────────
const fi = (frame, start, dur) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp'
  });

const sp = (frame, start, fps, cfg = { damping: 20, stiffness: 140 }) => {
  const p = spring({ frame: frame - start, fps, config: cfg });
  return interpolate(p, [0, 1], [60, 0]);
};

// ── Barra laranja rodapé (fixa em todas as cenas) ─────────────────────
const BarraRodape = () => (
  <AbsoluteFill style={{ justifyContent: 'flex-end' }}>
    <div style={{ width: '100%', height: 18, background: LARANJA }} />
  </AbsoluteFill>
);

// ── CENA 1 — 0s a 3s: Gancho "UMA VEZ" ──────────────────────────────────
const Cena1 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bgOp = fi(frame, 0, 18);
  const numOp = fi(frame, 10, 25);
  const numY  = sp(frame, 10, fps);
  const txtOp = fi(frame, 30, 20);

  return (
    <AbsoluteFill style={{ background: PRETO }}>
      {/* Flash vermelho pulsante */}
      <AbsoluteFill style={{ background: VERMELHO, opacity: fi(frame, 0, 6) * 0.15 }} />
      <AbsoluteFill style={{
        justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
        gap: 0, opacity: bgOp
      }}>
        {/* Número grande */}
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 320,
          color: LARANJA,
          lineHeight: 0.9,
          opacity: numOp,
          transform: `translateY(${numY}px)`,
          textShadow: `0 0 80px rgba(253,122,34,0.6)`,
        }}>1</div>
        {/* Palavra */}
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 96,
          color: BRANCO,
          letterSpacing: 24,
          opacity: txtOp,
          marginTop: -20,
        }}>VEZ</div>
      </AbsoluteFill>
      <BarraRodape />
    </AbsoluteFill>
  );
};

// ── CENA 2 — 3s a 9s: Setup ─────────────────────────────────────────────
const Cena2 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const l1Op = fi(frame, 5, 20);
  const l1Y  = sp(frame, 5, fps);
  const l2Op = fi(frame, 35, 20);
  const l2Y  = sp(frame, 35, fps);
  const l3Op = fi(frame, 65, 20);
  const l3Y  = sp(frame, 65, fps);

  return (
    <AbsoluteFill style={{ background: NAVY }}>
      {/* Linha vertical laranja à esquerda */}
      <div style={{
        position: 'absolute', left: 72, top: 200, bottom: 100,
        width: 6, background: LARANJA, borderRadius: 3,
        opacity: fi(frame, 0, 15),
      }} />
      <AbsoluteFill style={{
        paddingLeft: 110, paddingRight: 80, paddingTop: 220,
        flexDirection: 'column', justifyContent: 'flex-start', gap: 0
      }}>
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 32,
          color: LARANJA, letterSpacing: 6, marginBottom: 48,
          opacity: fi(frame, 0, 15),
        }}>UMA HISTÓRIA REAL</div>

        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 104,
          color: BRANCO, lineHeight: 1.0,
          opacity: l1Op, transform: `translateY(${l1Y}px)`,
        }}>Ele entrou</div>

        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 104,
          color: BRANCO, lineHeight: 1.0,
          opacity: l2Op, transform: `translateY(${l2Y}px)`,
        }}>sem proteção.</div>

        <div style={{
          fontFamily: '"Poppins", sans-serif', fontSize: 52,
          color: 'rgba(255,255,255,0.7)', marginTop: 48, lineHeight: 1.4,
          opacity: l3Op, transform: `translateY(${l3Y}px)`,
        }}>Tinha pressa.<br/>Ia ser rápido.</div>
      </AbsoluteFill>
      <BarraRodape />
    </AbsoluteFill>
  );
};

// ── CENA 3 — 9s a 16s: Consequência ────────────────────────────────────
const Cena3 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bgOp  = fi(frame, 0, 12);
  const l1Op  = fi(frame, 8, 20);
  const l1Y   = sp(frame, 8, fps);
  const l2Op  = fi(frame, 38, 25);
  const l2Y   = sp(frame, 38, fps);
  const dotOp = fi(frame, 80, 20);

  return (
    <AbsoluteFill style={{ background: PRETO, opacity: bgOp }}>
      {/* Vinheta vermelha nas bordas */}
      <AbsoluteFill style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(180,0,0,0.35) 100%)'
      }} />
      <AbsoluteFill style={{
        justifyContent: 'center', alignItems: 'flex-start',
        paddingLeft: 80, paddingRight: 80, flexDirection: 'column', gap: 0
      }}>
        <div style={{
          fontFamily: '"Poppins", sans-serif', fontSize: 52,
          color: 'rgba(255,255,255,0.65)', lineHeight: 1.5,
          opacity: l1Op, transform: `translateY(${l1Y}px)`,
          marginBottom: 60,
        }}>Não foi rápido.</div>

        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 120,
          color: BRANCO, lineHeight: 1.0,
          opacity: l2Op, transform: `translateY(${l2Y}px)`,
        }}>Uma peça<br/>caiu.</div>

        <div style={{
          fontFamily: '"Poppins", sans-serif', fontSize: 52,
          color: VERMELHO, fontWeight: 700, marginTop: 60,
          opacity: dotOp,
        }}>E não teve segunda chance.</div>
      </AbsoluteFill>
      <BarraRodape />
    </AbsoluteFill>
  );
};

// ── CENA 4 — 16s a 22s: Estatística ─────────────────────────────────────
const Cena4 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bgOp  = fi(frame, 0, 12);
  const numOp = fi(frame, 10, 25);
  const numY  = sp(frame, 10, fps);
  const l1Op  = fi(frame, 40, 20);
  const l2Op  = fi(frame, 65, 20);
  const l3Op  = fi(frame, 90, 20);

  return (
    <AbsoluteFill style={{ background: AZUL, opacity: bgOp }}>
      {/* Padrão de grade sutil */}
      <AbsoluteFill style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      <AbsoluteFill style={{
        justifyContent: 'center', alignItems: 'center',
        flexDirection: 'column', paddingLeft: 80, paddingRight: 80
      }}>
        <div style={{
          fontFamily: '"Poppins", sans-serif', fontSize: 32,
          color: 'rgba(255,255,255,0.7)', fontWeight: 600,
          letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16,
          opacity: fi(frame, 0, 20),
        }}>NO BRASIL</div>

        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 220,
          color: BRANCO, lineHeight: 0.9,
          opacity: numOp, transform: `translateY(${numY}px)`,
          textShadow: '0 4px 40px rgba(0,0,0,0.4)',
        }}>3</div>

        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 64,
          color: LARANJA, lineHeight: 1.1, textAlign: 'center',
          opacity: l1Op, marginTop: 8,
        }}>TRABALHADORES</div>

        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 64,
          color: BRANCO, lineHeight: 1.1, textAlign: 'center',
          opacity: l2Op,
        }}>MORREM POR DIA</div>

        <div style={{
          fontFamily: '"Poppins", sans-serif', fontSize: 40,
          color: 'rgba(255,255,255,0.75)', textAlign: 'center',
          lineHeight: 1.4, marginTop: 48,
          opacity: l3Op,
        }}>por acidente de trabalho.</div>
      </AbsoluteFill>
      <BarraRodape />
    </AbsoluteFill>
  );
};

// ── CENA 5 — 22s a 26s: Virada ──────────────────────────────────────────
const Cena5 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bgOp = fi(frame, 0, 12);
  const l1Op = fi(frame, 8, 20);
  const l1Y  = sp(frame, 8, fps);
  const l2Op = fi(frame, 35, 20);
  const l2Y  = sp(frame, 35, fps);

  return (
    <AbsoluteFill style={{ background: NAVY, opacity: bgOp }}>
      <AbsoluteFill style={{
        justifyContent: 'center', flexDirection: 'column',
        paddingLeft: 80, paddingRight: 80
      }}>
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 118,
          color: BRANCO, lineHeight: 1.0,
          opacity: l1Op, transform: `translateY(${l1Y}px)`,
        }}>O risco</div>
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 118,
          color: LARANJA, lineHeight: 1.0,
          opacity: l1Op, transform: `translateY(${l1Y}px)`,
        }}>não avisa.</div>

        <div style={{
          fontFamily: '"Poppins", sans-serif', fontSize: 50,
          color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, marginTop: 56,
          opacity: l2Op, transform: `translateY(${l2Y}px)`,
        }}>Não espera você<br/>estar pronto.</div>
      </AbsoluteFill>
      <BarraRodape />
    </AbsoluteFill>
  );
};

// ── CENA 6 — 26s a 28s: CTA ─────────────────────────────────────────────
const Cena6 = () => {
  const frame = useCurrentFrame();
  const bgOp = fi(frame, 0, 15);
  const l1Op = fi(frame, 8, 20);
  const l2Op = fi(frame, 28, 20);
  const l3Op = fi(frame, 45, 20);

  return (
    <AbsoluteFill style={{ background: PRETO, opacity: bgOp }}>
      {/* Linha laranja decorativa */}
      <div style={{
        position: 'absolute', left: 0, top: '38%',
        width: '100%', height: 4, background: LARANJA,
        opacity: fi(frame, 20, 15),
      }} />
      <AbsoluteFill style={{
        justifyContent: 'center', alignItems: 'center',
        flexDirection: 'column', gap: 0, paddingLeft: 60, paddingRight: 60
      }}>
        <div style={{
          fontFamily: '"Poppins", sans-serif', fontSize: 44,
          color: 'rgba(255,255,255,0.55)', fontWeight: 600,
          letterSpacing: 3, textTransform: 'uppercase', marginBottom: 24,
          opacity: l1Op,
        }}>USE SEU EQUIPAMENTO</div>

        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 130,
          color: BRANCO, lineHeight: 0.95, textAlign: 'center',
          opacity: l2Op,
        }}>TODO DIA.</div>

        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 90,
          color: LARANJA, lineHeight: 1.0, textAlign: 'center',
          opacity: l2Op, marginTop: 16,
        }}>SEM EXCEÇÃO.</div>

        <div style={{
          fontFamily: '"Poppins", sans-serif', fontSize: 38,
          color: 'rgba(255,255,255,0.45)', marginTop: 80,
          opacity: l3Op, textAlign: 'center',
        }}>@inovafortis</div>
      </AbsoluteFill>
      <BarraRodape />
    </AbsoluteFill>
  );
};

// ── COMPOSIÇÃO PRINCIPAL ─────────────────────────────────────────────────
export const ReelStorytelling = () => {
  const FPS = 30;
  return (
    <AbsoluteFill style={{ fontFamily: "'Poppins', sans-serif", background: PRETO }}>
      <Audio src={staticFile('narracao-seg20.mp3')} />

      {/* Cena 1: 0–3s */}
      <Sequence from={0} durationInFrames={90}>
        <Cena1 />
      </Sequence>
      {/* Cena 2: 3–9s */}
      <Sequence from={90} durationInFrames={180}>
        <Cena2 />
      </Sequence>
      {/* Cena 3: 9–16s */}
      <Sequence from={270} durationInFrames={210}>
        <Cena3 />
      </Sequence>
      {/* Cena 4: 16–22s */}
      <Sequence from={480} durationInFrames={180}>
        <Cena4 />
      </Sequence>
      {/* Cena 5: 22–26s */}
      <Sequence from={660} durationInFrames={120}>
        <Cena5 />
      </Sequence>
      {/* Cena 6: 26–28s */}
      <Sequence from={780} durationInFrames={60}>
        <Cena6 />
      </Sequence>
    </AbsoluteFill>
  );
};
