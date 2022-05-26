// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react';

function App() {
 let x = 10;
let marks = [0,20,50,60,70];
// let [price,setprice] = useState(product.price);
// const incprice = () =>{  
//   setprice(product.price++);
// }
const product = {
  id : 100,
  Title : `Mobile`,
  price : 40000,
  availability : true
};
const  myStyle = {backgroundColor: 'blue',color: 'white'}
  return (
   <div>
      <ul>
      <li>Ali Ahmad {x}</li>
    </ul>
    <h1 style = {myStyle}>Results</h1>
    <ul>
      <li style = {{color:marks[0]>50? 'green':'red'}}>{marks[0]>50? `Pass`:`Fail`} </li>
      <li style = {{color:marks[1]>50? 'green':'red'}}>{marks[1]>50? `Pass`:`Fail`} </li>
      <li style = {{color:marks[2]>50? 'green':'red'}}>{marks[2]>50? `Pass`:`Fail`} </li>
      <li style = {{color:marks[3]>50? 'green':'red'}}>{marks[3]>50? `Pass`:`Fail`} </li>
      <li style = {{color:marks[4]>50? 'green':'red'}}>{marks[4]>50? `Pass`:`Fail`} </li>
    </ul>
    <h1 style = {myStyle}> Product Details</h1>
    <ul>
      <li>Product Id = {product.id}</li>
      <li>Title = {product.Title}</li>
      <li>Price = {product.price}</li>
      <li style ={{color :product.availability === true? `green`:`red`}}>{product.availability === true? `Product available`:`Product not available`}</li>
    </ul>
   </div>
  );
}



// export default App;
