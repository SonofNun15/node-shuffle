FROM node:12.18.0

ENV PORT 3001

EXPOSE 3001

COPY package.json package.json
RUN npm install --production

COPY ./dist ./app

CMD ["node", "app/"]
