import './Nav.css'

export default function Nav(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <img src="./src/assets/logo.jpg" alt="" />
                    </li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Inventory</a></li>
                    <li><a href="">Billings</a></li>
                    <li><a href="">Other</a></li>
                </ul>
            </nav>
        </>
    )
}