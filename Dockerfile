FROM node:slim

ENV PORT=8080
ENV DB_USER=postgres
ENV DB_HOST=localhost
ENV DB_PORT=5433
ENV DB_PASSWORD=Chunam151101@
ENV DB_NAME=docker_db

WORKDIR /app

COPY . .

RUN npm install

CMD [ "node", "app.js" ]

EXPOSE 8080
