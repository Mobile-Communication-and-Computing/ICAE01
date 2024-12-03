import '../assets/CSS/layout.css';
export default function Product(props){
    
    return(
        <div className="grid-item">

            <div class="card">
                <img src={require(`../assets/image/`+props.data.img)} alt={props.data.name}/>
                <div class="card-body">
                    <h5 class="card-title">{props.data.name}Price:{props.data.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}