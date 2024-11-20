// Função para criar o conteúdo principal da página, recebendo os itens como parâmetro
export function createMain(items) {
    const main = document.querySelector('main') || document.createElement('main');
    main.classList.add('site-main');
    main.innerHTML = ''; // Limpa o conteúdo do main para renderização de novos itens

    // Loop para iterar sobre cada item e criar a estrutura de cada um
    items.forEach(item => {
        const section = document.createElement('section');
        section.classList.add('item-card');
        section.classList.add('card');
        section.dataset.id = item.name;

        // Criando a imagem do item
        const img = document.createElement('img');
        img.src = item.image || 'https://via.placeholder.com/150';
        img.alt = item.name;
        img.classList.add('item-image');

        // Criando o contêiner para o nome e preço do item
        const namePrice = document.createElement('div');
        namePrice.classList.add('name-price');

        // Criando o título do item (nome)
        const h2 = document.createElement('h2');
        h2.textContent = item.name;
        namePrice.appendChild(h2);

        // Adicionando a raridade do item se ele tiver
        if (item.rarity) {
            const pRarity = document.createElement('p');
            pRarity.classList.add('item-rarity');
            pRarity.textContent = `Raridade: ${item.rarity}`;
            namePrice.appendChild(pRarity);
        }

        // Criando o parágrafo para o preço do item
        const p = document.createElement('p');
        p.classList.add('item-price');  // Certificando que a classe item-price está presente
        p.textContent = `Preço: ${item.price}`;
        namePrice.appendChild(p);

        // Criando o contêiner para a descrição do item
        const description = document.createElement('div');
        description.classList.add('item-description');
        description.textContent = item.description;
        description.style.display = 'none'; // Mantém a descrição oculta

        // Adicionando os elementos à seção do item
        section.appendChild(img);
        section.appendChild(namePrice);
        section.appendChild(description);

        main.appendChild(section);
    });

    // Adiciona eventos de clique para abrir o modal nos cards
    addModalEvents();

    return main;
}

// Função para adicionar eventos de clique no modal para cada item-card
function addModalEvents() {
    const modalOverlay = document.querySelector(".modal-overlay") || document.createElement("div");
    modalOverlay.classList.add("modal-overlay");

    // Adiciona o modal à página se ainda não estiver presente
    if (!document.body.contains(modalOverlay)) {
        document.body.appendChild(modalOverlay);
    }

    // Seleciona todos os cards e adiciona evento de clique para abrir o modal
    const cards = document.querySelectorAll(".item-card");
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const title = this.querySelector(".name-price h2").textContent;
            const rarity = this.querySelector(".item-rarity") ? this.querySelector(".item-rarity").textContent : "";
            const price = this.querySelector(".item-price") ? this.querySelector(".item-price").textContent : "";  // Corrigido para garantir que o preço está sendo selecionado corretamente
            const description = this.querySelector(".item-description").textContent;
            const imageSrc = this.querySelector("img").src;

            // Configura o conteúdo do modal
            modalOverlay.innerHTML = `
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <img src="${imageSrc}" alt="${title}">
                    <div class="modal-details">
                        <h2>${title}</h2>
                        ${rarity ? `<p class="item-rarity">${rarity}</p>` : ""}
                        ${price ? `<p class="item-price">${price}</p>` : ""}
                        <p>${description}</p>
                    </div>
                </div>
            `;
            modalOverlay.style.display = "flex"; // Exibe o modal

            // Fecha o modal ao clicar no "x"
            modalOverlay.querySelector(".modal-close").addEventListener("click", function () {
                modalOverlay.style.display = "none";
            });
        });
    });

    // Fecha o modal ao clicar fora do conteúdo
    modalOverlay.addEventListener("click", function (e) {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = "none";
        }
    });
}

// Função para configurar os filtros das categorias
function setupCategoryFilter(categories, items) {
    const main = document.querySelector('.site-main');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const filteredItems = items.filter(item => item.type === category.dataset.type);
            updateMainContent(main, filteredItems);
        });
    });
}

// Atualiza o conteúdo principal com os itens filtrados
function updateMainContent(main, filteredItems) {
    main.innerHTML = ''; // Limpa os itens existentes
    filteredItems.forEach(item => {
        const section = document.createElement('section');
        section.classList.add('item-card');
        section.dataset.id = item.name;

        const img = document.createElement('img');
        img.src = item.image || 'https://via.placeholder.com/150';
        img.alt = item.name;
        img.classList.add('item-image');

        const namePrice = document.createElement('div');
        namePrice.classList.add('name-price');

        const h2 = document.createElement('h2');
        h2.textContent = item.name;
        namePrice.appendChild(h2);

        if (item.rarity) {
            const pRarity = document.createElement('p');
            pRarity.classList.add('item-rarity');
            pRarity.textContent = `Raridade: ${item.rarity}`;
            namePrice.appendChild(pRarity);
        }

        const p = document.createElement('p');
        p.textContent = `Preço: ${item.price}`;
        namePrice.appendChild(p);

        section.appendChild(img);
        section.appendChild(namePrice);

        main.appendChild(section);
    });

    main.style.display = 'grid'; // Exibe a área principal com os itens
}

document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category-button'); // Botões de categoria
    const mainContainer = document.querySelector('.site-main');

    // Inicializa o main vazio ou com conteúdo inicial
    const main = createMain([]); // Sem itens no início
    mainContainer.appendChild(main);

    setupCategoryFilter(categories, items);

    // Adiciona um evento para ocultar os itens ao clicar fora das categorias
    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('.category-button')) {
            main.style.display = 'none'; // Esconde os itens
        }
    });
});
