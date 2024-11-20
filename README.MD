# Central de Itens de Tourmaline

## Descrição

Este é um projeto de uma Central de Itens para um cenário próprio de RPG que se passa no mundo ficticio de Tourmaline. Focado em ser um lugar prático para visualização e consulta de itens vendidos nas lojas. O projeto utiliza JavaScript para criar um site dinâmico e responsivo, permitindo que os usuários explorem diferentes categorias de itens como poções, pergaminhos e ingredientes. A estrutura do site é modularizada, com código dividido em diferentes componentes e arquivos, e está projetado para ser fácil de expandir no futuro.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript (ES6+)

## Futuras Atualizações

- Barra de Pesquiva, Favoritos, Filtros
- Itens mais vendidos
- Carrinho de Compras somando o preço dos produtos
- Página inicial com mercantes, onde é possivel clicar na foto deles pra ver quais itens estão disponiveis no estoque de cada um.
- Botão para Sugerir Troca a um mercante
- Incluir banco de dados PHP / MySQL

## Estrutura de Arquivos

```plaintext
/project-root
    /css
        - style.css        # Estilos do projeto
    /img
        # (futuro diretório para as imagens dos itens)
    /js
        /components
            - header.js    # Componente de cabeçalho
            - main.js      # Componente de conteúdo principal
            - footer.js    # Componente de rodapé
        - app.js           # Arquivo principal, que monta o site
        - data.js          # Contém dados dos itens e funções de categoria
    - index.html           # Página inicial
    - manifest.json        # Manifest
