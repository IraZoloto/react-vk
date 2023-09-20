const Product = (props) => {

    return (
        <div>
            <h2>{props.name}</h2>
            <p className="product-discription">{props.price}</p>
            <button type='submit'>Купить</button>
        </div>
    )
}

export default Product