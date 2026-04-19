import base64

with open('/tmp/logo_b64.txt') as f:
    logo_branco = f.read().strip()
with open('/tmp/capa_b64.txt') as f:
    img_capa = f.read().strip()
with open('/tmp/aco_b64.txt') as f:
    img_aco = f.read().strip()
with open('/tmp/comp_b64.txt') as f:
    img_comp = f.read().strip()
with open('/tmp/plas_b64.txt') as f:
    img_plas = f.read().strip()

AZUL = '#365EB5'
LARANJA = '#FD7A22'
AMARELO = '#FFD754'
PRETO = '#0D0D0D'
BRANCO = '#FFFFFF'
CINZA = '#F5F5F0'
AZUL_CLARO = '#EEF2FB'
VERMELHO = '#E74C3C'
VERDE = '#2ECC71'

def rodape():
    return f'<div style="position:absolute;bottom:0;left:0;right:0;height:70px;background:{LARANJA};display:flex;align-items:center;padding:0 60px;justify-content:space-between;"><img src="data:image/png;base64,{logo_branco}" style="height:34px;" alt="Fortis"><span style="color:{BRANCO};font-size:17px;font-weight:700;">inovafortis.com.br</span></div>'

rows = [
    ('Impacto alto', '✅', '✅', '⚠️'),
    ('Risco elétrico', '❌', '✅', '✅'),
    ('Jornada longa', '⚠️', '✅', '✅'),
    ('Calor extremo', '⚠️', '✅', '⚠️'),
    ('Construção pesada', '✅', '✅', '❌'),
    ('Risco leve', '✅', '✅', '✅'),
    ('Custo', '💲', '💲💲💲', '💲'),
]

rows_html = ''
for i, r in enumerate(rows):
    bg = '0.04' if i % 2 == 0 else '0.02'
    rows_html += f'''<div style="display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;padding:14px 24px;border-top:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,{bg});">
        <div style="font-size:20px;font-weight:600;color:{BRANCO};line-height:1.3;">{r[0]}</div>
        <div style="font-size:24px;text-align:center;">{r[1]}</div>
        <div style="font-size:24px;text-align:center;">{r[2]}</div>
        <div style="font-size:24px;text-align:center;">{r[3]}</div>
    </div>'''

html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Carrossel Biqueiras — Inova Fortis EPIs</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
*{{margin:0;padding:0;box-sizing:border-box;}}
body{{background:#1a1a2e;font-family:'Inter',sans-serif;padding:40px 20px;}}
h1{{color:white;text-align:center;margin-bottom:6px;font-size:18px;opacity:0.7;letter-spacing:1px;}}
p.sub{{color:rgba(255,255,255,0.4);text-align:center;font-size:13px;margin-bottom:32px;}}
.controls{{text-align:center;margin-bottom:40px;}}
.btn-zip{{background:{LARANJA};color:white;border:none;padding:14px 36px;border-radius:50px;font-size:14px;font-weight:800;cursor:pointer;font-family:'Inter',sans-serif;letter-spacing:1px;}}
.progress{{display:none;color:white;margin-top:14px;font-size:13px;opacity:0.7;}}
.slide-wrap{{margin:0 auto 48px;width:1080px;}}
.slide{{width:1080px;height:1350px;position:relative;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.5);}}
.btn-dl{{display:block;width:100%;margin-top:10px;padding:12px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);color:white;font-size:13px;font-weight:700;cursor:pointer;border-radius:8px;font-family:'Inter',sans-serif;letter-spacing:1px;}}
.btn-dl:hover{{background:rgba(255,255,255,0.14);}}
</style>
</head>
<body>
<h1>CARROSSEL — TIPOS DE BIQUEIRA</h1>
<p class="sub">15 de abril de 2026 · Slides 1 a 8 · 1080×1350px · Informações verificadas</p>
<div class="controls">
  <button class="btn-zip" onclick="baixarTodos()">⬇ Baixar Todos os Slides (.zip)</button>
  <div class="progress" id="progress"></div>
</div>

<!-- SLIDE 1 — CAPA -->
<div class="slide-wrap">
<div class="slide" id="s1">
  <!-- Background image full bleed -->
  <img src="data:image/png;base64,{img_capa}" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;" />
  <!-- Dark gradient overlay -->
  <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.92) 100%);"></div>
  <!-- Top bar azul -->
  <div style="position:absolute;top:0;left:0;right:0;height:10px;background:{AZUL};"></div>
  <!-- Hook text -->
  <div style="position:absolute;bottom:100px;left:0;right:0;padding:0 72px;">
    <div style="font-size:17px;font-weight:800;letter-spacing:3px;color:{LARANJA};text-transform:uppercase;margin-bottom:20px;">Calçado de segurança</div>
    <div style="font-size:82px;font-weight:900;color:{BRANCO};line-height:1.05;margin-bottom:24px;">Você sabe qual<br>biqueira está<br>no seu calçado?</div>
    <div style="height:4px;background:{LARANJA};width:120px;margin-bottom:24px;"></div>
    <div style="font-size:28px;font-weight:600;color:rgba(255,255,255,0.85);line-height:1.4;">Aço, composite ou plástica — cada uma protege contra riscos completamente diferentes.</div>
  </div>
  {rodape()}
</div>
<button class="btn-dl" onclick="dl('s1','01-capa')">⬇ Baixar Capa</button>
</div>

<!-- SLIDE 2 — Introdução -->
<div class="slide-wrap">
<div class="slide" id="s2" style="background:{CINZA};">
  <div style="height:10px;background:{AZUL};"></div>
  <div style="padding:64px 88px 0;">
    <div style="font-size:17px;font-weight:800;letter-spacing:3px;color:{LARANJA};text-transform:uppercase;margin-bottom:22px;">Educação</div>
    <div style="font-size:78px;font-weight:900;color:{PRETO};line-height:1.0;margin-bottom:40px;">Nem todo calçado protege<br><span style="color:{AZUL};">do mesmo jeito.</span></div>
    <div style="background:{BRANCO};border-radius:20px;padding:40px 48px;box-shadow:0 6px 30px rgba(0,0,0,0.08);border-left:8px solid {AZUL};margin-bottom:32px;">
      <div style="font-size:29px;font-weight:700;color:{PRETO};line-height:1.5;">A biqueira é a parte mais crítica do calçado de segurança. Ela determina contra qual risco você está realmente protegido.</div>
    </div>
    <div style="background:{AZUL};border-radius:16px;padding:28px 44px;">
      <div style="font-size:27px;font-weight:800;color:{BRANCO};line-height:1.4;">Usar o calçado errado para o risco errado<br><span style="color:{AMARELO};">é o mesmo que não usar nenhum.</span></div>
    </div>
  </div>
  {rodape()}
</div>
<button class="btn-dl" onclick="dl('s2','02-introducao')">⬇ Baixar Slide 2</button>
</div>

<!-- SLIDE 3 — Biqueira de Aço -->
<div class="slide-wrap">
<div class="slide" id="s3" style="background:{PRETO};">
  <div style="height:10px;background:{LARANJA};"></div>
  <!-- Hero image -->
  <div style="height:400px;position:relative;overflow:hidden;">
    <img src="data:image/png;base64,{img_aco}" style="width:100%;height:100%;object-fit:cover;object-position:center;" />
    <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(13,13,13,1) 100%);"></div>
    <div style="position:absolute;top:16px;left:24px;background:{LARANJA};border-radius:10px;padding:8px 20px;">
      <span style="font-size:14px;font-weight:800;letter-spacing:2px;color:{BRANCO};text-transform:uppercase;">Tipo 01 de 03</span>
    </div>
  </div>
  <!-- Content -->
  <div style="padding:16px 72px 0;">
    <div style="font-size:22px;font-weight:700;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:2px;margin-bottom:4px;">Biqueira de</div>
    <div style="font-size:90px;font-weight:900;color:{BRANCO};line-height:1.0;margin-bottom:28px;">AÇO</div>
    <div style="display:flex;flex-direction:column;gap:14px;">
      <div style="background:rgba(255,255,255,0.06);border-radius:12px;padding:18px 24px;border-left:5px solid {LARANJA};display:flex;gap:16px;align-items:center;">
        <span style="font-size:26px;flex-shrink:0;">🏗️</span>
        <div style="font-size:22px;color:{BRANCO};font-weight:600;line-height:1.3;">200 J de impacto · 15 kN compressão <span style="color:{LARANJA};">(ABNT NBR ISO 20345)</span></div>
      </div>
      <div style="background:rgba(255,255,255,0.06);border-radius:12px;padding:18px 24px;border-left:5px solid {AZUL};display:flex;gap:16px;align-items:center;">
        <span style="font-size:26px;flex-shrink:0;">🎯</span>
        <div style="font-size:22px;color:{BRANCO};font-weight:600;line-height:1.3;">Construção civil, siderurgia, metalurgia e indústria pesada</div>
      </div>
      <div style="background:rgba(231,76,60,0.15);border-radius:12px;padding:18px 24px;border-left:5px solid {VERMELHO};display:flex;gap:16px;align-items:center;">
        <span style="font-size:26px;flex-shrink:0;">⚡</span>
        <div style="font-size:22px;color:{BRANCO};font-weight:600;line-height:1.3;">Conduz eletricidade e temperatura — <span style="color:{VERMELHO};">não usar em risco elétrico</span></div>
      </div>
    </div>
  </div>
  {rodape()}
</div>
<button class="btn-dl" onclick="dl('s3','03-biqueira-aco')">⬇ Baixar Slide 3</button>
</div>

<!-- SLIDE 4 — Biqueira Composite -->
<div class="slide-wrap">
<div class="slide" id="s4" style="background:{AZUL};">
  <div style="height:10px;background:{LARANJA};"></div>
  <!-- Hero image -->
  <div style="height:400px;position:relative;overflow:hidden;">
    <img src="data:image/png;base64,{img_comp}" style="width:100%;height:100%;object-fit:cover;object-position:center;" />
    <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(54,94,181,1) 100%);"></div>
    <div style="position:absolute;top:16px;left:24px;background:rgba(255,255,255,0.2);border-radius:10px;padding:8px 20px;backdrop-filter:blur(8px);">
      <span style="font-size:14px;font-weight:800;letter-spacing:2px;color:{BRANCO};text-transform:uppercase;">Tipo 02 de 03</span>
    </div>
  </div>
  <!-- Content -->
  <div style="padding:16px 72px 0;">
    <div style="font-size:22px;font-weight:700;color:rgba(255,255,255,0.55);text-transform:uppercase;letter-spacing:2px;margin-bottom:4px;">Biqueira</div>
    <div style="font-size:84px;font-weight:900;color:{BRANCO};line-height:1.0;margin-bottom:8px;">COMPOSITE</div>
    <div style="font-size:20px;font-weight:700;color:{AMARELO};margin-bottom:24px;">Fibra de carbono + fibra de vidro + resina</div>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="background:rgba(255,255,255,0.12);border-radius:12px;padding:16px 24px;display:flex;gap:16px;align-items:center;">
        <span style="font-size:26px;">🔌</span>
        <div style="font-size:22px;color:{BRANCO};font-weight:700;line-height:1.3;"><span style="color:{AMARELO};">Isolante elétrico</span> — ideal para eletricistas</div>
      </div>
      <div style="background:rgba(255,255,255,0.12);border-radius:12px;padding:16px 24px;display:flex;gap:16px;align-items:center;">
        <span style="font-size:26px;">🪶</span>
        <div style="font-size:22px;color:{BRANCO};font-weight:700;line-height:1.3;"><span style="color:{AMARELO};">~35% mais leve</span> que a biqueira de aço</div>
      </div>
      <div style="background:rgba(255,255,255,0.12);border-radius:12px;padding:16px 24px;display:flex;gap:16px;align-items:center;">
        <span style="font-size:26px;">🛡️</span>
        <div style="font-size:22px;color:{BRANCO};font-weight:700;line-height:1.3;">Mesma certificação: <span style="color:{AMARELO};">200 J + 15 kN</span></div>
      </div>
      <div style="background:rgba(255,255,255,0.12);border-radius:12px;padding:16px 24px;display:flex;gap:16px;align-items:center;">
        <span style="font-size:26px;">🧲</span>
        <div style="font-size:22px;color:{BRANCO};font-weight:700;line-height:1.3;">Não detectada por <span style="color:{AMARELO};">detector de metais</span></div>
      </div>
    </div>
  </div>
  {rodape()}
</div>
<button class="btn-dl" onclick="dl('s4','04-biqueira-composite')">⬇ Baixar Slide 4</button>
</div>

<!-- SLIDE 5 — Biqueira Plástica -->
<div class="slide-wrap">
<div class="slide" id="s5" style="background:{CINZA};">
  <div style="height:10px;background:{AZUL};"></div>
  <!-- Hero image -->
  <div style="height:400px;position:relative;overflow:hidden;">
    <img src="data:image/png;base64,{img_plas}" style="width:100%;height:100%;object-fit:cover;object-position:center;" />
    <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(245,245,240,1) 100%);"></div>
    <div style="position:absolute;top:16px;left:24px;background:{PRETO};border-radius:10px;padding:8px 20px;">
      <span style="font-size:14px;font-weight:800;letter-spacing:2px;color:{BRANCO};text-transform:uppercase;">Tipo 03 de 03</span>
    </div>
  </div>
  <!-- Content -->
  <div style="padding:16px 72px 0;">
    <div style="font-size:22px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:2px;margin-bottom:4px;">Biqueira</div>
    <div style="font-size:84px;font-weight:900;color:{PRETO};line-height:1.0;margin-bottom:8px;">PLÁSTICA</div>
    <div style="font-size:20px;font-weight:700;color:{AZUL};margin-bottom:24px;">Polipropileno injetado — para riscos leves</div>
    <div style="display:flex;flex-direction:column;gap:14px;">
      <div style="background:{BRANCO};border-radius:12px;padding:18px 28px;box-shadow:0 4px 16px rgba(0,0,0,0.06);border-left:6px solid {VERDE};display:flex;gap:16px;align-items:center;">
        <span style="font-size:26px;flex-shrink:0;">✅</span>
        <div style="font-size:22px;color:{PRETO};font-weight:600;line-height:1.3;">Mais leve e confortável. Não conduz eletricidade.</div>
      </div>
      <div style="background:{BRANCO};border-radius:12px;padding:18px 28px;box-shadow:0 4px 16px rgba(0,0,0,0.06);border-left:6px solid {AZUL};display:flex;gap:16px;align-items:center;">
        <span style="font-size:26px;flex-shrink:0;">🎯</span>
        <div style="font-size:22px;color:{PRETO};font-weight:600;line-height:1.3;">Varejo, logística leve, laboratório</div>
      </div>
      <div style="background:rgba(231,76,60,0.08);border-radius:12px;padding:18px 28px;border-left:6px solid {VERMELHO};display:flex;gap:16px;align-items:center;">
        <span style="font-size:26px;flex-shrink:0;">⚠️</span>
        <div style="font-size:22px;color:{PRETO};font-weight:600;line-height:1.3;">Resistência menor — <span style="color:{VERMELHO};">não usar em áreas de alto impacto</span></div>
      </div>
    </div>
  </div>
  {rodape()}
</div>
<button class="btn-dl" onclick="dl('s5','05-biqueira-plastica')">⬇ Baixar Slide 5</button>
</div>

<!-- SLIDE 6 — Comparativo -->
<div class="slide-wrap">
<div class="slide" id="s6" style="background:{PRETO};">
  <div style="height:10px;background:{LARANJA};"></div>
  <div style="padding:56px 80px;">
    <div style="font-size:17px;font-weight:800;letter-spacing:3px;color:{LARANJA};text-transform:uppercase;margin-bottom:16px;">Comparativo</div>
    <div style="font-size:68px;font-weight:900;color:{BRANCO};line-height:1.05;margin-bottom:36px;">Qual usar em <span style="color:{LARANJA};">cada situação?</span></div>
    <div style="border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
      <div style="display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;background:rgba(255,255,255,0.1);padding:18px 24px;">
        <div style="font-size:17px;font-weight:800;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1px;">Situação</div>
        <div style="font-size:17px;font-weight:800;color:{LARANJA};text-transform:uppercase;letter-spacing:1px;text-align:center;">Aço</div>
        <div style="font-size:17px;font-weight:800;color:#90CAF9;text-transform:uppercase;letter-spacing:1px;text-align:center;">Composite</div>
        <div style="font-size:17px;font-weight:800;color:#A5D6A7;text-transform:uppercase;letter-spacing:1px;text-align:center;">Plástica</div>
      </div>
      {rows_html}
    </div>
    <div style="margin-top:20px;background:rgba(255,215,84,0.1);border-radius:12px;padding:18px 24px;border-left:4px solid {AMARELO};">
      <div style="font-size:21px;color:{AMARELO};font-weight:700;">⚠️ Sempre consulte o CA do calçado e o PPRA para a escolha correta.</div>
    </div>
  </div>
  {rodape()}
</div>
<button class="btn-dl" onclick="dl('s6','06-comparativo')">⬇ Baixar Slide 6</button>
</div>

<!-- SLIDE 7 — Erro comum -->
<div class="slide-wrap">
<div class="slide" id="s7" style="background:{AZUL_CLARO};">
  <div style="height:10px;background:{AZUL};"></div>
  <div style="padding:64px 88px 0;">
    <div style="font-size:17px;font-weight:800;letter-spacing:3px;color:{VERMELHO};text-transform:uppercase;margin-bottom:18px;">⚠️ Erro comum</div>
    <div style="font-size:72px;font-weight:900;color:{PRETO};line-height:1.05;margin-bottom:38px;">Calçado <span style="color:{VERMELHO};">errado</span> para o risco errado.</div>
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div style="background:{BRANCO};border-radius:16px;padding:28px 36px;box-shadow:0 4px 20px rgba(0,0,0,0.07);border-left:7px solid {VERMELHO};">
        <div style="font-size:20px;font-weight:800;color:{VERMELHO};margin-bottom:8px;">❌ SITUAÇÃO REAL</div>
        <div style="font-size:26px;font-weight:700;color:{PRETO};line-height:1.4;">Eletricista com biqueira de aço. Em caso de falha elétrica, o risco de choque pelos pés aumenta significativamente.</div>
      </div>
      <div style="background:{BRANCO};border-radius:16px;padding:28px 36px;box-shadow:0 4px 20px rgba(0,0,0,0.07);border-left:7px solid {VERMELHO};">
        <div style="font-size:20px;font-weight:800;color:{VERMELHO};margin-bottom:8px;">❌ SITUAÇÃO REAL</div>
        <div style="font-size:26px;font-weight:700;color:{PRETO};line-height:1.4;">Trabalhador com biqueira plástica em área com risco de queda de objetos pesados — proteção insuficiente.</div>
      </div>
      <div style="background:{AZUL};border-radius:16px;padding:26px 36px;">
        <div style="font-size:24px;font-weight:800;color:{BRANCO};line-height:1.4;">💡 A escolha certa começa pela análise do risco. Consulte sempre o técnico de segurança e o PPRA.</div>
      </div>
    </div>
  </div>
  {rodape()}
</div>
<button class="btn-dl" onclick="dl('s7','07-erro-comum')">⬇ Baixar Slide 7</button>
</div>

<!-- SLIDE 8 — CTA -->
<div class="slide-wrap">
<div class="slide" id="s8" style="background:{PRETO};">
  <div style="height:10px;background:{LARANJA};"></div>
  <div style="height:calc(100% - 80px);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:60px 90px;gap:36px;">
    <img src="data:image/png;base64,{logo_branco}" style="height:58px;" alt="Fortis">
    <div style="font-size:62px;font-weight:900;color:{BRANCO};line-height:1.15;">O calçado certo<br>para o risco certo.<br><span style="color:{LARANJA};">Sempre.</span></div>
    <div style="font-size:27px;color:rgba(255,255,255,0.6);font-weight:500;line-height:1.6;">Todos os calçados da Fortis possuem CA válido e indicação correta para cada tipo de risco.</div>
    <div style="background:{LARANJA};border-radius:50px;padding:24px 52px;">
      <div style="font-size:25px;font-weight:900;color:{BRANCO};">📌 Salva esse conteúdo — pode salvar seus dedos</div>
    </div>
  </div>
  {rodape()}
</div>
<button class="btn-dl" onclick="dl('s8','08-cta')">⬇ Baixar Slide 8</button>
</div>

<script>
async function dl(id,nome){{
  const el=document.getElementById(id);
  const c=await html2canvas(el,{{scale:1,useCORS:true,allowTaint:true}});
  const a=document.createElement('a');a.href=c.toDataURL('image/png');
  a.download=nome+'.png';a.click();
}}
async function baixarTodos(){{
  const slides=[['s1','01-capa'],['s2','02-introducao'],['s3','03-biqueira-aco'],['s4','04-biqueira-composite'],
    ['s5','05-biqueira-plastica'],['s6','06-comparativo'],['s7','07-erro-comum'],['s8','08-cta']];
  const prog=document.getElementById('progress');
  prog.style.display='block';
  const zip=new JSZip();
  for(let i=0;i<slides.length;i++){{
    const[id,nome]=slides[i];
    prog.textContent=`Gerando slide ${{i+1}} de ${{slides.length}}...`;
    const el=document.getElementById(id);
    const c=await html2canvas(el,{{scale:1,useCORS:true,allowTaint:true}});
    zip.file(nome+'.png',c.toDataURL('image/png').split(',')[1],{{base64:true}});
  }}
  prog.textContent='Compactando...';
  const blob=await zip.generateAsync({{type:'blob'}});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download='carrossel-biqueiras-fortis-15abr.zip';a.click();
  prog.textContent='✅ Pronto!';
}}
</script>
</body>
</html>"""

with open('/Users/katiucemarchi/Desktop/fortis-core/assets/posts/2026-04/qua-15-carrossel-biqueiras.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("OK")
