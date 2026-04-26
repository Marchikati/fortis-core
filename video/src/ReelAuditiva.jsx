import { AbsoluteFill, Audio, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';

const AZUL = '#365EB5';
const LARANJA = '#FD7A22';
const PRETO = '#0D0D0D';
const BRANCO = '#FFFFFF';
const VERDE = '#2ECC71';
const VERMELHO = '#E74C3C';

// Utilitário: fade in
const fadeIn = (frame, start, duration) =>
  interpolate(frame, [start, start + duration], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

// Utilitário: slide up
const slideUp = (frame, start, fps) => {
  const progress = spring({ frame: frame - start, fps, config: { damping: 18, stiffness: 120 } });
  return interpolate(progress, [0, 1], [40, 0]);
};

// ─── CENA 1: Hook (0s–4s) ──────────────────────────────────────────────
const Cena1Hook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = fadeIn(frame, 0, 20);
  const textOpacity = fadeIn(frame, 25, 20);
  const textY = slideUp(frame, 25, fps);

  return (
    <AbsoluteFill style={{ backgroundColor: PRETO }}>
      {/* Imagem de capa */}
      <Img
        src={staticFile('capa.png')}
        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity }}
      />
      {/* Overlay escuro suave */}
      <AbsoluteFill style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 60%)' }} />
      {/* Barra laranja rodapé */}
      <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'stretch' }}>
        <div style={{ height: 14, background: LARANJA, width: '100%' }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── CENA 2: Problema (4s–9s) ──────────────────────────────────────────
const Cena2Problema = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const textOpacity = fadeIn(frame, 10, 20);
  const textY = slideUp(frame, 10, fps);
  const badgeOpacity = fadeIn(frame, 30, 15);

  return (
    <AbsoluteFill style={{ backgroundColor: '#0D1B2A' }}>
      {/* Foto real — modelo jeito errado */}
      <AbsoluteFill>
        <Img
          src={staticFile('modelo-errado.png')}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
        {/* Overlay escuro para legibilidade */}
        <AbsoluteFill style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)' }} />
      </AbsoluteFill>

      {/* Badge ERRADO */}
      <AbsoluteFill style={{ justifyContent: 'flex-start', alignItems: 'flex-start', padding: '60px 40px' }}>
        <div style={{
          opacity: badgeOpacity,
          background: VERMELHO, borderRadius: 8,
          padding: '8px 20px', display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{ color: BRANCO, fontSize: 18, fontWeight: 900, letterSpacing: 2 }}>✗ JEITO ERRADO</div>
        </div>
      </AbsoluteFill>

      {/* Texto */}
      <AbsoluteFill style={{ justifyContent: 'flex-end', padding: '0 40px 120px' }}>
        <div style={{ opacity: textOpacity, transform: `translateY(${textY}px)` }}>
          <div style={{ color: BRANCO, fontSize: 42, fontWeight: 900, lineHeight: 1.2, textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
            Sem vedar o canal,{' '}
            <span style={{ color: VERMELHO }}>o ruído continua entrando.</span>
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: 'flex-end' }}>
        <div style={{ height: 14, background: LARANJA, width: '100%' }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── CENA 3: O erro em detalhe (9s–20s) ────────────────────────────────
const Cena3Erro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const title1 = fadeIn(frame, 5, 15);
  const title2 = fadeIn(frame, 25, 15);
  const item1 = fadeIn(frame, 45, 15);
  const item2 = fadeIn(frame, 70, 15);
  const item3 = fadeIn(frame, 95, 15);

  const titleY1 = slideUp(frame, 5, fps);
  const titleY2 = slideUp(frame, 25, fps);

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(180deg, #0D1B2A 0%, #162032 100%)' }}>

      {/* Linha laranja topo */}
      <AbsoluteFill style={{ justifyContent: 'flex-start' }}>
        <div style={{ height: 6, background: LARANJA, width: '100%' }} />
      </AbsoluteFill>

      <AbsoluteFill style={{ padding: '80px 50px', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>

        {/* Título */}
        <div style={{ opacity: title1, transform: `translateY(${titleY1}px)` }}>
          <div style={{
            color: LARANJA, fontSize: 15, fontWeight: 800,
            letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8,
          }}>O erro mais comum</div>
          <div style={{ color: BRANCO, fontSize: 52, fontWeight: 900, lineHeight: 1.15 }}>
            A maioria coloca{' '}
            <span style={{ color: LARANJA }}>sem selar</span>{' '}
            o canal.
          </div>
        </div>

        {/* Divisor */}
        <div style={{ opacity: title2, height: 2, background: `linear-gradient(to right, ${LARANJA}, transparent)` }} />

        {/* O que acontece */}
        <div style={{ opacity: title2, transform: `translateY(${titleY2}px)` }}>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            Consequências
          </div>
        </div>

        {[
          { icon: '🔊', text: 'Ruído continua penetrando mesmo com o protetor', opacity: item1 },
          { icon: '📉', text: 'Perda auditiva progressiva e silenciosa', opacity: item2 },
          { icon: '⚠️', text: 'Falsa sensação de proteção no dia a dia', opacity: item3 },
        ].map(({ icon, text, opacity }, i) => (
          <div key={i} style={{
            opacity, display: 'flex', alignItems: 'center', gap: 20,
            background: 'rgba(255,255,255,0.05)', borderRadius: 12,
            padding: '20px 24px', borderLeft: `4px solid ${VERMELHO}`,
          }}>
            <span style={{ fontSize: 32 }}>{icon}</span>
            <span style={{ color: BRANCO, fontSize: 26, fontWeight: 600, lineHeight: 1.3 }}>{text}</span>
          </div>
        ))}
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: 'flex-end' }}>
        <div style={{ height: 14, background: LARANJA }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── CENA 4: Solução — 3 passos (20s–32s) ──────────────────────────────
const Cena4Solucao = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOp = fadeIn(frame, 5, 15);
  const headerY = slideUp(frame, 5, fps);
  const step1 = fadeIn(frame, 20, 15);
  const step2 = fadeIn(frame, 55, 15);
  const step3 = fadeIn(frame, 90, 15);
  const modelOp = fadeIn(frame, 10, 20);

  return (
    <AbsoluteFill style={{ backgroundColor: PRETO }}>

      {/* Foto real — modelo técnica correta */}
      <AbsoluteFill style={{ opacity: modelOp }}>
        <Img
          src={staticFile('modelo-certo.png')}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
        {/* Overlay escuro para legibilidade do texto */}
        <AbsoluteFill style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)' }} />
      </AbsoluteFill>

      {/* Conteúdo */}
      <AbsoluteFill style={{ padding: '80px 44px', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>

        <div style={{ opacity: headerOp, transform: `translateY(${headerY}px)` }}>
          <div style={{ color: VERDE, fontSize: 14, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 6 }}>
            ✓ O jeito certo
          </div>
          <div style={{ color: BRANCO, fontSize: 46, fontWeight: 900, lineHeight: 1.15 }}>
            3 passos simples.
          </div>
        </div>

        <div style={{ height: 3, background: VERDE, width: 80, opacity: headerOp }} />

        {[
          { num: '01', text: 'Passe a mão oposta por cima da cabeça', opacity: step1 },
          { num: '02', text: 'Puxe a orelha para cima e para trás', opacity: step2 },
          { num: '03', text: 'Encaixe até vedar completamente', opacity: step3 },
        ].map(({ num, text, opacity }) => (
          <div key={num} style={{
            opacity, display: 'flex', alignItems: 'center', gap: 20,
            background: 'rgba(46,204,113,0.1)', borderRadius: 14,
            padding: '18px 22px', borderLeft: `5px solid ${VERDE}`,
          }}>
            <div style={{
              background: VERDE, borderRadius: '50%',
              width: 44, height: 44, display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ color: PRETO, fontSize: 16, fontWeight: 900 }}>{num}</span>
            </div>
            <span style={{ color: BRANCO, fontSize: 26, fontWeight: 600, lineHeight: 1.3 }}>{text}</span>
          </div>
        ))}
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: 'flex-end' }}>
        <div style={{ height: 14, background: LARANJA }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── CENA 5: CTA Final (32s–38s) ───────────────────────────────────────
const Cena5CTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logoOp = fadeIn(frame, 10, 25);
  const logoScale = interpolate(
    spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 100 } }),
    [0, 1], [0.8, 1]
  );
  const text1 = fadeIn(frame, 35, 20);
  const text2 = fadeIn(frame, 55, 20);
  const text1Y = slideUp(frame, 35, fps);
  const text2Y = slideUp(frame, 55, fps);

  return (
    <AbsoluteFill style={{ background: `linear-gradient(160deg, #0D1B2A 0%, ${AZUL}33 100%)` }}>

      {/* Logo */}
      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 48 }}>
        <div style={{ opacity: logoOp, transform: `scale(${logoScale})` }}>
          <Img src={staticFile('logo.png')} style={{ width: 280 }} />
        </div>

        <div style={{ opacity: text1, transform: `translateY(${text1Y}px)`, textAlign: 'center', padding: '0 50px' }}>
          <div style={{ color: BRANCO, fontSize: 36, fontWeight: 800, lineHeight: 1.3 }}>
            Proteção auditiva só funciona se for usada{' '}
            <span style={{ color: LARANJA }}>do jeito certo.</span>
          </div>
        </div>

        <div style={{
          opacity: text2,
          transform: `translateY(${text2Y}px)`,
          background: LARANJA,
          borderRadius: 50,
          padding: '18px 40px',
        }}>
          <div style={{ color: BRANCO, fontSize: 24, fontWeight: 800, textAlign: 'center' }}>
            Compartilha com quem trabalha com você 👷
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: 'flex-end' }}>
        <div style={{ height: 14, background: LARANJA }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── COMPOSIÇÃO PRINCIPAL ───────────────────────────────────────────────
export const ReelAuditiva = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: PRETO, fontFamily: "'Inter', 'Arial', sans-serif" }}>
      {/* Narração */}
      <Audio src={staticFile('narracao.mp3')} />

      {/* Cena 1: Hook 0s–4s */}
      <Sequence from={0} durationInFrames={4 * fps}>
        <Cena1Hook />
      </Sequence>

      {/* Cena 2: Problema 4s–9s */}
      <Sequence from={4 * fps} durationInFrames={5 * fps}>
        <Cena2Problema />
      </Sequence>

      {/* Cena 3: O erro 9s–20s */}
      <Sequence from={9 * fps} durationInFrames={11 * fps}>
        <Cena3Erro />
      </Sequence>

      {/* Cena 4: Solução 20s–32s */}
      <Sequence from={20 * fps} durationInFrames={12 * fps}>
        <Cena4Solucao />
      </Sequence>

      {/* Cena 5: CTA 32s–35s */}
      <Sequence from={32 * fps} durationInFrames={3 * fps}>
        <Cena5CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
