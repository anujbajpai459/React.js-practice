import "./Product.css";
function Product(props) {
  return (
    <div className="product">
      <h1>Product</h1>
      <h2>Image: {props.image}</h2>
      <h2>Product Name: {props.product}</h2>
      <h2>Product Price: ₹{props.price}</h2>
    </div>
  );
}
export default Product;