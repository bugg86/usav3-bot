FROM --platform=$BUILDPLATFORM oven/bun:slim

WORKDIR /usr/src/app

COPY package.json bun.lock ./

COPY ./prisma ./prisma
COPY .env ./

RUN bun install
RUN bunx prisma generate

COPY ./src/api ./src/api

EXPOSE 3000

CMD ["bun", "run", "src/api/index.ts"]