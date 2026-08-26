# Igreja Ebenézer — Pedra de Ajuda

Site institucional da Igreja Evangélica Pentecostal Ebenézer, construído em Angular 18 com Server-Side Rendering (SSR) e prerender.

## Funcionalidades

- **Início** — hero de apresentação, agenda de cultos e banner de transmissão ao vivo (busca automaticamente no YouTube se o canal está transmitindo no momento).
- **Sobre** — história, visão e missão da igreja.
- **Eventos** — agenda de próximos eventos.
- **Pedido de Oração** — formulário para envio de pedidos (com opção de manter em sigilo).
- **Contribuir** — chave PIX para dízimos e ofertas, com botão de copiar.
- **Tema claro/escuro** — alternância manual no cabeçalho, com persistência da preferência e detecção automática do tema do sistema no primeiro acesso.

## Stack

- [Angular 18](https://angular.dev) (standalone components, sem NgModules)
- Angular Universal (SSR) + Express (`server.ts`) + prerender no build
- Signals do Angular para estado local (sem RxJS/Subjects para UI)
- SCSS por componente, com um design system de variáveis CSS (`src/styles.scss`)
- Karma + Jasmine para testes unitários

## Como rodar

```bash
npm install
npm start
```

Acesse `http://localhost:4200/`. O servidor recarrega automaticamente a cada alteração.

## Build de produção (SSR + prerender)

```bash
npm run build
npm run serve:ssr:ebenezer-church
```

O build gera os artefatos em `dist/ebenezer-church`; o segundo comando sobe o servidor Express (`server.ts`) que serve o app renderizado.

## Testes

```bash
npm test
```

Executa os testes unitários via Karma/Jasmine no Chrome.

## Estrutura

```
src/app/
├── core/          # modelos e serviços compartilhados (ex.: ThemeService, YoutubeService)
├── pages/         # uma pasta por rota (home, about, prayer, give, events)
└── shared/        # componentes reutilizados entre páginas (header, footer)
```

Todas as rotas são lazy-loaded e usam caminhos em português (`/sobre`, `/oracao`, `/eventos`, `/contribuir`), refletindo o idioma do site.

## Configuração pendente

Alguns pontos ainda usam valores de placeholder e precisam ser preenchidos antes de ir para produção:

- `src/environments/environment.ts` / `environment.development.ts` — `youtubeApiKey` e `youtubeChannelId` (usados pelo banner de transmissão ao vivo).
- `src/app/pages/give/give.component.ts` — chave PIX (`pixKey`) da página Contribuir.

O formulário de Pedido de Oração e a lista de Eventos hoje trabalham com dados em memória (sem persistência em backend).
