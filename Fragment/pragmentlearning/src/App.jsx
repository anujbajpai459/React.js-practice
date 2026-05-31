import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
  <h1>
    Healthy Food
  </h1>
  <ul class="list-group">
    {fooditem.map((item)=>{
     return <li
     key={item}class="list-group-item">{item}</li>
    })}
</ul>
  </>
  );
}
export default App
