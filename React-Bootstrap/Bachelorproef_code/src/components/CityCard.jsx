import React from 'react';
import {Card, Badge, Button} from 'react-bootstrap'

export function CityCard({data, setChosen}){
    return(
        <Card>
            <Card.Img variant="top" src={data.image} />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className="mb-0 font-weight-bold">
                    {data.title} <Badge className='bg-secondary'>€{data.price}</Badge>
                </Card.Title>

                <Card.Text className="text-secondary">
                    {data.description}
                </Card.Text>
                <Button onClick={() => setChosen()} className="mt-auto font-weight-bold" variant="success" block>
                    Take this city!
                </Button>
            </Card.Body>
        </Card>
    )
}
