# 📌 Projeto de API para Processamento de Imagens  

## 📷 Sobre o Conteúdo  

Todas as imagens usadas neste projeto foram **geradas por inteligência artificial (IA)**. Qualquer semelhança com pessoas, locais ou objetos reais é **mera coincidência**.  

Os **prompts** utilizados para criar as imagens também foram **gerados por IA**, garantindo um processo imparcial e livre de **viés de gênero, religião, etnia** ou qualquer outro fator que pudesse influenciar a geração das imagens.  

Este projeto não tem intenção de representar ou associar qualquer grupo específico, sendo seu propósito apenas **educacional e técnico**.  

---

## 🛠️ Configuração e Execução  

### 📌 Como rodar o projeto localmente  

### Nas próximas versões o projeto será "dockerizado"

#### 1️⃣ **Pré-requisitos**  

Certifique-se de ter instalado:  

- [Node.js (v16+)](https://nodejs.org/)  
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)  

#### 2️⃣ **Clonar o repositório**  

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

#### 3️⃣ **Instalar dependências**  

```bash
npm install
```

ou, se estiver usando Yarn:  

```bash
yarn install
```

#### 4️⃣ **Iniciar o servidor**  

Para rodar o servidor em **modo de desenvolvimento (com hot reload)**:  

```bash
npm run dev
```

Para rodar o servidor em **produção**:  

```bash
npm start
```

A API ficará disponível em:  

```
http://localhost:3000
```

---

## 🔀 Estrutura das Rotas  

A API permite processar imagens enviando parâmetros na URL.  

### **1️⃣ Rota de Crop de Imagem**  

```http
GET /crop/:category/:width/:height
```

Essa rota recorta uma imagem com base nos parâmetros fornecidos.  

#### 📝 **Parâmetros:**  

- `category` (**obrigatório**) → Um número que representa a pasta onde a imagem está armazenada.  
  - `1 → men`  
  - `2 → woman`  
  - `3 → other`  
- `width` (**obrigatório**) → Largura desejada para a imagem recortada.  
- `height` (**obrigatório**) → Altura desejada para a imagem recortada.  

#### 🔗 **Exemplo de requisição:**  

```
GET http://localhost:3000/crop/1/200/300
```

**Explicação:**  

- A API buscará a imagem dentro da pasta **`public/men/`**.  
- A imagem será recortada para **200px de largura** e **300px de altura**.  
- A resposta será a **imagem processada**.  

#### 📥 **Resposta esperada (imagem recortada)**  

A imagem será enviada diretamente na resposta com o header:  

```http
Content-Type: image/jpeg
```

#### 🚨 **Possíveis erros:**  

- `404 Not Found` → A imagem não foi encontrada na pasta correspondente.  
- `400 Bad Request` → Parâmetros inválidos (exemplo: largura ou altura não numéricas).  
- `500 Internal Server Error` → Algum problema ocorreu no processamento da imagem.  

---
