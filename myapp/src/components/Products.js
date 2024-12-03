import {useState} from 'react';
import '../assets/CSS/layout.css';
import flowers from './FlowerDB';
import Product from './Product';
import Cart from './Cart';

export default function Products(){
    const[items, setItems] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0);

    const onSubmit = (item)=>{
        setItems([...items, item]);
        setGrandTotal((prev)=> prev+item.price);
    }
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        flowers.map((flower)=>(<Product data={flower} submitfunc={onSubmit}/>))
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                <Cart items={items} total={grandTotal}/>
                }
            </div>
        </>
    );

}