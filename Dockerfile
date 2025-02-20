# Usa a última versão do Node.js oficial
FROM node:latest

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos necessários primeiro para otimizar cache
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o container
COPY . .

# Define variável para permitir acesso externo
ENV HOST=0.0.0.0
ENV PORT=3000

# Gera o build da aplicação
RUN npm run build

# Expõe a porta 3000
EXPOSE 3000

# Inicia a aplicação em modo de produção
CMD ["npm", "run", "start"]