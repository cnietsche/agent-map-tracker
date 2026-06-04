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

- **Barra superior:** dois pontos (**Ponto 1** e **Ponto 2**), cada um com **X** (longitude) e **Y** (latitude).
- **Mapa:** o 1º clique preenche o Ponto 1, o 2º o Ponto 2, o 3º atualiza o Ponto 1 novamente, e assim alterna.
- Dois pins no mapa (azul = Ponto 1, vermelho = Ponto 2). O grupo destacado indica qual receberá o próximo clique.

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
