# Projeto NODEJS - FIAP 🔴⚫
Projeto desenvolvido nos treinamentos finais da FIAP 👩🏻‍💻
<br><br>

## Descrição / Proposta / Passo a passo

- Inicie um novo projeto NPM
- Instale NestJS CLI em nível global
- Crie um módulo, um controller e um serviço para a rota /register
- Este módulo recebe name, email, password, site, phone do cliente
- Crie DTOs para validar corretamente os parâmetros de entrada
- Exiba as mensagens adequadas
- Todos os campos (exceto phone) são obrigatórios.
- Simulando um cadastro com sucesso, será exibida a frase: <i>"Cliente <b>< Nome ></b> cadastrado com sucesso!"</i>

## Demonstração da Solução ✅

Conforme indicado, em caso do preenchimento correto dos dados serão retornadas mensagens positivas acerca do cadastro:
<br><br>

![image](https://user-images.githubusercontent.com/93789218/198677616-acb0d535-709f-4978-b8ec-66712a2dce5c.png)

<br><br>
Caso o usuário não informe seu número de telefone, o campo no qual deveria estar este contato será preenchido com uma mensagem autoexplicativa:

![image](https://user-images.githubusercontent.com/93789218/198677297-06dd448c-7469-4279-a909-b7e7b2e07007.png)

<br>
Caso os campos estejam errados, cada um comunica seu formato adequado:
<br><br>

![image](https://user-images.githubusercontent.com/93789218/198681208-8627eba1-14b9-42f2-afc0-4f56474e93b6.png)

<br>
No exemplo a seguir, considere o nome do cliente de "Wesley". A mensagem retornada, caso os campos estejam preenchidos corretamente, será esta:
<br><br>

![image](https://user-images.githubusercontent.com/93789218/198682922-47b63910-ba06-499f-a207-dfa05b16070a.png)

<br>

## Acompanhe outros repositórios por aqui!
Acompanhe minha evolução em https://github.com/ViihNeris 💜👩🏻‍💻
