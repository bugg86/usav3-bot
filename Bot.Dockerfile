FROM oven/bun:slim AS base

ARG DATABASE_URL
ARG TOKEN
ARG CLIENT_ID
ARG GUILD_ID

# Set the environment variables in the resulting image
ENV DATABASE_URL=$DATABASE_URL
ENV TOKEN=$TOKEN
ENV CLIENT_ID=$CLIENT_ID
ENV GUILD_ID=$GUILD_ID

WORKDIR /usr/src/app

COPY package*.json bun.lock ./

RUN bun install --frozen-lockfile

COPY ./src/bot ./src/bot
COPY .env ./

CMD ["bun", "run", "src/bot/index.ts"]