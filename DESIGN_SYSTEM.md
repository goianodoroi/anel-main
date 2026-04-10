# Oura Ring 4 — Design System Completo

> Documento de referência para o clone do produto https://ouraring.com/store/rings/oura-ring-4
> Cobre tokens de design, tipografia, cores, espaçamento, componentes, animações, layout e interações.

---

## Índice

1. [Identidade Visual](#1-identidade-visual)
2. [Paleta de Cores](#2-paleta-de-cores)
3. [Tipografia](#3-tipografia)
4. [Espaçamento e Grid](#4-espaçamento-e-grid)
5. [Border Radius](#5-border-radius)
6. [Sombras e Elevação](#6-sombras-e-elevação)
7. [Iconografia](#7-iconografia)
8. [Componentes](#8-componentes)
9. [Seções da Página](#9-seções-da-página)
10. [Animações e Transições](#10-animações-e-transições)
11. [Interações e Estados](#11-interações-e-estados)
12. [Layout e Responsividade](#12-layout-e-responsividade)
13. [Assets e Mídia](#13-assets-e-mídia)
14. [CSS Variables — Referência Completa](#14-css-variables--referência-completa)

---

## 1. Identidade Visual

### Filosofia
O design da Oura é **editorial, minimal e premium**. Cada elemento comunica precisão científica com calor humano. A paleta quente de cremes e charcoals evita o estereótipo frio de "tech product" — a Oura se posiciona como um objeto de bem-estar pessoal, não um gadget.

### Princípios visuais
| Princípio | Aplicação |
|---|---|
| **Whitespace generoso** | Seções com padding vertical mínimo de 64px (py-16) |
| **Tipografia como layout** | Headlines grandes constroem hierarquia, não grade de colunas |
| **Mistura sans + serif** | AkkuratLL (geometric sans) + Cormorant Garamond (editorial serif italic) |
| **Calor material** | Creme, taupe, titanium — tons que remetem a materiais físicos |
| **Sem bordes agressivas** | Toda superfície tem border-radius extremamente generoso (26–38px) |

---

## 2. Paleta de Cores

### Cores primárias da marca

| Token | Hex | Descrição | Uso |
|---|---|---|---|
| `--oura-cream` | `#f7f1e8` | Creme base | Background padrão da página |
| `--oura-cream-deep` | `#efe7dc` | Creme escuro | Cards e seções levemente diferenciadas |
| `--oura-soft` | `#f3ece3` | Creme suave | Backgrounds de cards internos, inputs, seção Buy/Specs |
| `--oura-line` | `#d8d0c5` | Bege/taupe | Todas as bordas e divisórias |
| `--oura-ink` | `#1c1b1a` | Quase preto | Cor de texto primária, backgrounds escuros |
| `--oura-charcoal` | `#1c1b1a` | Charcoal (= ink) | Seção Smart Sensing, Hero |
| `--oura-slate` | `#4a4741` | Marrom escuro | Texto de headings em fundo claro, botões |
| `--oura-mute` | `#6b665f` | Marrom médio | Texto secundário, labels, body copy |

### Acabamentos do anel (dados para UI)

| Acabamento | Swatch hex aproximado | Background do slide |
|---|---|---|
| Silver | — | `#d7d3cb` |
| Black | — | `#3b3b3b` |
| Brushed Silver | — | `#b9b9b7` |
| Stealth | — | `#1d1d1d` |
| Gold | — | `#c6a66c` |
| Rose Gold | — | `#d4a39a` |

### Transparências utilizadas

| Contexto | Valor | Uso |
|---|---|---|
| Hero overlay | `rgba(28,27,26,0.9)` → `rgba(28,27,26,0.2)` | Gradiente lateral no hero |
| Hero radial | `rgba(255,255,255,0.12)` | Brilho sutil no canto superior |
| Nav backdrop | `rgba(247,241,232,0.88)` | Sticky nav com blur |
| Cards escuros | `bg-white/[0.04]` — `bg-white/[0.06]` | Cards sobre fundo charcoal |
| Borda escura | `border-white/10` — `border-white/14` | Bordas sobre charcoal |
| Texto secundário escuro | `text-[var(--oura-cream)]/55` — `/78` | Texto muted sobre charcoal |

### Gradientes

```css
/* Hero: gradiente direcional + brilho radial */
background: radial-gradient(circle at 25% 30%, rgba(255,255,255,0.12), transparent 22%),
            linear-gradient(90deg, rgba(28,27,26,0.9), rgba(28,27,26,0.42), rgba(28,27,26,0.2));
```

---

## 3. Tipografia

### Famílias de fonte

| Papel | Família | Fallback | Peso usado |
|---|---|---|---|
| **Sans principal** | `AkkuratLL` | `"Helvetica Neue", Arial, sans-serif` | 400 (regular), nenhum bold |
| **Editorial serif** | `Cormorant Garamond` (Google Fonts) | `Georgia, serif` | 300 italic |
| **Monospace** | `SF Mono` | `Roboto Mono, ui-monospace` | — |

> **Nota original:** O site da Oura usa "PP Editorial New" da Pangram Pangram (fonte paga) para o serif. `Cormorant Garamond 300 italic` é o substituto open-source mais fiel.

### Escala de tamanhos

| Elemento | Tamanho (clamp / fixo) | Line-height | Letter-spacing |
|---|---|---|---|
| **H1 Hero** | `clamp(3.5rem, 7vw, 6rem)` | `0.96` | `-0.06em` |
| **H2 principal** | `clamp(2.6rem, 5vw, 5rem)` | `0.96` | `-0.05em` |
| **H2 seção grande** | `clamp(2.4rem, 4.5vw, 4.3rem)` | `0.98` | `-0.05em` |
| **H2 seção média** | `clamp(2.3rem, 4.5vw, 4rem)` | `0.98` | `-0.05em` |
| **H2 cards** | `clamp(2.2rem, 4vw, 3.5rem)` | `0.98` | `-0.05em` |
| **H3 card title** | `1.55rem` | `1.05` | `-0.04em` |
| **H3 footer / specs** | `1.5rem (text-2xl)` | default | `-0.04em` |
| **Label uppercase** | `text-sm (0.875rem)` | default | `0.18em` |
| **Body / descrição** | `text-lg (1.125rem)` | `2rem (leading-8)` | default |
| **Body small** | `text-sm (0.875rem)` | `1.75rem (leading-7)` | default |
| **Nav links** | `text-sm` | default | default |
| **Botão CTA** | `text-xs` | default | `0.18em` (uppercase) |
| **Botão secondary** | `text-sm` | default | default |

### Regras tipográficas

- **Todos os headings têm `font-weight: 400`** — a Oura nunca usa bold em display text
- **Letter-spacing negativo em headings** — compressão horizontal cria densidade editorial
- **Line-height abaixo de 1** em H1/H2 — as linhas se tocam, efeito de bloco de texto
- **Labels em uppercase** sempre têm `tracking-[0.18em]` e são `text-sm`
- **Mistura editorial:** palavras-chave em serif italic inseridas dentro de texto sans

### Padrão de mistura serif + sans

```tsx
// Padrão usado em todos os headings principais
<h2>
  Texto em AkkuratLL{" "}
  <em style={{ fontFamily: "var(--font-editorial)", fontStyle: "italic", fontWeight: 300 }}>
    palavras em destaque
  </em>
</h2>
```

Exemplos de aplicação:
- "Our most personal **smart ring** ever"
- "Sleeker, smarter, and **made for you**"
- "Smart Sensing powers our most **accurate smart ring ever**"
- "Incredible comfort for **24/7 wear**"
- "A finish for **every lifestyle**"
- "Oura Membership **grows with you**"

---

## 4. Espaçamento e Grid

### Escala de espaçamento interna (Tailwind v4)

| Token Tailwind | px | Uso frequente |
|---|---|---|
| `gap-2` / `gap-2.5` | 8 / 10px | Gap entre ícone e texto em botões |
| `gap-3` | 12px | Gap entre itens de lista, swatches |
| `gap-4` | 16px | Gap padrão interno de cards |
| `gap-5` | 20px | Padding horizontal de cards |
| `gap-6` | 24px | Grid de cards de especificações |
| `gap-8` | 32px | Grid de cards grandes |
| `gap-10` | 40px | Gap entre colunas em desktop |
| `gap-12` | 48px | Gap no hero |
| `p-5` | 20px | Padding de card pequeno |
| `p-8` | 32px | Padding de card grande (Buy, Specs) |
| `px-5 py-16` | 20px / 64px | Padding padrão de seção mobile |
| `md:px-8` | 32px | Padding lateral desktop |
| `py-24 lg:py-28` | 96px / 112px | Padding vertical do Hero |
| `py-14` | 56px | Padding do Footer |

### Grid do conteúdo

```css
/* Wrapper de conteúdo principal */
max-width: 1380px;
margin: 0 auto;
padding: 0 20px;   /* mobile */
padding: 0 32px;   /* md+ */
```

### Proporções de colunas no grid de 2 colunas

| Seção | Proporção | Direção |
|---|---|---|
| Hero | `0.95fr / 1.05fr` | texto esquerda, cards direita |
| Intro | `0.95fr / 1.05fr` | heading esquerda, body direita |
| Smart Sensing | `1.08fr / 0.92fr` | vídeo esquerda, texto direita |
| Comfort | `0.92fr / 1.08fr` | texto esquerda, vídeo direita |
| Battery / Health | `1fr / 1fr` | dois cards iguais |
| Finishes | `0.95fr / 1.05fr` | controles esquerda, imagem direita |
| Membership | `0.42fr / 0.58fr` | foto hero esquerda, cards direita |
| Buy / Specs | `0.45fr / 0.55fr` | charger esquerda, specs direita |
| Footer | `0.9fr / 1.1fr` | newsletter esquerda, links direita |

---

## 5. Border Radius

A Oura usa border-radius excepcionalmente grandes — criando "pílulas" e "cápsulas" em quase tudo.

| Token | px equivalente | Uso |
|---|---|---|
| `rounded-full` | 9999px | Botões, swatches, pills de tab, input |
| `rounded-[38px]` | 38px | Container externo do Finish selector |
| `rounded-[36px]` | 36px | Cards de vídeo (Smart Sensing, Comfort) |
| `rounded-[34px]` | 34px | Hero stats grid, Membership hero card |
| `rounded-[32px]` | 32px | Cards grandes (Battery, Buy, Specs) |
| `rounded-[30px]` | 30px | Imagem interna do Finish |
| `rounded-[28px]` | 28px | Cards de membership |
| `rounded-[26px]` | 26px | Accordion items, imagem app |
| `rounded-[24px]` | 24px | Badge de bateria, What's Included bg |

---

## 6. Sombras e Elevação

A Oura praticamente **não usa box-shadow**. A profundidade é criada por:
- **Bordas sutis** com `--oura-line` (#d8d0c5)
- **Diferença de background** entre seções
- **`backdrop-blur-xl`** na nav e nos hero cards
- **Transparências em camadas** (overlays sobre vídeo/imagem)

```css
/* Única exceção: nav blur + transparência */
background: rgba(247, 241, 232, 0.88);
backdrop-filter: blur(24px); /* backdrop-blur-xl */

/* Hero cards: blur glassmorphism leve */
backdrop-filter: blur(4px); /* backdrop-blur-sm */
```

---

## 7. Iconografia

### Biblioteca: Lucide React

Ícones usados no clone:

| Ícone | Componente | Tamanho | Contexto |
|---|---|---|---|
| Seta direita | `<ArrowRight>` | `size-4` | CTA secundário, link "Choose ring" |
| Seta direita nav | `<ChevronRight>` | `size-4` | Botão "Shop" na nav |
| Seta dropdown | `<ChevronDown>` | `size-5` | Accordion trigger |
| Play | `<Play>` | `size-4` | Botão "Watch film" |
| Bateria | `<Battery>` | `size-5` | Badge de bateria |
| Check | `<Check>` | `size-4` | What's Included list |

### Regras de ícones
- Todos usam `size-*` (width = height = valor)
- Cor herda do texto pai ou usa a cor específica da seção
- Ícone `ChevronDown` do accordion rotaciona `180deg` quando open

---

## 8. Componentes

### 8.1 Navigation (Sticky Header)

```
[ŌURA logo]    [Smart Sensing] [Comfort] [Finishes] [Membership] [Specs]    [SHOP →]
```

| Propriedade | Valor |
|---|---|
| `position` | `sticky top-0 z-40` |
| Background | `rgba(247,241,232,0.88)` + `backdrop-blur-xl` |
| Borda inferior | `border-b border-[--oura-line]` |
| Padding | `px-5 py-4 md:px-8` |
| Max-width interno | `1380px` |
| Logo | `text-xl tracking-[-0.06em]` — "ŌURA" (com macron) |
| Nav links | `text-sm text-[--oura-mute]`, `hover:text-[--oura-ink]` |
| Nav links visibilidade | Oculto em mobile, flex a partir de `lg` |
| Botão Shop | Pill `rounded-full bg-[--oura-ink] text-[--oura-cream] text-xs uppercase tracking-[0.18em] px-4 py-2` |
| Botão Shop hover | `hover:bg-black` |

---

### 8.2 Botões

#### Botão primário (CTA principal — fundo claro)
```css
display: inline-flex;
align-items: center;
justify-content: center;
gap: 8px;
border-radius: 9999px;
background: var(--oura-cream);
color: var(--oura-ink);
padding: 14px 24px;
font-size: 0.875rem;
font-weight: 500;
transition: background 150ms;

/* hover */
background: #ffffff;
```

#### Botão secundário (outline — sobre fundo escuro)
```css
border-radius: 9999px;
border: 1px solid rgba(255,255,255,0.20);
color: var(--oura-cream);
padding: 14px 24px;
font-size: 0.875rem;
transition: background 150ms;

/* hover */
background: rgba(255,255,255,0.08);
```

#### Botão ghost com ícone (sobre fundo escuro)
```css
border-radius: 9999px;
border: 1px solid rgba(255,255,255,0.16);
color: var(--oura-cream);
padding: 12px 20px;
font-size: 0.875rem;
gap: 8px;

/* hover */
background: rgba(255,255,255,0.08);
```

#### Botão ghost (sobre fundo claro)
```css
border-radius: 9999px;
border: 1px solid var(--oura-line);
color: var(--oura-ink);
padding: 12px 20px;
font-size: 0.875rem;
gap: 8px;

/* hover */
background: var(--oura-soft);
```

#### Pill de seleção (Finish selector / Membership tabs)

**Inativo:**
```css
border-radius: 9999px;
border: 1px solid var(--oura-line);
background: #ffffff;
color: var(--oura-slate);
padding: 10px 14px;
font-size: 0.875rem;
transition: all 200ms;

/* hover */
background: var(--oura-soft);
```

**Ativo:**
```css
border: 1px solid var(--oura-slate);
background: var(--oura-slate);
color: var(--oura-cream);
```

#### Botão de submit (footer)
```css
border-radius: 9999px;
background: var(--oura-slate);
color: var(--oura-cream);
padding: 12px 24px;
font-size: 0.875rem;

/* hover */
background: var(--oura-ink);
```

---

### 8.3 Accordion

Componente de expansão usado em Smart Sensing (tema escuro) e Comfort (tema claro).

**Estrutura:**
```
[Article container]
  [Button: título + ChevronDown]
  [div animado: grid-rows-[0fr→1fr]]
    [div overflow-hidden]
      [Conteúdo de texto]
```

**Estilos do container:**
```css
/* Claro */
border-radius: 26px;
border: 1px solid var(--oura-line);
background: rgba(255,255,255,0.75);
transition: colors 200ms;

/* Escuro */
border-radius: 26px;
border: 1px solid rgba(255,255,255,0.14);
background: rgba(255,255,255,0.04);
```

**Animação de abertura/fechamento:**
```css
/* Fechado */
display: grid;
grid-template-rows: 0fr;
opacity: 0;
transition: grid-template-rows 300ms ease-in-out, opacity 300ms ease-in-out;

/* Aberto */
grid-template-rows: 1fr;
opacity: 1;
```

**ChevronDown rotation:**
```css
transition: transform 300ms;
/* Fechado: */ transform: rotate(0deg);
/* Aberto:  */ transform: rotate(180deg);
```

**Texto do accordion:**
- Título: `text-xl tracking-[-0.03em]`
- Descrição: `text-sm leading-7 opacity-78` (via `text-current/78`)
- Padding aberto: `px-5 pb-5`
- Padding do trigger: `px-5 py-4`
- Comportamento: apenas 1 item aberto por vez (toggle exclusivo)

---

### 8.4 Finish Selector

Selector de acabamentos com swatch circular + nome.

**Estrutura:**
```
[Pill button]
  [img: swatch 20x20 rounded-full object-cover]
  [span: nome do acabamento]
```

**Container do slide:**
```css
border-radius: 38px;
border: 1px solid var(--oura-line);
padding: 16px;
background: [cor específica do acabamento]; /* transição 500ms */
transition: background-color 500ms;
```

**Imagem do slide:**
```css
aspect-ratio: 2/1;
border-radius: 30px;
object-fit: cover;
transition: opacity 300ms;
```

---

### 8.5 Membership Tabs

Tabs clicáveis que trocam conteúdo com fade transition.

**Comportamento de transição:**
```
click → opacity: 0 (200ms) → swap content → opacity: 1
```

```css
transition: opacity 200ms;
/* transitioning: */ opacity: 0;
/* visible:       */ opacity: 1;
```

**Layout do conteúdo:**
```
[Hero photo: aspect-ratio 0.9, rounded-[34px]]  |  [Grid de cards: 2-3 colunas]
     0.42fr                                              0.58fr
```

**Card de feature:**
```css
border-radius: 28px;
border: 1px solid var(--oura-line);
background: #ffffff;
overflow: hidden;

/* Imagem topo */
aspect-ratio: 0.95;
object-fit: cover;

/* Corpo */
padding: 20px;
```

---

### 8.6 Stats Card (Hero)

Mini-cards dentro do hero que exibem 3 destaques do produto.

```css
/* Container grid */
border-radius: 34px;
border: 1px solid rgba(255,255,255,0.12);
background: rgba(255,255,255,0.04);
padding: 20px;
backdrop-filter: blur(4px);
grid-template-columns: repeat(3, 1fr);

/* Card individual */
border-radius: 26px;
background: rgba(255,255,255,0.06);
padding: 20px;
```

---

### 8.7 Badge de bateria

```css
display: inline-flex;
align-items: center;
gap: 12px;
border-radius: 24px;
background: var(--oura-cream);
padding: 16px 20px;
font-size: 0.875rem;
color: var(--oura-slate);
```

---

### 8.8 Input de email

```css
min-height: 56px;
flex: 1;
border-radius: 9999px;
border: 1px solid var(--oura-line);
background: var(--oura-soft);
padding: 0 20px;
font-size: 0.875rem;
outline: none;
transition: border-color 150ms;

/* focus */
border-color: var(--oura-slate);
```

---

### 8.9 Cards de especificações (Specs)

```css
border-radius: 24px;
background: var(--oura-soft);
padding: 20px;

/* Título */
font-size: 1.5rem;
letter-spacing: -0.04em;
color: var(--oura-slate);

/* Items da lista */
font-size: 0.875rem;
line-height: 1.75rem;
color: var(--oura-mute);
space-y: 12px;
```

---

### 8.10 What's Included list

```css
/* Container */
border-radius: 24px;
background: var(--oura-soft);
padding: 20px;

/* Label */
text-sm uppercase tracking-[0.18em] color: --oura-mute;

/* Item */
display: flex;
align-items: center;
gap: 12px;
font-size: 0.875rem;
color: var(--oura-slate);
/* + Check icon size-4 */
```

---

## 9. Seções da Página

### Mapa visual (top → bottom)

```
┌─────────────────────────────────────────┐
│  STICKY NAV (z-40)                      │  bg: cream/88% blur
├─────────────────────────────────────────┤
│  HERO                                   │  bg: charcoal (#1c1b1a)
│  foto + gradiente overlay               │  texto: cream
│  headline + CTAs | 3 stats cards        │
├─────────────────────────────────────────┤
│  INTRO / VALUE PROP                     │  bg: cream
│  heading esquerda | body direita        │
├─────────────────────────────────────────┤
│  SMART SENSING                          │  bg: charcoal (#1c1b1a)
│  vídeo esquerda | accordion direita     │  texto: cream
├─────────────────────────────────────────┤
│  COMFORT                                │  bg: cream
│  accordion esquerda | vídeo direita     │
├─────────────────────────────────────────┤
│  BATTERY + LONG-TERM HEALTH             │  bg: cream
│  2 cards brancos lado a lado            │
├─────────────────────────────────────────┤
│  FINISHES                               │  bg: cream
│  pills + swatch | slide imagem          │
├─────────────────────────────────────────┤
│  MEMBERSHIP                             │  bg: cream
│  tabs | hero foto | 2-3 feature cards   │
├─────────────────────────────────────────┤
│  BUY / SPECS                            │  bg: soft (#f3ece3)
│  charger + what's included | tech specs │
├─────────────────────────────────────────┤
│  FOOTER                                 │  bg: white
│  newsletter | 3 grupos de links         │
│  copyright                              │
└─────────────────────────────────────────┘
```

### Seções com fundo escuro (charcoal)
- Hero
- Smart Sensing

### Seções com fundo diferenciado
- Buy/Specs: `#f3ece3` (--oura-soft)
- Footer: `#ffffff` branco puro

### Todas as demais seções: `#f7f1e8` (--oura-cream)

---

## 10. Animações e Transições

### 10.1 Hero — entrada imediata (CSS animation)

```css
@keyframes hero-text {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0);    }
}

/* Texto do hero */
.hero-text-in {
  animation: hero-text 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
}

/* Cards do hero */
.hero-cards-in {
  animation: hero-text 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
}
```

Curva `cubic-bezier(0.22, 1, 0.36, 1)` = easing suave com overshoot leve (spring-like).

### 10.2 Scroll — FadeSection (IntersectionObserver)

```css
/* Estado inicial (antes de entrar na viewport) */
.fade-section {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

/* Estado após entrar */
.fade-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Configuração do observer:**
```ts
new IntersectionObserver(callback, {
  threshold: 0.1,               // 10% do elemento visível
  rootMargin: "0px 0px -60px 0px"  // trigger 60px antes da borda inferior
})
```

**Delays de stagger** usados em pares de colunas:
- Coluna esquerda: `delay: 0ms`
- Coluna direita: `delay: 100ms`

### 10.3 Accordion — animação de altura

```css
/* Técnica: CSS Grid rows (nenhum JS para height) */
display: grid;
transition: grid-template-rows 300ms ease-in-out, opacity 300ms ease-in-out;

/* Fechado */
grid-template-rows: 0fr;
opacity: 0;

/* Aberto */
grid-template-rows: 1fr;
opacity: 1;
```

### 10.4 Tabs de membership — fade on switch

```ts
// Lógica React
setTabTransitioning(true)       // opacity → 0 (200ms)
setTimeout(() => {
  setDisplayTab(newTitle)       // swap conteúdo
  setTabTransitioning(false)    // opacity → 1
}, 200)
```

### 10.5 Finish selector — troca de imagem

```css
/* Background do container */
transition: background-color 500ms;

/* Imagem: troca por re-render com key prop (fade via browser) */
transition: opacity 300ms;
```

### 10.6 Transições globais de hover

| Elemento | Propriedade | Duração |
|---|---|---|
| Botões | `background` | 150ms (default Tailwind) |
| Pills de seleção | `all` | 200ms |
| Nav links | `color` | 150ms |
| Links do footer | `color` | 150ms |
| Input | `border-color` | 150ms |
| Accordion item | `colors` | 200ms |
| ChevronDown | `transform` | 300ms |

---

## 11. Interações e Estados

### Nav — comportamento sticky
- Posição: `sticky top-0 z-40`
- Background torna-se `rgba(247,241,232,0.88)` com `backdrop-blur-xl` em todos os estados (não muda com scroll)

### Accordion — toggle exclusivo
- Sempre exatamente 1 item aberto
- Clicar num item fechado abre ele e fecha o atual
- Clicar no item aberto não fecha (mantém aberto)
- Estado inicial: primeiro item aberto

### Finish selector — estado ativo
- Sempre 1 acabamento selecionado
- Estado inicial: Silver
- Background do slide-container muda com `transition 500ms`

### Membership tabs — troca de conteúdo
- Sempre 1 tab ativa
- Estado inicial: "Sleep"
- Transição: fade out (200ms) → swap → fade in

### Scroll behavior
- `scroll-behavior: smooth` global
- Links de âncora da nav (`#smart-sensing`, `#comfort` etc.) fazem scroll suave

---

## 12. Layout e Responsividade

### Breakpoints (Tailwind v4 padrão)

| Prefixo | Min-width | Comportamento |
|---|---|---|
| — (mobile) | 0px | Stack vertical, 1 coluna |
| `sm:` | 640px | Botões hero em linha (`flex-row`) |
| `md:` | 768px | Padding lateral 32px, 2 cols em battery cards |
| `lg:` | 1024px | Grid de 2 colunas em todas as seções |
| `xl:` | 1280px | Membership cards passam para 3 colunas |

### Comportamento por seção

| Seção | Mobile | Desktop (lg+) |
|---|---|---|
| Nav | Logo + Shop button (sem links de nav) | Logo + links + Shop button |
| Hero | Stack vertical, sem grid | Grid 2 colunas |
| Intro | Stack vertical | Grid 2 colunas |
| Smart Sensing | Stack (vídeo em cima) | Grid 2 colunas |
| Comfort | Stack (accordion em cima) | Grid 2 colunas |
| Battery | Stack (1 coluna) | Grid 2 colunas |
| Finishes | Stack (pills → slide) | Grid 2 colunas |
| Membership tabs | 2 colunas de cards | 3 colunas de cards (xl+) |
| Buy/Specs | Stack | Grid 2 colunas |
| Footer links | Stack | Grid 3 colunas |

### Imagens responsivas

Todas as imagens usam parâmetros Imgix com width adaptado:
- Desktop: `w=1920` ou `w=3840`
- Mobile: `w=640`
- Modo: `fit=crop`, `fm=png`, `q=70`
- Aspect-ratio forçado via `ar=2%3A1` etc.

---

## 13. Assets e Mídia

### Imagens principais

| Asset | URL base (Imgix) | Dimensões |
|---|---|---|
| Hero background | `blue-sky/pop/gen4/hero-final.jpg` | 4:3, crop focalpoint x=0.2 y=0.44 |
| Smart Sensing poster | `blue-sky/pop/gen4/OMA_PoP_Video_240924_v005_HD_1_poster.png` | 1:1 |
| Comfort poster | `blue-sky/pop/gen4/OMA_PoP_Video_240924_v005_HD_2_poster.png` | 1:1 |
| Long-term health | `pop-gen4-long-term-health-en-2.jpg` | 1.3:1 |
| Charger | `product/pdp/pdp-tech-specs-or4-charger.png` | livre |

### Vídeos

| Vídeo | URL | Comportamento |
|---|---|---|
| Smart Sensing | `OMA_PoP_Video_240924_v005_HD_1.mp4` | autoplay, loop, muted, playsInline |
| Comfort | `OMA_PoP_Video_240924_v005_HD_2.mp4` | autoplay, loop, muted, playsInline |

### Acabamentos — slides e swatches (Imgix)

| Acabamento | Slide path | Swatch path |
|---|---|---|
| Silver | `gen4/finishes-carousel-slide-silver.png` | `gen4/swatch-silver.png` |
| Black | `gen4/finishes-carousel-slide-black.png` | `gen4/swatch-black.png` |
| Brushed Silver | `gen4/finishes-carousel-slide-brushed-silver.png` | `gen4/swatch-brushed-silver.png` |
| Stealth | `gen4/finishes-carousel-slide-stealth.png` | `gen4/swatch-stealth.png` |
| Gold | `gen4/finishes-carousel-slide-gold.png` | `gen4/swatch-gold.png` |
| Rose Gold | `gen4/finishes-carousel-slide-rose-gold.png` | `gen4/swatch-rose-gold.png` |

> Base CDN: `https://ourahealth.imgix.net/blue-sky/pop/`

### Membership — imagens hero + cards

| Tab | Hero | Tipo |
|---|---|---|
| Sleep | `blue-sky/pop/sleep_feature_or4.jpg` | lifestyle photo |
| Activity | `blue-sky/pop/activity_and_fitness_feature_or4.jpg` | lifestyle photo |
| Readiness | `blue-sky/pop/readiness_feature_or4.jpg` | lifestyle photo |

Cards de feature usam screenshots do app em `membership-tabs/`.

---

## 14. CSS Variables — Referência Completa

```css
:root {
  /* ── Cores Oura ─────────────────────────── */
  --oura-cream:       #f7f1e8;   /* bg base da página */
  --oura-cream-deep:  #efe7dc;   /* bg levemente mais escuro */
  --oura-soft:        #f3ece3;   /* bg cards internos, Buy section */
  --oura-line:        #d8d0c5;   /* bordas e divisórias */
  --oura-ink:         #1c1b1a;   /* texto primário e bg escuro */
  --oura-charcoal:    #1c1b1a;   /* alias de ink para bg de seções */
  --oura-slate:       #4a4741;   /* headings em fundo claro, botões */
  --oura-mute:        #6b665f;   /* texto secundário, labels */

  /* ── Fontes ─────────────────────────────── */
  --font-sans:        "AkkuratLL", "Helvetica Neue", Arial, sans-serif;
  --font-editorial:   var(--font-editorial, "Georgia", serif);
                      /* Cormorant Garamond 300 italic via next/font */

  /* ── Radius base (shadcn) ───────────────── */
  --radius:           0.625rem;  /* 10px */

  /* ── Tokens shadcn (mapeados para Oura) ─── */
  --background:       oklch(0.96 0.01 82);   /* ≈ #f7f1e8 */
  --foreground:       oklch(0.18 0.01 70);   /* ≈ #1c1b1a */
  --primary:          oklch(0.2  0.01 70);   /* ≈ #1e1d1c */
  --primary-foreground: oklch(0.96 0.01 82);
  --secondary:        oklch(0.92 0.01 82);
  --muted:            oklch(0.94 0.01 82);
  --muted-foreground: oklch(0.44 0.01 70);   /* ≈ #6b665f */
  --border:           oklch(0.87 0.01 82);   /* ≈ #d8d0c5 */
  --input:            oklch(0.87 0.01 82);
  --ring:             oklch(0.58 0.01 70);
}
```

---

## Checklist de implementação

Ao criar um componente para este design system, verifique:

- [ ] Background correto para o tema da seção (cream / charcoal / soft / white)
- [ ] Todas as bordas usam `--oura-line` (claro) ou `rgba(255,255,255,0.14)` (escuro)
- [ ] `border-radius` generoso conforme a escala acima
- [ ] `font-weight: 400` em todos os headings
- [ ] `letter-spacing` negativo em display text
- [ ] Labels em uppercase com `tracking-[0.18em]`
- [ ] Italic serif aplicado nas palavras-chave do heading
- [ ] Transições com `ease` (não linear) e duração 200–500ms
- [ ] Seções animadas com `.fade-section` + `IntersectionObserver`
- [ ] Padding de seção: `px-5 py-16 md:px-8`
- [ ] Max-width wrapper: `max-w-[1380px] mx-auto`
- [ ] Hover states em todos os elementos interativos
- [ ] Imagens com `object-fit: cover` e aspect-ratio forçado
