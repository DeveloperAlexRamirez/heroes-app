import { heroes } from '../data/heroes';

export const getHeroesById = ( id ) => {
// El find nos dice que "apenas encuentre uno, eso sería todo"
    return heroes.find( heroes => heroes.id === id);
}