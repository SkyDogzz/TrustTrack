FROM node:22.1-alpine as base

WORKDIR /app

COPY package.json ./

RUN yarn install --frozen-lockfile

COPY . .

FROM base as dev

ENV NODE_ENV=development

EXPOSE 3000

CMD ["yarn", "dev"]
