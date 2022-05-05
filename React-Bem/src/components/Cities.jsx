import React, { useState } from 'react';
import { CityCard } from './CityCard';
import { ConfirmToast } from './ConfirmToast';
import destiniations from '../data';

export function Cities() {

  const [chosen, setChosen] = useState(false);

  function displayConfirmToast() {
    setChosen(true);

    setTimeout(() => {
      setChosen(false);
    }, 4000);
  }
  return (
    <div class="Container">
      {chosen && <ConfirmToast toggle={setChosen} />}
      <div class="List">
        {destiniations.map(data => (
          <div key={`${data.id}`}>
            <CityCard data={data} setChosen={displayConfirmToast} />
          </div>
        ))}
      </div>
    </div>
  );
}