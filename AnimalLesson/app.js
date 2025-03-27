import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const title = '';
const background = (
  <img class = 'background' alt ='ocean' src ='/images/ocean.jpg'>
  </img>
);

const images = [];

function displayFact(e) {
  const animalName = e.target.alt;
  const randomIndex = Math.floor(Math.random() * animals[animalName].facts.length);
  const funFact = animals[animalName].facts[randomIndex];
  const fact= document.getElementById('fact');
  fact.innerHTML=funFact;
}

for (const animal in animals){
   images.push(<img key={animal} className ='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button'  onClick={displayFact}></img>);
}

const animalFacts = (
  <div>
  {background}
  <div className='animals'>
  {images}
  </div>

  <h1>
  {title === '' ? "Click for funfact" : title}
  </h1>
  <p id='fact'>
  blah
  </p>
  <br></br>
  
  </div>


);

root.render(animalFacts);