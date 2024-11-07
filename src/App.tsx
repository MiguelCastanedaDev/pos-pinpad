import './App.css'
import Nav from './components/nav/Nav'
import Card from './components/card/Card'
import Flyout from './components/flyout/Flyout';
import { useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Simular una llamada a un API o cargar datos desde un JSON
    const jsonData = [
      { 
        id: 1, 
        title: "Cappuccino", 
        description: "Un espresso con una capa de espuma de leche.", 
        stock: 15, 
        price: 49.50, 
        currency: "MXN", 
        imgUrl: "./src/assets/coffee-one.avif" 
      },
      { 
        id: 2, 
        title: "Latte", 
        description: "Café con leche al estilo italiano, suave y cremoso.", 
        stock: 10, 
        price: 55.00, 
        currency: "MXN", 
        imgUrl: "./src/assets/latte.webp" 
      },
      { 
        id: 3, 
        title: "Espresso", 
        description: "Café concentrado de sabor fuerte, ideal para los amantes del café puro.", 
        stock: 20, 
        price: 35.00, 
        currency: "MXN", 
        imgUrl: "./src/assets/espresso.png" 
      },
      { 
        id: 4, 
        title: "Americano", 
        description: "Café espresso diluido en agua para un sabor más suave.", 
        stock: 18, 
        price: 40.00, 
        currency: "MXN", 
        imgUrl: "./src/assets/americano.webp" 
      },
      { 
        id: 5, 
        title: "Mocha", 
        description: "Café espresso con chocolate y leche, dulce y cremoso.", 
        stock: 12, 
        price: 60.00, 
        currency: "MXN", 
        imgUrl: "./src/assets/mocha.jpg" 
      },
      { 
        id: 6, 
        title: "Macchiato", 
        description: "Espresso con un toque de espuma de leche, intenso y delicioso.", 
        stock: 8, 
        price: 50.00, 
        currency: "MXN", 
        imgUrl: "./src/assets/machiatto.webp" 
      },
      { 
        id: 7, 
        title: "Flat White", 
        description: "Café con leche cremoso, con una capa fina de espuma.", 
        stock: 7, 
        price: 52.00, 
        currency: "MXN", 
        imgUrl: "./src/assets/flat.avif" 
      },
      { 
        id: 8, 
        title: "Irish Coffee", 
        description: "Café con whisky irlandés, crema y un toque dulce.", 
        stock: 5, 
        price: 70.00, 
        currency: "MXN", 
        imgUrl: "./src/assets/irish.jpg" 
      },
      { 
        id: 9, 
        title: "Affogato", 
        description: "Helado de vainilla con espresso caliente encima.", 
        stock: 6, 
        price: 65.00, 
        currency: "MXN", 
        imgUrl: "./src/assets/afogatto.jpg" 
      },
      { 
        id: 10, 
        title: "Café Vienés", 
        description: "Café con crema batida, perfecto para los que buscan algo más dulce.", 
        stock: 10, 
        price: 58.00, 
        currency: "MXN", 
        imgUrl: "./src/assets/vienes.jpg" 
      }
    ];
    
    setData(jsonData);
  }, []);

  return (
    <>
      <Nav></Nav>
      <main>
        <div className='card-container'>
          
          {data.map(item => (
            <Card key={item.id} title={item.title} description={item.description} stock={item.stock} price={item.price} currency={item.currency} imgUrl={item.imgUrl}/>
          ))}
        </div>

        <Flyout></Flyout>
      </main>
    </>
  )
}

export default App
