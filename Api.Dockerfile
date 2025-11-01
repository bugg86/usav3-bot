FROM --platform=$BUILDPLATFORM oven/bun:slim

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

COPY package.json bun.lock ./

COPY ./prisma ./prisma
COPY .env ./

RUN bun install
RUN bunx prisma generate

COPY ./src/api ./src/api

EXPOSE 3000

CMD ["bun", "run", "src/api/index.ts"]