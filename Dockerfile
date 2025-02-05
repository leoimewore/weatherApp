FROM node:18.17.0-alpine3.18

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV NODE_OPTIONS="--openssl-legacy-provider"
EXPOSE 3000

CMD ["npm" , "start"]
