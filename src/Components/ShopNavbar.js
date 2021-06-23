import React from 'react'
import StyleLogo from './StyleLogo.png'

function ShopNavbar({cart}) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
  <img className="brand-img pr-5" src={StyleLogo} />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav" style={{fontWeight:"bolder",color:"hotpink"}}>
    <ul className="navbar-nav pr-md-5" >
      <li className="nav-item active pr-md-5">
        <a className="nav-link text-info" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item pr-md-5">
        <a className="nav-link text-info" href="#">About</a>
      </li>
      <li className="nav-item dropdown pr-md-5">
        <a className="nav-link dropdown-toggle text-info" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item text-info" href="#">All Products</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item text-info" href="#">Popular Items</a>
          <a className="dropdown-item text-info" href="#">New Arrival</a>
        </div>
      </li>
    </ul>
    <div class="ml-auto">
     <button className="btn btn-outline-info"><i className="fas fa-shopping-cart"></i> Cart  <span className="items_added">{cart}</span></button>
    </div>
  </div>
</nav>
    )
}

export default ShopNavbar
