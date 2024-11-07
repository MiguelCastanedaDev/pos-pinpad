import './Order.css'

export default function Order(){
    return(
        <>
            <div className='order'>
                <figure>
                    <img src="./src/assets/coffee-one.avif" alt="Order" />
                </figure>
                <div className='info-product'>
                    <h3>Capuccino</h3>
                    <span className='price'>49.9 MXN</span>
                </div>
            </div>
        </>
    )
}