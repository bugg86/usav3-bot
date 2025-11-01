FROM oven/bun:slim AS base

WORKDIR /usr/src/app

COPY package*.json bun.lock ./

RUN bun install --frozen-lockfile

COPY ./src/bot ./src/bot
COPY .env ./

CMD ["bun", "run", "src/bot/index.ts"]