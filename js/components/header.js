export function createHeader(onCategoryClick) {
    const header = document.createElement('header');
    header.classList.add('site-header');

    const h1 = document.createElement('h1');
    h1.textContent = 'Bem-vindo à Central de Itens de Tourmaline';
    header.appendChild(h1);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const navItems = [
        { name: 'Poções', category: 'potions' },
        { name: 'Pergaminhos', category: 'spells' },
        { name: 'Ingredientes', category: 'ingredients' },
        { name: 'Todos', category: null },
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = item.name;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            onCategoryClick(item.category);
        });
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);

    return header;
}
