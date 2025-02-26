# Usa a versão 22 do Node.js (alpine é mais leve)
FROM node:22-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /

# Copia apenas os arquivos essenciais para instalar as dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install --production

# Copia todo o código do projeto para dentro do container
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
