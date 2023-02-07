import React, { Component } from 'react'
import TitleName from '../components/ui/TitleName'
import Navbar from '../components/ui/Navbar'
import "./ShopLegosStyles.css"

export class ShopLegos extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <TitleName name="Shop Legos"/>
        
       <div class="grid-4-columns">
    <div>
    <h2>Lorem, ipsum dolor.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis possimus eos, nobis alias consequatur vel!sit amet consectetur, adipisicing elit. Eligendi corrupti sit ipsum totam perspiciatis laudantium sequi officiis eveniet error minus.</p>
  </div>
  <div>
    <h2>Optio, sit excepturi.</h2>
    <p>Itaque, ab dolor? Quis architecto non obcaecati earum optio ipsum, magni voluptate repudiandae neque consequatur, quibusdam doloremque in libero maiores.</p>
  </div>
  <div>
    <h2>Alias, quae? Tempora!</h2>
    <p>Nisi velit laborum, sequi sit perferendis, ea exercitationem ipsa officiis inventore tenetur assumenda! Consequuntur accusantium quibusdam molestias nam, veritatis labore!</p>
  </div>
  <div className='grid-col-span-2'>
    <h2>Lorem, ipsum dolor.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis possimus eos, nobis alias consequatur vel!sit amet consectetur, adipisicing elit. Eligendi corrupti sit ipsum totam perspiciatis laudantium sequi officiis eveniet error minus.</p>
  </div>
</div>
        
      </div>
    )
  }
}


// const ProductList = ({ products }) => {
//   return (
//     <ul>
//       {props.products.map(product => (
//         <li key={product.id}>
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           <p>Price: {product.price}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default ShopLegos
