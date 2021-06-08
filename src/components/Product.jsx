import { useDispatch } from "react-redux";
import { addToCart } from "../store/action/cartAction";

const Product = (props) => {
  const { id, title, image, price } = props.product;
  const dispatch = useDispatch();
  return (
    <div className="col-md-6">
      <div className="card">
        <img src={image} alt="product" width="100" />
        <p className="text-danger">{title}</p>
        <p>{price}</p>
        <button onClick={() => dispatch(addToCart(props.product))}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
