# Etapa de Build
FROM node:18-alpine AS build
WORKDIR /app

# Copia os arquivos de configuração para o contêiner
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Executa o build com o Vite
RUN npm run build

# Etapa de Produção
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Instala os certificados de CA
RUN apk add --no-cache ca-certificates
RUN update-ca-certificates

# Copia os arquivos do build para o Nginx
COPY --from=build /app/build ./

# Expondo a porta padrão do Nginx
EXPOSE 80

# Inicia o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
