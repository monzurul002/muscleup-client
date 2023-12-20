import useCart from "../../hooks/useCart";

const Cart = () => {
    const { carts } = useCart()
    return (
        <div>
            {carts.length}
        </div>
    );
};

export default Cart;