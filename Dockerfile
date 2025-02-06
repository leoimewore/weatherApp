FROM node:18.17.0-alpine3.18

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV NODE_OPTIONS="--openssl-legacy-provider"
EXPOSE 3000

RUN npm run build
RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]
