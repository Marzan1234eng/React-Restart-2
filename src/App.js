import logo from './logo.svg';
import './App.css';

function App() {
  const hero = ['Anwar', 'Jasim', 'Manna', 'Alomgir'];
  const heroine = ['Janvi', 'Shabana', 'Purnima', 'Rubina'];
  const product = [
    {name: "Adobe Photoshop", price:"$29"},
    {name: "PDF Reader", price:"$3"},
]
  return (
    <div className="App">
      <header className="App-header">
        <Products product={product[0]}></Products>
        <Products product={product[1]}></Products>
        <Hero name={hero[0]} heroineName={heroine[0]}></Hero>
        <Hero name={hero[1]} heroineName={heroine[1]}></Hero>
        <Hero name={hero[2]} heroineName={heroine[2]}></Hero>
        <Hero name={hero[3]} heroineName={heroine[3]}></Hero>
      </header>
    </div>
  );
}

function Products(props){
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    width: "200px",
    height: "300px"
  }

  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h4>Product Name: {name} </h4>
      <h5>Product Price: {price} </h5>
      <button>Buy Now</button>
    </div>
  )
}

function Hero(props){
  return(
    <div style={{border:"1px solid white", width:"400px"}}>
      <h2>Hero: {props.name}</h2>
      <h4>Heor of: {props.heroineName}</h4>
    </div>
  )
}

export default App;
