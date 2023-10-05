// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    return (
        <>
            <div className='p-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                        {props.content}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Cards