import React, { useState } from 'react'

function ProductCard({product,cart,setCart,rating}) {
    
    const [button,setButton] = useState('Add to Cart')
    const handleClick = (e) => {
        console.log(e)
        if(e.target.innerText === 'Add to Cart')
        {
            setCart(cart+1);
            setButton('Remove');
        }
        else{
            setCart(cart-1);
            setButton('Add to Cart');
        }

        
    }
    const showRating = (rating) => {
        let row = [];
        for(let i=0;i<rating;i++){
            row.push(<span className="fill-star" key={i}><i class="fas fa-star"></i></span>)
        }
        for(let i=rating;i<5;i++){
            row.push(<span className="fill-star" key={i}><i class="fal fa-star"></i></span>)
        }
        return row;
    }
    return (
        <div className="card mb-3" style={{width:"100%"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={product.image} className="card-img text-center " alt="..."  />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p>
                        {
                            showRating(rating)
                        }
                    </p>
                    <p className="card-text">${product.price}</p>
                    <button className={`btn ${button === 'Add to Cart' ? 'btn-success' : 'btn-danger' }`} onClick={handleClick}>{button}</button>
                </div>
                </div>
            </div>
</div>
    )
}

export default ProductCard
