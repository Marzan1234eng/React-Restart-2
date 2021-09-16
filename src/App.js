import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
        <Users></Users>
        <Count></Count>
        <ul>
          {
          hero.map(hero => <li>{hero}</li>)
          }
        </ul>
         {
            product.map(pd =><Products product={pd}></Products>)
          }
        <Hero name={hero[0]} heroineName={heroine[0]}></Hero>
        <Hero name={hero[1]} heroineName={heroine[1]}></Hero>
        <Hero name={hero[2]} heroineName={heroine[2]}></Hero>
        <Hero name={hero[3]} heroineName={heroine[3]}></Hero>
      </header>
    </div>
  );
}

function Users(){
  
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data =>setUser(data))

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      const totalPost = data.splice(0,5);
      setPost(totalPost);
    });

  },[])

  return (
    <div>
      <h3>Dynamic Users: {user.length}</h3>
      <ul>
        {
          user.map(user=> <li>{user.name}</li>)
        }
        {
          post.map(post => <li>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

function Count(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
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
