# 📌 Projeto de API para Processamento de Imagens  

## 📷 Sobre o Conteúdo  

Todas as imagens usadas neste projeto foram **geradas por inteligência artificial (IA)**. Qualquer semelhança com pessoas, locais ou objetos reais é **mera coincidência**.  

Os **prompts** utilizados para criar as imagens também foram **gerados por IA**, garantindo um processo imparcial e livre de **viés de gênero, religião, etnia** ou qualquer outro fator que pudesse influenciar a geração das imagens.  

Este projeto não tem intenção de representar ou associar qualquer grupo específico, sendo seu propósito apenas **educacional e técnico**.  

---

## 🛠️ Configuração e Execução  

### 📌 Como rodar o projeto localmente  

### Nas próximas versões o projeto será "dockerizado"

#### 1️⃣ **Clonar o repositório**  

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

#### 3️⃣ **Instalar dependências**  

```docker build -t minha-api .```
```docker run -d -p 3000:3000 minha-api```

A API ficará disponível em:  

```
http://localhost:3000
```

---

## 🔀 Estrutura das Rotas  

A API permite processar imagens enviando parâmetros na URL.  

### **1️⃣ Rota de Crop de Imagem**  

```http
GET /:category/:width/:height
example: /1/600/800
```
> Parameters:

category:
1 = woman
2 = men
3 = undefined

width and height = min: 200px, max: 2000px

> return
A random image from the selected gender

```http
GET /random/:width/:height
example: /random/600/800
```
> Parameters:

width and height = min: 200px, max: 2000px

> return
A random image from random gender

#### 🚨 **Possíveis erros:**  

- `404 Not Found` → A imagem não foi encontrada na pasta correspondente.  
- `400 Bad Request` → Parâmetros inválidos (exemplo: largura ou altura não numéricas).  
- `500 Internal Server Error` → Algum problema ocorreu no processamento da imagem.  

---
