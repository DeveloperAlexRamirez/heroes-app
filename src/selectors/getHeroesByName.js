import { heroes } from '../data/heroes';


export const getHeroesByName = ( name = '') => {

    if ( name === '' ){
        return [];
    }

    // Para pasar el nombre a minisculas
    name = name.toLocaleLowerCase();
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) );
}