# 🚕 LOUBER — Guia de Instalação

A app de boleias onde a frota inteira és tu.

## Passo 1 · Configurar (2 minutos)

Abre o `index.html` e edita o bloco `CONFIG` no topo do `<script>`:

1. **NTFY_TOPIC** — muda para um nome secreto e único, ex.: `louber-louis-9f3kx27q`.
   (Quem souber o tópico consegue enviar-te notificações, por isso usa algo difícil de adivinhar.)
2. **WHATSAPP_NUMBER** — o teu número em formato internacional sem `+`, ex.: `351912345678`.
3. **PASSENGERS** — os nomes reais da tua mulher e filha (e os emojis que quiseres).

## Passo 2 · Publicar online (grátis, ~5 minutos)

A forma mais simples é o **GitHub Pages**:

1. Cria um repositório novo no GitHub (pode ser privado? não — Pages grátis exige público, ou usa Cloudflare Pages/Netlify para privado).
2. Faz upload destes 5 ficheiros: `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`.
3. Settings → Pages → Branch: `main` → Save.
4. Em ~1 minuto a app fica em `https://<teu-user>.github.io/<repo>/`.

Alternativas igualmente grátis: **Netlify Drop** (arrastas a pasta para netlify.com/drop e está feito) ou **Cloudflare Pages**.

> O HTTPS é obrigatório para a PWA funcionar — todas estas opções já o dão.

## Passo 3 · Receber os pedidos no TEU telemóvel

1. Instala a app **ntfy** (Play Store ou App Store) no teu telemóvel.
2. Abre-a → **Subscribe to topic** → escreve exatamente o mesmo nome que puseste em `NTFY_TOPIC`.
3. Pronto. Sempre que elas pedirem uma boleia, enviarem uma mensagem no chat ou te avaliarem, recebes uma notificação push a sério. 📡

## Passo 4 · Instalar nos telemóveis delas

1. Abre o link da app no Chrome (Android) ou Safari (iPhone).
2. Android: menu ⋮ → **Adicionar ao ecrã principal** (ou aparece o aviso "Instalar app").
3. iPhone: botão Partilhar → **Adicionar ao ecrã principal**.
4. Fica com ícone próprio e abre em ecrã inteiro, como uma app verdadeira.

## Bónus para o programador da casa 😄

Como já tens o Android Studio montado (Cor da Fibra!), também podes embrulhar
isto num APK com uma `WebView` a apontar para o URL — fica indistinguível de
uma app nativa e distribuis como já fazes. Mas a PWA dá-te 95% do efeito com
0% do Gradle.

Boa sorte, motorista 4.3 estrelas. ⭐
