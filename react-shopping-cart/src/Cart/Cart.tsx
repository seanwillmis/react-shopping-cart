import CartItem from "../CartItem/CartItem";
// Styles
import { Wrapper } from "./Cart.styles";
// Types
import { CartItemType } from "../App";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

// Create Component
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => { // Functional Component

    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No Items in cart.</p> : null} 
            {cartItems.map(item => (
                <CartItem />
            ))}
        </Wrapper> // Styled Component
    );
}; // explicit return

export default Cart;