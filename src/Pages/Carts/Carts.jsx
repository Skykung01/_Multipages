import './Carts.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Carts({ carts, setcarts }) {
    return (
        <div>
            <div className='Products-container'>
                <div className='carts-itemps-container'>
                    {carts.map((cart) => {
                        return (<Card style={{ width: '18rem' }} key={cart.id}>
                            <Card.Img variant="top" src={cart.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{cart.title}</Card.Title>
                                <Card.Text><b>${cart.price.toFixed(2)}</b></Card.Text>

                                <Button variant="outline-danger" onClick={() => {
                                    setcarts(carts.filter((c) => c.id !== cart.id))
                                }}>Remove from Carts</Button>
                            </Card.Body>
                        </Card>)
                    })}

                </div>
            </div>
                    <h4>itemps : {carts.length} itemps - Total Price : $:{carts.reduce((prev, cart) => { return prev + cart.price},0).toFixed(2)}</h4>
                    <button className='btn btn-warning'>checkout</button>

        </div>
    );
}

export default Carts;