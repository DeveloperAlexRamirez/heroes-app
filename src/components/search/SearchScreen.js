import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroeCard } from '../heroes/HeroeCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
    
    const location = useLocation();
    const { q = ''} = ( queryString.parse( location.search ) );

    const [ formValues, handleInputChange ] = useForm({
      searchText: q,
    }); 
    
    const { searchText } = formValues;
    
    // Para que solo cambie cuando el query (q) sea otro 
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q] );
    
    const handleSearch = (e)=> {
      e.preventDefault();
      history.push(`?q=${ searchText }`)
    }
    
  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form
            onSubmit={ handleSearch }
          >
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              value={ searchText }
              onChange={ handleInputChange }
              autoComplete="off"
            />

            <button
             type="submit"
             className="btn m-1 btn-block btn-outline-primary"
            >Search...
            </button>
          </form>
        </div>

        <div className="col-7">
            <h4>Results</h4>
            <hr/>

    {/* Si el query está vacío que muestre esto */}
            {
              (q === '')
               && 
               <div className="alert alert-success">
                  Search a hero
              </div>              
            }

            {
              (q !== '' && heroesFiltered.length === 0)
               && 
               <div className="alert alert-danger">
                  There is no a hero with { q }
              </div>              
            }

            {
                heroesFiltered.map( hero => (
                    <HeroeCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }

        </div>
      </div>
    </div>
  );
};
