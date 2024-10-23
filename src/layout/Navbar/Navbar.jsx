import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import Products from '../../Pages/Products/Products';
import Carts from '../../Pages/Carts/Carts';
const intTap = 'home'

function Navbar({ products, carts ,setToken}) {

    const [tab, setTab] = useState('')
    useState(() => {
        setTab(intTap)
    }, [])
    return (
        <div className='Navbar-container'>


            <Link to={'/home'}>
                <button className={'btn ' + (tab === 'home' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('home')}>Home</button>
            </Link>

            <Link to={'/calculator'}>
                <button className={'btn ' + (tab === 'calculator' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('calculator')}>calculator</button>
            </Link>

            <Link to={'/companent'}>
                <button className={'btn ' + (tab === 'companent' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('companent')}>companent</button>
            </Link>

            <Link to={'/animation'}>
                <button className={'btn ' + (tab === 'animation' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('animation')}>animation</button>
            </Link>

            <Link to={'/todo'}>
                <button className={'btn ' + (tab === 'todo' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('todo')}>Todo</button>
            </Link>

            <Link to={'/Products'}>
                <button className={'btn ' + (tab === 'Products' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('Products')}>Products ({products.length})</button>
            </Link>

            <Link to={'/Carts'}>
                <button className={'position-relative btn ' + (tab === 'Carts' ? 'btn-primary' : 'btn-outline-primary ')}
                    onClick={() => setTab('Carts')}>Carts
                    {carts.length > 0 && (
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {carts.length < 10 ? carts.length : '9+'}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    )}
                </button>
            </Link>

            <Link to={'/Login'}>
                <button className={'btn ' + (tab === 'Login' ? 'btn-danger' : 'btn-outline-danger')}
                    onClick={() => {setToken('')}}>Login</button>
            </Link>
        </div>

    );
}

export default Navbar;