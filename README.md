# 🚀 API REST GLPI

Bem-vindo ao projeto **API REST GLPI**!  
Este repositório foi criado para facilitar testes e integrações com a API REST do GLPI, uma poderosa ferramenta de gestão de ativos e chamados de TI.

Desenvolvido em **Node.js**, **TypeScript** e **Express**, oferece uma interface simples e eficiente para explorar, validar e automatizar operações comuns do GLPI via sua API.

---

## 🎯 Objetivo

Servir como ambiente de experimentação e validação dos recursos disponibilizados pela API REST do GLPI.  
Permite realizar operações como abertura e consulta de chamados, gerenciamento de tarefas, entidades, sessões, buscas avançadas e backup do banco de dados, tudo de forma automatizada e centralizada.

---

## 💡 Motivação

Durante processos de integração de sistemas internos com o GLPI, é fundamental garantir que as requisições à API estejam corretas e que os dados trafeguem conforme esperado.

Este projeto surgiu da necessidade de testar endpoints, validar fluxos de autenticação, manipular tickets e tarefas, além de automatizar rotinas de backup do banco de dados em ambientes de desenvolvimento.

---

## ⚙️ Funcionalidades

- 📝 **Abertura e consulta de chamados:** Criação, fechamento e validação de tickets.
- 📋 **Gestão de tarefas:** Adição, listagem e manipulação de tarefas associadas aos chamados.
- 🔎 **Busca avançada:** Critérios personalizados para localizar tickets e tarefas.
- 🏢 **Gerenciamento de entidades:** Listagem e consulta de unidades do GLPI.
- 🔐 **Sessão e autenticação:** Automatização do login e obtenção de tokens de sessão.
- 💾 **Backup do banco de dados:** Geração de dumps do banco MySQL do GLPI diretamente pela API.

---

## 🛠️ Como utilizar

1. Clone o repositório e configure o arquivo `.env` conforme o exemplo disponível.
2. Instale as dependências com:

   ```bash
   npm install
   ```

3. Execute o projeto em modo desenvolvimento:

    ````bash
    npm run dev
    ````

4. Utilize ferramentas como Postman ou Insomnia para testar os endpoints expostos.

----

## ⚠️ Considerações

Este projeto é voltado para ambientes de desenvolvimento e **homologação**.
Recomenda-se não utilizá-lo diretamente em produção sem as devidas adaptações de segurança e validação.

----

## 🤝 Contribuição

Sinta-se à vontade para contribuir, sugerir melhorias ou adaptar o projeto conforme suas necessidades de integração com o GLPI!