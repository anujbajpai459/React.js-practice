import "./App.css";
import Product from "./components/Product";

function App() {
  return (
    <div className="container">
      <Product
        product="AC"
        price="2000"
        image="ac.jpg"
      />

      <Product
        product="Laptop"
        price="50000"
        image="laptop.jpg"
      />

      <Product
        product="Mobile"
        price="20000"
        image="mobile.jpg"
      />
    </div>
  );
}

export default App;