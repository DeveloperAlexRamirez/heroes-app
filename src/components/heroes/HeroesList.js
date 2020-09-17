import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroeCard } from "./HeroeCard";

export const HeroesList = ({ publisher }) => {

  // Memoriza los resultados si sus dependencias se mantienen iguales (publisher)
  const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ] );

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroes.map((heroe) => (
        <HeroeCard key={heroe.id}
         {...heroe}>             
         </HeroeCard>
      ))}
    </div>
  );
};
