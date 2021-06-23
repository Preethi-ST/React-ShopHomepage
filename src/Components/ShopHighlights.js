import React from 'react'
import Shooping from './shooping1.jpg'
import ShoopingImg from './shooping.jpg'
import shooping2 from './shooping2.jpg'
function ShopHighlights() {
    return (
        <div className="jumbotron jumbotron-fluid jumbotron-image" style={{backgroundImage : `url(${ShoopingImg})`}} >
            <div className="container text-white">
                <h1 className="display-4">Shop with Styles</h1>
                <p className="lead">Checkout the latest arrivals and grab the best!</p>
            </div>
        </div>
    )
}

export default ShopHighlights
