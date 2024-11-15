export function createMain(items) {
    const main = document.createElement('main');
    main.classList.add('site-main');

    items.forEach(item => {
        const section = document.createElement('section');
        section.classList.add('item-card');
        section.classList.add('card'); // Nova classe de card
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

        const p = document.createElement('p');
        p.textContent = `Preço: ${item.price}`;
        namePrice.appendChild(p);

        const description = document.createElement('div');
        description.classList.add('item-description');
        description.textContent = item.description;
        description.style.display = 'none';

        section.appendChild(img);
        section.appendChild(namePrice);
        section.appendChild(description);

        main.appendChild(section);

        section.addEventListener('mouseenter', () => {
            toggleDescription(section, description);
            section.classList.add('expanded');
        });

        section.addEventListener('mouseleave', () => {
            toggleDescription(section, description);
            section.classList.remove('expanded');
        });
    });

    return main;
}

function toggleDescription(card, description) {
    if (description.style.display === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}
