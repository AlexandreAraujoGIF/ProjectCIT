export function createHeader(onCategoryClick) {
    const header = document.createElement('header');
    header.classList.add('site-header');

    // Título do site
    const h1 = document.createElement('h1');
    h1.textContent = 'Bem-vindo à Central de Itens de Tourmaline';
    header.appendChild(h1);

    // Menu de Navegação
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const navItems = [
        { name: 'Home', href: '#' }, 
        { name: 'Poções', category: 'potions' },
        { name: 'Pergaminhos', category: 'spells' },
        { name: 'Ingredientes', category: 'ingredients' },
        { name: 'Todos', category: null },
        { name: 'Sobre', href: '#' }, 
    ];

    // Itera sobre os itens de navegação e cria os elementos
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.name;

        // Define o comportamento com base na propriedade do item
        if (item.href) {
            a.href = item.href; // Pra linkar
        } else {
            a.href = '#';
            a.addEventListener('click', (e) => {
                e.preventDefault();
                onCategoryClick(item.category);
            });
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);

    return header;
}
