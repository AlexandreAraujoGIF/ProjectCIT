import { navLinks } from '/components/data.js';

export function createNav(onCategoryClick) {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    navLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.label;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            onCategoryClick(link.href);
        });
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    return nav;
}
