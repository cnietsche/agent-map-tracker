# Agent Map Tracker — Frontend

Aplicação React com mapa interativo (React Leaflet) para selecionar coordenadas no mapa.

## Pré-requisitos

- Node.js 18+ (recomendado 20+)

## Como executar

```bash
npm install
npm run dev
```

Abra a URL exibida no terminal (geralmente `http://localhost:5173`).

## Comportamento

- **Barra superior:** campos **X** (longitude) e **Y** (latitude), empilhados verticalmente; o mapa ocupa o restante da tela.
- **Mapa:** clique em qualquer ponto para posicionar um pin e preencher X e Y automaticamente.
- Um novo clique atualiza o pin e os valores.

## Docker

Na raiz do repositório:

```bash
docker compose up --build
```

A aplicação fica disponível em `http://localhost:8080`.

## Scripts

| Comando        | Descrição              |
|----------------|------------------------|
| `npm run dev`  | Servidor de desenvolvimento |
| `npm run build`| Build de produção      |
| `npm run preview` | Preview do build    |

## Stack

- React + TypeScript + Vite
- [Leaflet](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/)
- Tiles: [OpenStreetMap](https://www.openstreetmap.org/)
