FROM oven/bun:slim

WORKDIR /usr/src/app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY ./src/api ./
COPY .env ./

EXPOSE 3000

CMD ["bun", "run", "src/index.ts"]