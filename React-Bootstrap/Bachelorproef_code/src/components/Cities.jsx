import { Container, Row, Col } from 'react-bootstrap';
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
    <Container>
      {chosen && <ConfirmToast toggle={setChosen} />}
      <Row>
        {destiniations.map(data => (
          <Col xs={3} className="mb-5" key={`${data.id}`}>
            <CityCard data={data} setChosen={displayConfirmToast} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}