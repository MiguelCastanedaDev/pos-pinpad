import './Flyout.css'
import Order from '../order/Order'

export default function Flyout(){
    return(
        <>
            <aside className='flyout' id='flyout'>
                <Order></Order>
            </aside>
        </>
    )
}