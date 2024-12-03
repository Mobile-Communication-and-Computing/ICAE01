import { useState } from 'react';
import '../assets/CSS/layout.css';
export default function Product(props){

    const price = props.data.price;

    const [item, setItem] = useState({
        name:props.data.name,
        qty:props.data.qty,
        price:0,
    });

    return(
        <div className="grid-item">

            <div class="card">
                <img src={require(`../assets/image/`+props.data.img)} alt={props.data.name}/>
                <div class="card-body">
                    <h5 className="card-title">{props.data.name}Price:{props.data.price}</h5>
                    <div className="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" min={0} value={item.qty} onChange={(e)=>setItem({...item, qty:e.target.value, price:e.target.value*price})}/>
                    </div>
                    <button class="card-button" onClick={()=>item.qty > 0 ? props.submitfunc(item): null}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}