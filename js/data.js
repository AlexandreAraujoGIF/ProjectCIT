// Função para formatar as descrições substituindo \n por <br>
function formatDescription(description) {
    return description.replace(/\n/g, '<br>');
}

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
    // Inicio de poções comuns abaixo
    potions: [
        {
            name: 'Poção de Cura Simples',
            description: 'Recupera 2d4+2 HP.',
            price: '30L ou 300C',
            image: '', // Imagem placeholder
            rarity:'Comum',
        },
        {
            name: 'Poção de Cura Maior',
            description: 'Recupera 4d4+4 HP. O líquido vermelho da poção brilha quando agitado.',
            price: '60L ou 600C',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        {
            name: 'Poção de Superior',
            description: 'Você recupera 8d4 + 8 pontos de vida quando beber esta poção. O líquido vermelho da poção brilha quando agitado.',
            price: '200L ou 2000C',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        {
            name: 'Essência Líquida (10% Pureza)',
            description: 'O líquido azul desta poção reflete a luz, dando-lhe um leve brilho. Um conjurador que beber esta poção recupera 1d4 MP. Pontos de magia só podem ser recuperados desta forma uma vez por descanso longo.',
            price: '75L ou 750C',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        {
            name: 'Poção da Invisibilidade',
            description: 'Uma poção que torna invisível por 10 minutos.',
            price: '50L ou 500C',
            image: '', // Imagem placeholder
            rarity:'Comum',
        },
        {
            name: 'Antitoxina',
            description: 'Uma criatura que beber este frasco de líquido verde brilhante e flamejante ganha vantagem em testes de resistência contra veneno por 1 hora. Não confere nenhum benefício a mortos-vivos ou construtos.',
            price: '25L ou 250C',
            image: '', // Imagem placeholder
            rarity:'Comum',
        },
        {
            name: 'Poção da Refeição',
            description: 'Quando você bebe esta poção, você ganha os benefícios do feitiço Goodberry. O líquido roxo desta poção borbulha suavemente e cheira um pouco a uvas.',
            price: '5L ou 50C',
            image: '', // Imagem placeholder
            rarity:'Comum',
        },
        {
            name: 'Poção do Conforto Instantâneo',
            description: formatDescription('A poção de conforto instantâneo é uma poção de relaxamento de ação rápida que limpa a mente. A poção é um líquido branco e turvo que tem gosto de doce, espumoso, cremoso.\n\n Depois de beber esta poção, você tem vantagem em testes de Constituição feitos para manter a concentração em uma magia. Algumas pessoas ficam viciadas nisso.'),
            price: '5L ou 50C',
            image: '', // Imagem placeholder
            rarity:'Comum',
            
        },
        {
            name: 'Poção de Escalada',
            description: 'Quando você bebe esta poção, você ganha um deslocamento de escalada igual ao seu deslocamento de caminhada por 1 hora. Durante este tempo, você tem vantagem em testes de Força (Atletismo) que fizer para escalar. A poção é separada em camadas marrons, prateadas e cinzentas que se assemelham a faixas de pedra. Agitar a garrafa não mistura as cores.',
            price: '5L ou 50C',
            image: '', // Imagem placeholder
            rarity:'Comum',
        },
        {
            name: 'Poção da Visão Noturna',
            description: 'Quando você bebe esta poção, você ganha visão no escuro com alcance de 18 metros até o próximo amanhecer. Se você já tem visão no escuro, seu alcance de visão natural é dobrado. O líquido azul celeste nesta garrafa brilha no escuro.',
            price: '5L ou 50C',
            image: '', // Imagem placeholder
            rarity:'Comum',
        },
        {
            name: 'Poção de Equilibrio',
            description: 'Quando você bebe esta poção, você ganha o efeito da magia passo longo por quatro horas (sem necessidade de concentração) e você não sofre penalidade de movimento em terreno difícil. O fluido verde profundo da poção tem gosto de avelãs.',
            price: '5L ou 50C',
            image: '', // Imagem placeholder
            rarity:'Comum',
        },
        {
            name: 'Poção de Resistência Climática',
            description: formatDescription ('Esta poção parece conter uma tempestade em miniatura crepitando com minúsculos veios de eletricidade. Por 8 horas depois de beber esta poção, você ganha Resistência aos seguintes efeitos climáticos naturais: frio, fogo, relâmpago e trovão.\n\n Enquanto esta poção estiver ativa, chuva, granizo, neve e calor naturais não atingem você, sua visão não é afetada por neblina, chuva ou neve e fogo não mágico tem menos efeito sobre você. Além disso, efeitos climáticos naturais que criam terreno difícil (como neve) não impedem seu movimento.'),
            price: '5L ou 50C',
            image: '', // Imagem placeholder
            rarity:'Comum',
        },
        {
            name: 'Poção de Proteção Básica',
            description: formatDescription ('A essência do ambiente começa a envolver seu corpo. Até o final do seu próximo turno, você tem resistência contra danos de armas mundanas.'),
            price: '5L ou 50C',
            image: '', // Imagem placeholder
            rarity:'Comum',
        }, 
        // Fim das poções comuns

        // Inicio de poções incomuns
        {
            name: 'Filtro do Amor',
            description: formatDescription ('A próxima vez que você vir uma criatura dentro de 10 minutos após beber este filtro, você ficará encantado por aquela criatura por 1 hora. Se a criatura é de uma espécie e gênero pelo qual você normalmente se sente atraído, você a considera seu verdadeiro amor enquanto está encantado. O líquido efervescente em tons de rosa desta poção contém uma bolha fácil de perder em forma de coração.'),
            price: '75L ou 750C',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        {
            name: 'Óleo Escorregadio',
            description: formatDescription ('Este unguento preto pegajoso é espesso e pesado no recipiente, mas flui rapidamente quando derramado. O óleo pode cobrir uma criatura Média ou menor, junto com o equipamento que está vestindo e carregando (é necessário um frasco adicional para cada categoria de tamanho acima do Médio). A aplicação do óleo leva 10 minutos. A criatura afetada então ganha o efeito de uma magia de liberdade de movimento por 8 horas.\n\n Alternativamente, o óleo pode ser derramado no chão como uma ação, onde cobre um quadrado de 3 metros, duplicando o efeito do feitiço de graxa naquela área por 8 horas.'),
            price: '70L ou 700C',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        {
            name: 'Poção de Amizade Animal',
            description: formatDescription ('Quando você bebe esta poção, você fica sob o efeito do feitiço de amizade animal (CD de resistência 13) por 1 hora à vontade.\n\n Quando agitado, esse líquido lamacento mostra pequenos pedaços de animais: uma escama de peixe, uma língua de beija-flor, uma garra de gato ou um pêlo de esquilo.'),
            price: '70L ou 700C',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        {
            name: 'Poção de Sopro de Fogo',
            description: formatDescription ('Depois de beber esta poção, você pode usar uma ação bônus para exalar fogo em um alvo a até 9 metros de você. O alvo deve fazer um teste de resistência de Destreza CD 13, sofrendo 4d6 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso. O efeito termina após você exalar o fogo três vezes ou quando 1 hora se passar. O líquido laranja desta poção pisca, e a fumaça enche o topo do recipiente e sai sempre que é aberto.'),
            price: '75L ou 750C',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        {
            name: 'Poção de Crescimento',
            description: formatDescription ('Quando você bebe esta poção, você ganha o efeito "ampliar" da magia aumentar/reduzir por 1d4 horas (sem necessidade de concentração). O vermelho no líquido da poção se expande continuamente de uma pequena gota para colorir o líquido claro ao seu redor e depois se contrai. Agitar a garrafa não interrompe este processo.'),
            price: '60L ou 600C',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        {
            name: 'Poção de Veneno',
            description: formatDescription ('Esta mistura parece, cheira e tem gosto de uma poção de cura ou outra poção benéfica. No entanto, na verdade é um veneno mascarado por magia de ilusão. Uma magia de identificação revela sua verdadeira natureza.\n\n Se você beber, você sofre 3d6 de dano de veneno e deve ser bem sucedido em um teste de resistência de Constituição CD 13 ou será envenenado. No início de cada um de seus turnos enquanto estiver envenenado dessa forma, você sofre 3d6 de dano de veneno. No final de cada um de seus turnos, você pode repetir o teste de resistência. Em um teste bem sucedido, o dano de veneno que você recebe em seus turnos subsequentes diminui em 1d6. O veneno termina quando o dano diminui para 0.'),
            price: '80L ou 800C',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        {
            name: 'Poção de Resistência',
            description: formatDescription ('Ao beber esta poção, você ganha resistência a um tipo de dano por 1 hora. O Mestre escolhe o tipo que o determina aleatoriamente entre as opções abaixo. O líquido translúcido nesta poção brilha com a mesma energia mágica à qual oferece resistência.\n\n  Role 1d10 e analise os resultados abaixo.\n| 1 - Ácido | 2 - Gelo | 3 - Fogo | 4 - Essência | 5 - Elétrico | 6 - Trevas | 7 - Veneno | 8 - Psíquico | 9 - Sagrado | 10 - Essência |'),
            price: '90L ou 900C',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        {
            name: 'Poção de Respiração Aquática',
            description: formatDescription ('Você pode respirar debaixo de água por 1 hora depois de beber esta poção. Seu líquido verde turvo cheira a mar e tem uma bolha semelhante a uma água-viva flutuando nele.'),
            price: '60L ou 600C',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        // Fim das poções incomuns

        // Inicio das poções raras
        {
            name: 'Elixir da Saúde',
            description: formatDescription ('Quando você bebe esta poção, ela cura qualquer doença que o aflige e remove as condições de cegueira, surdez, paralisia e envenenamento. O líquido vermelho claro tem pequenas bolhas de luz nele.'),
            price: '200L ou 2.000C',
            image: '', // Imagem placeholder
            rarity:'Rara',
        },
        {
            name: 'Óleo Etéreo',
            description: formatDescription ('Grânulos deste óleo cinza turvo se formam na parte externa de seu recipiente e evaporam rapidamente. O óleo pode cobrir uma criatura Média ou menor, juntamente com o Equipamento que está vestindo e carregando (é necessário um frasco adicional para cada categoria de tamanho acima do Médio). A aplicação do óleo leva 10 minutos. A criatura afetada então ganha o efeito da magia etéreo por 1 hora.'),
            price: '100L ou 1.000C',
            image: '', // Imagem placeholder
            rarity:'Rara',
        },
        {
            name: 'Elixir Inigualável',
            description: formatDescription ('Quando você bebe esta poção, uma de suas pontuações de atributo muda para 20 por 1 hora. O tipo de poção determina a pontuação (veja abaixo). A poção não tem efeito sobre você se a pontuação do atributo aplicável for igual ou maior que essa pontuação. O líquido transparente desta poção tem flutuando nele uma lasca de cabelo, garra, dente ou escama da criatura apropriada.\n\n | Anjo = Força | Fadas = Destreza | Mamute = Vigor | Demoníaco = Carisma | Serpente = Sabedoria | Dragão = Inteligência |'),
            price: '180L ou 1.800C',
            image: '', // Imagem placeholder
            rarity:'Rara',
        },
        {
            name: 'Poção da Clarividência',
            description: formatDescription ('Quando você bebe esta poção, você ganha o efeito da magia clarividência. Um globo ocular balança nesse líquido amarelado, mas desaparece quando a poção é aberta.'),
            price: '100L ou 1.000C',
            image: '', // Imagem placeholder
            rarity:'Rara',
        },
        {
            name: 'Poção da Diminuição',
            description: formatDescription ('Quando você bebe esta poção, você ganha o efeito "reduzir" da magia aumentar/reduzir por 1d4 horas (sem necessidade de concentração). O vermelho no líquido da poção se contrai continuamente em uma pequena gota e depois se expande para colorir o líquido claro ao seu redor. Agitar a garrafa não interrompe este processo.'),
            price: '100L ou 1.000C',
            image: '', // Imagem placeholder
            rarity:'Rara',
        },
        {
            name: 'Poção da Forma Gasosa',
            description: formatDescription ('Quando você bebe esta poção, você ganha o efeito da magia forma gasosa por 1 hora (sem necessidade de concentração) ou até terminar o efeito com uma ação bônus. O recipiente desta poção parece conter uma névoa que se move e se derrama como água.'),
            price: '100L ou 1.000C',
            image: '', // Imagem placeholder
            rarity:'Rara',
        },
        {
            name: 'Poção de Heroísmo',
            description: formatDescription ('Por 1 hora depois de beber esta poção, você ganha 10 pontos de vida temporários que duram 1 hora. Pela mesma duração, você está sob o efeito da magia abençoar (sem necessidade de concentração). Esta poção azul borbulha e vaporiza como se estivesse fervendo.'),
            price: '100L ou 1.000C',
            image: '', // Imagem placeholder
            rarity:'Rara',
        },
        {
            name: 'Poção da Invulnerabilidade',
            description: formatDescription ('Por 1 minuto depois de beber esta poção, você tem resistência a todos os danos. O líquido xaroposo da poção parece ferro liquefeito.'),
            price: '100L ou 1.000C',
            image: '', // Imagem placeholder
            rarity:'Rara',
        },
        {
            name: 'Poção de Leitura da Mente',
            description: formatDescription ('Quando você bebe esta poção, você ganha o efeito da magia detectar pensamentos (CD de resistência 13). O líquido denso e roxo da poção tem uma nuvem ovóide de rosa flutuando nele.'),
            price: '100L ou 1.000C',
            image: '', // Imagem placeholder
            rarity:'Rara',
        },
    ], // Fim da sessão de poções

    // Inicio de magias abaixo
    spells: [
        {
            name: 'Feitiço de Levitação',
            description: 'Levite objetos leves.',
            price: '200 Pontos',
            image: '', // Imagem placeholder
            rarity:'Incomum',
        },
        {
            name: 'Feitiço de Proteção',
            description: 'Cria um escudo protetor por 5 minutos.',
            price: '300 Pontos',
            image: '', // Imagem placeholder
            rarity:'Comum',
        },
    ],
    ingredients: [
        {
            name: 'Mandrágora',
            description: 'Essencial para poções de cura.',
            price: '50 Pontos',
            image: '', // Imagem placeholder
            rarity:'Comum',
        },
        {
            name: 'Asa de Morcego',
            description: 'Ingrediente raro para poções de invisibilidade.',
            price: '120 Pontos',
            image: '', // Imagem placeholder
            rarity:'Comum',
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
