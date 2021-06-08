import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productFetch } from "../store/action/productAction";
import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.productReducer.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productFetch());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center">this is product list component</h1>
      <div className="container">
        <div className="row">
          {products &&
            products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
