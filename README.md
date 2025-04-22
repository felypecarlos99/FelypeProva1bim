
# Documentação do Projeto: Conversão de Site Estático para React

INTRODUÇÃO
- O objetivo deste projeto foi converter um site estático de uma loja de produtos desenvolvido com HTML e CSS puros para um projeto modularizado utilizando o framework React, com a ajuda do Vite. A principal melhoria ao utilizar React foi a separação em componentes reutilizáveis, o que facilitou a manutenção e a escalabilidade do código.



DOCUMENTAÇÃO DO TRABALHO:
Passo a passo da conversão.

- Passo 1: Primeiramente criei uma pasta nova para a realização do trabalho.
- Passo 2: Logo mais, abri o git hub e criei um novo repositório: "FelypeProva1bim" e abri o vs code
- Passo 3: Depois, dentro do código vs, abri a pasta recém-criada e utilizei o comando: "npm create vite@latest my-vue-app -- --template vue"
- Passo 4: Após isso, abri a pasta também recém criada "my-vue-app"
- Passo 5: Depois de abrir a nova pasta, coloquei o comando "npm install -D vite", para instalar o vite.
- Passo 6: Com o vite instalado, abri o git hub e copiei o segundo comando, cliquei enter e depois, dei um "git init" para iniciar o projeto.
- Passo 7: Logo depois disso, iniciei meu trabalho, fui em meu repositório antigo: https://github.com/felypecarlos99/felypeDesktopFirst, para alterá-lo, como diz o próprio trabalho: "Manter o site visualmente semelhante ou melhor do que a versão original". coloquei o html, alterando as classes, para "className" e depois o css.
- Passo 8: Alterei o "html" da página colocando as imagens dos meus produtos dentro dos cards, e o nome respectivo de cada um deles, coloquei a imagem do banner, o header, com a logo da loja e embaixo o nome, depois coloquei o footer, com contato, redes sociais e site.
- Passo 9: Para a estilização, utilizer o arquivo,App.css para aplicar os estilos principais da página, utilizando as classes CSS para controlar a aparência de cada componente, alterando, por exemplo, cor da página, tamanho dos Produtclist, etc.
- Passo 10: Para a estruturação dos componentes, criei primeiramente uma pasta, dento do src, chamada components, depois dentro dela, criei 4 arquivos, os componentes: Header.jsx, Banner.jsx, Card.jsx e Footer.jsx. 
- Passo 11: Agora para o desenvolvimento dos componentes, dentro de cada um deles, foi colocado
  Header.jsx: Contém o cabeçalho da página, com logo e título. Banner.jsx: Exibe o banner principal com a imagem e o título. ProductList.jsx: Lista os produtos disponíveis, usando o componente Card para cada produto. Card.jsx: Exibe a imagem e o título de cada produto. Footer.jsx: Exibe o rodapé da página. Também alguns componentes foram estruturados para aceitar props, permitindo a personalização do conteúdo dinâmico. Por exemplo, no componente Card, passei os dados da imagem e do título do produto via props.
- Passo 12: Logo depois disso tudo, fui para a última parte, deixar responsivo, coloquei o @media e fiz as alterações necessárias para que o site ficasse responsivo.
- Passo 13: Logo mais, fui para os testes finais, fiz testes para garantir que todos os componentes estavam sendo exibidos corretamente e que as props estavam sendo passadas corretamente entre os componentes, fiz ajustes finais no CSS para melhorar a responsividade e garantir que o design ficasse semelhante ou melhor que o original, depois de finalizar os testes e ajustes, fiz commits regulares para versionar as alterações no GitHub.

Como Rodar o Projeto
1. Clone o repositório:
Para clonar o repositório, use o comando:
git clone <link-do-repositorio>

2. Navegue até o diretório do projeto:
Acesse a pasta do projeto com o comando:
cd nome-do-projeto

3. Instale as dependências:
Instale todas as dependências necessárias com o comando:
npm install

4. Execute o projeto:
Para rodar o projeto, execute o comando:
npm run dev

Reflexão Final
Durante o desenvolvimento do projeto, encontrei alguns desafios, como a adaptação do layout original para a estrutura modularizada do React e a implementação de responsividade. No entanto, esses desafios foram importantes para melhorar minhas habilidades com React e CSS.

Ao utilizar React, aprendi a importância de dividir a interface em componentes reutilizáveis, o que tornou o código mais organizado e fácil de manter. Além disso, a responsividade foi um aspecto essencial, pois garantiu que o site fosse acessível e funcional em diferentes dispositivos.