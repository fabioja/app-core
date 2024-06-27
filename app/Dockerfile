# Stage 1: Build the Node.js application with TypeScript
FROM node:16 AS build

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Run the Node.js application
FROM node:16

WORKDIR /app

COPY --from=build /app /app
COPY package*.json ./
RUN npm install

EXPOSE 3000

# Defina o script de entrada
ENTRYPOINT ["./entrypoint.sh"]

# Comando para iniciar a aplicação
CMD ["npm", "start"]