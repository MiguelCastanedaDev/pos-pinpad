import './Order.css'

export default function Order(title, price, currency){
    return(
        <>
            <div className='order'>
                <figure>
                    <img src="./src/assets/coffee-one.avif" alt="Order" />
                </figure>
                <div className='info-product'>
                    <h3>{title}</h3>
                    <span className='price'>{price} {currency}</span>
                </div>
            </div>
        </>
    )
}