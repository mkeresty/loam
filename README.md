# Loam UI

Loam is an experimental React component registry with a tactile, editorial, natural point of view. Components are copied into consumer projects through the standard shadcn CLI, so teams own and adapt every line.

## Development

```bash
npm install
npm run dev
```

Build the website and registry:

```bash
npm run registry:build
npm run build
```

Registry source lives in `registry.json` and `registry/loam/ui`. The shadcn build writes installable endpoints to `public/r`.

After deploying, install individual items with:

```bash
npx shadcn@latest add https://YOUR-DOMAIN/r/button.json
npx shadcn@latest add https://YOUR-DOMAIN/r/card.json
npx shadcn@latest add https://YOUR-DOMAIN/r/dialog.json
```

The components expect Tailwind CSS and a shadcn-compatible project. Each item resolves the shared `loam-theme` token item automatically.

Cards are intentionally still by default. Opt into the tactile hover treatment only for interactive cards:

```tsx
<Card interactive>...</Card>
```
