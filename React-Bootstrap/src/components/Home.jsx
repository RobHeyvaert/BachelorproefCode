import React from 'react';
import { Container } from 'react-bootstrap'

export function Home() {
  return (
    <Container className='mt-5'>
        <p class="text-center fs-1">Welcome to CityTripz</p>
        <p class="text-center fs-4">This is a web page used within the context of a bachelor thesis.</p>
        <p class="text-center fs-4">On the destinations page, some cities are displayed in a Bootstrap-Card with a photo, title, price and short content. In addition, each card contains a 'take this city'-button, when clicked a small toast will be displayed at the bottom of the screen.</p>
        <p class="text-center fs-4">The purpose of this application is to test react in combination with various CSS methodologies/frameworks.</p>
    </Container>
  );
}
