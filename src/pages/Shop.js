import React, { useEffect, useState } from "react";
import logo from "../images/products/The_Globe.png";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [themes, setThemes] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
//This block fetches the data from the local host url that contains the data from the products table in the database.
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

//This block fetches the data from the themes table in the database.
  useEffect(() => {
    const fetchAllThemes = async () => {
      try {
        const res = await axios.get("http://localhost:8000/themes");
        setThemes(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllThemes();
  }, []);

  
//This block is handling the onCLick event from the "Add to Cart" to send the paramters into the cart table that is locally hosted
  const handleClick = (item) => async (e) => {
    
    e.preventDefault();
    
    const newCartItem = {
      product_set_name : item.product_set_name,
      product_set_numb : item.product_set_numb,
      product_price : item.product_price,
      product_location : item.product_location,
      product_quantity : item.product_quantity,
      product_img : item.product_img,
      theme : item.theme
    }
    
    

    try {
      await axios.post("http://localhost:8000/cart", newCartItem);
      
      //Alert for addition of item to cart; To be changed
      
      alert("This has been added to your cart");


    } catch (err) {
      console.log(err)
    }
  };

  const getFilteredResults = products //declaring a constant variable called 'getFilteredResults' and assigning it the values in the 'products' array
  .filter((item) => //calling the 'filter' method on 'products' array which iterates through each element in the array and filters out elements which don't match the condition
    Object.keys(item).some((key) => //looping through all the keys in the item objects and checks if some of the keys return a condition which is true 
      item[key].toString().toLowerCase().includes(search.toLowerCase()) //conditionally checks for a string within the item object (convert to lowercase for comparison consistency)
    )
  )
  .sort((a, b) => { //calling the 'sort' method on 'products' array which is used to sort the element in either ascending or descending order
    switch (filter) { //using a switch statement to check the value of 'filter'
      case "price-low-to-high": //if the value of 'filter' is price-low-to-high
        return a.product_price - b.product_price; //return the difference of the product prices if 'a' is less than 'b'
      case "price-high-to-low": //if the value of 'filter' is price-high-to-low
        return b.product_price - a.product_price; //return the difference of the product prices if 'b' is less than 'a'
      case "name-a-to-z": //if the value of 'filter' is name-a-to-z
        return a.product_set_name.localeCompare(b.product_set_name); //returns a negative number if the name of 'a' comes before 'b' alphabetically
      case "name-z-to-a": //if the value of 'filter' is name-z-to-a
        return b.product_set_name.localeCompare(a.product_set_name); //returns a negative number if the name of 'b' comes before 'a' alphabetically
      default:
        return 0; //return 0 if none of the above conditions match
    }
  });

return ( 
  <section className="home">  {/*returning the html elements to the page with the corresponding classes*/}
    <div className="container">
      <div className="filter-bar">
        <input //input field to allow the user to type in a search term
          className="search-bar"
          placeholder="Search"
          value={search}
          onChange={handleInputChange} //this will handle the input change by the user
        />
<div className="filter-select"> {/* giving the filter options to the user */}
<div> {/* div containing the label*/}
  <label htmlFor="sort-by-none">Sort By:</label>
</div>
<div> {/* div containing the filter options */}
  <input
    type="radio"
    id="sort-by-price-low-to-high"
    name="sort-by"
    value="price-low-to-high"
    checked={filter === "price-low-to-high"} //conditionally checks if the value of 'filter' is price-low-to-high and sets the options to 'checked'
    onChange={handleFilterChange} 
  />
  <label htmlFor="sort-by-price-low-to-high">Price: Low to High</label>
</div>
<div>
  <input
    type="radio"
    id="sort-by-price-high-to-low"
    name="sort-by"
    value="price-high-to-low"
    checked={filter === "price-high-to-low"} //conditionally checks if the value of 'filter' is price-high-to-low and sets the options to 'checked'
    onChange={handleFilterChange} 
  />
  <label htmlFor="sort-by-price-high-to-low">Price: High to Low</label>
</div>
<div>
  <input
    type="radio"
    id="sort-by-name-a-to-z"
    name="sort-by"
    value="name-a-to-z"
    checked={filter === "name-a-to-z"} //conditionally checks if the value of 'filter' is name-a-to-z and sets the options to 'checked'
    onChange={handleFilterChange} 
  />
  <label htmlFor="sort-by-name-a-to-z">Name: A to Z</label>
</div>
<div>
  <input
    type="radio"
    id="sort-by-name-z-to-a"
    name="sort-by"
    value="name-z-to-a"
    checked={filter === "name-z-to-a"} //conditionally checks if the value of 'filter' is name-z-to-a and sets the options to 'checked'
    onChange={handleFilterChange} 
  />
  <label htmlFor="sort-by-name-z-to-a">Name: Z to A</label>
</div>
</div> 

        </div>
        <ul className="inventory-list">
          {getFilteredResults.map((product) => {
            return (
          
              <li key={product.product_set_numb} >
                <div className="card">
                  <div className="image">
                    <img src={require(`./../images/products/${product.product_img}`)} alt={product.product_img} width="70%" />
                  </div>
                  <div className="setNumb"  name="product_set_numb">{product.product_set_numb}</div>
                  <div className="title"  name="product_set_name">{product.product_set_name}</div>
                  <div className="price"  name="product_price">${product.product_price}</div>
                  <div hidden="hidden" name="product_location">{product.product_location}</div>
                  <div hidden="hidden" className="quantity" name="product_quantity">{product.product_quantity}</div>
                  <div hidden="hidden" name="product_img">{product.product_img}</div>
                  <div hidden="hidden" name="theme">{product.theme}</div>
                  <div className="button">
                    <button className="add-cart" onClick={handleClick(product)}>Add Cart</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Shop;
