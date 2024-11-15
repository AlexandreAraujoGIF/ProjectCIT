export const navLinks = [
    { label: 'Poções', href: './potions.html' },
    { label: 'Feitiços', href: './spells.html' },
    { label: 'Ingredientes', href: './ingredients.html' },
];

/*
export const items = [
    { name: 'Poção da Invisibilidade', description: 'Fique invisível por 10 minutos.', price: '150 Galleons' },
    { name: 'Feitiço de Levitação', description: 'Levite objetos leves.', price: '200 Galleons' },
];
*/

export const itemsByCategory = {
    potions: [
        {
            name: 'Poção da Invisibilidade',
            description: 'Uma poção que torna invisível por 10 minutos.',
            price: '150 Pontos',
            image: '', // Imagem placeholder
            category: 'potions'
        },
        {
            name: 'Poção de Cura Simples',
            description: 'Recupera 2d4+2.',
            price: '50 Pontos',
        },
    ],
    spells: [
        {
            name: 'Feitiço de Levitação',
            description: 'Levite objetos leves.',
            price: '200 Pontos',
        },
        {
            name: 'Feitiço de Proteção',
            description: 'Cria um escudo protetor por 5 minutos.',
            price: '300 Pontos',
        },
    ],
    ingredients: [
        {
            name: 'Mandrágora',
            description: 'Essencial para poções de cura.',
            price: '50 Pontos',
        },
        {
            name: 'Asa de Morcego',
            description: 'Ingrediente raro para poções de invisibilidade.',
            price: '120 Pontos',
        },
    ],
    // Adicione mais categorias aqui no futuro...
};

/**
 * Obtém itens de uma categoria específica ou todos os itens se nenhuma categoria for especificada.
 * @param {string} [category] - Nome da categoria ('potions', 'spells', 'ingredients', etc.).
 * @returns {Array} Lista de itens.
 */
 export function getItems(category) {
    if (category) {
        return itemsByCategory[category] || [];
    }

    // Retorna todos os itens de todas as categorias
    return Object.values(itemsByCategory).flat();
}
