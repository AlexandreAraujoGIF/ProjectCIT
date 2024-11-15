import { getItems } from './data.js';
import { createHeader } from './components/header.js';
import { createMain } from './components/main.js';
import { createFooter } from './components/footer.js';

function constructWebsite() {
    const container = document.querySelector('.container');
    if (!container) {
        console.error('Erro: Elemento .container não encontrado.');
        return;
    }

    function updateMain(category) {
        const items = getItems(category);
        const main = createMain(items);

        const oldMain = container.querySelector('main');
        if (oldMain) {
            container.replaceChild(main, oldMain);
        } else {
            container.appendChild(main);
        }
    }

    const header = createHeader(updateMain);
    container.appendChild(header);

    updateMain(null);

    const footer = createFooter();
    container.appendChild(footer);
}

constructWebsite();
