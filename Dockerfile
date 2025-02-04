# Usa a última versão do Node.js oficial
FROM node:latest

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos do package.json e package-lock.json primeiro (para aproveitar o cache do Docker)
COPY package*.json ./

# Instala as dependências antes de copiar o restante do código
RUN npm install

# Copia todo o código fonte para o container
COPY . .

# Define a variável de ambiente para permitir acesso externo
ENV HOST 0.0.0.0

# Constrói o projeto Next.js
RUN npm run build

# Expõe a porta 3000
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["npm", "run", "dev"]