import React from 'react';

export function CityCard({data, setChosen}){
    return(
        <div class="Card">
            <img class="Card__image" src={data.image} alt="City"/>
            <div class="Card__body">
                <div class="Card__title">
                    <p class="Card__city">{data.title}</p>
                    <p class="Card__badge">€{data.price}</p>
                </div>

                <p class="Card__description">{data.description}</p>
                <button onClick={() => setChosen()} class="Button Button--green">
                    <span>Take this city!</span>
                </button>
            </div>
        </div>    
    )
}
