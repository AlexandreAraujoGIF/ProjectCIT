export function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('site-footer');

    const p = document.createElement('p');
    p.textContent = 'The New World Tourmaline © Todos os direitos reservados';
    footer.appendChild(p);

    return footer;
}
