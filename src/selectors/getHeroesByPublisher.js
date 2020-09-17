const { heroes } = require('../data/heroes');

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    // Pequeña validación
    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }
    return heroes.filter( heroes => heroes.publisher === publisher);
}