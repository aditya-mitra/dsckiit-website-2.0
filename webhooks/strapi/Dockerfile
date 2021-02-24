FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV NODE_ENV=production

RUN npm run build

RUN npm prune --production

EXPOSE 9000

CMD ["npm","start"]