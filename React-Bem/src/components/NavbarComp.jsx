import React from 'react';


export function NavbarComp() {
  return ( 
    <div >
      <ul class="Navigation">
        <li class="Navigation__item ">
          <a class="Navigation__item Navigation__item--home" href="/home">CityTripz</a>
        </li>
        <li class="Navigation__item">
          <a class="Navigation__item" href="/home">Home</a>
        </li>
        <li class="Navigation__item">
          <a class="Navigation__item" href="/destinations">Destiniations</a>
        </li>
      </ul>
    </div>
  );
}