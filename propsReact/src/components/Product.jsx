import "./product.css"


const Product=(props)=>{
    
    return(
        <>
        <div className="product wrap">
            <img src={props.productImage} alt="product image"/>
            <p>{props.productname}</p>
            <h3>#{props.productprice}</h3>
        </div>
        </>
    )
}

export default Product;


