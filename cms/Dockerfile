FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

# npm run postinstall is not automatically working
ENV PROD_DECR=dscwebdev

# setting NODE_ENV as PRODUCTION here because we don't want to skip the dev dependencies for build
ENV NODE_ENV=production

RUN npm run postinstall

RUN npm run build

RUN npm prune --production

EXPOSE 9000

CMD ["npm","start"]