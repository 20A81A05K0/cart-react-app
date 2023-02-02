import CartIcon from "./CartIcon";
export default function Header(){
    return(
         <div className="header">
        <div className="title"><h1><b>Cart</b></h1></div>
        <CartIcon/>
    </div>);
    
}