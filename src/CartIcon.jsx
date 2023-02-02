
export default function CartIcon(props){
    return(
        <div className="cart-icon">
            <div className="icon"></div>
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="counter">{props.cartItem}</div>
            
                    </div>
    );
}