# Agent Map Tracker — Frontend

Aplicação React com mapa interativo (React Leaflet) para selecionar coordenadas de início e fim.

## Pré-requisitos

- Node.js 18+ (recomendado 20+)

## Como executar

```bash
npm install
npm run dev
```

Abra a URL exibida no terminal (geralmente `http://localhost:5173`).

## Comportamento

- **Barra superior:** `Início: X {lng} / Y {lat}` e `Fim: X {lng} / Y {lat}`.
- **Mapa:** cliques alternam entre início e fim (1º → início, 2º → fim, 3º → início…).
- Pins azul (início) e vermelho (fim).

## Docker

Na raiz do repositório:

```bash
docker compose up --build
```

A aplicação fica disponível em `http://localhost:8080`.

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build |

## Stack

- React + TypeScript + Vite
- [Leaflet](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/)
- Tiles: [OpenStreetMap](https://www.openstreetmap.org/)
