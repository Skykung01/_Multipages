import './Companent.css';
import AddVariable from './variable/add-variable';
import Counter from './counter/counter';
import Timer from './timer/timer';
import Temperatures from './temperatures/temperatures.jsx';
function Companent() {
    return (

        <div className='grid-container'>
            <div className='products-container'>
                <div className='grid-item counter-timer'>
                    <Counter count={""} name="counter" />
                    <Timer time={0} />
                </div>
                <div className='grid-item add-variable'>
                    <AddVariable />
                </div>
                <div className='grid-item temperatures'>
                    <Temperatures />
                </div>
            </div>
        </div>

    );
}

export default Companent;