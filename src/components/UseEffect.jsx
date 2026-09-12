// import React, { useEffect, useState } from "react";
// import { data } from "react-router-dom";

// const Home = () => {
// //   const [count, setCount] = useState(0);
    
// //   useEffect(() => {
// //     // 1. Get the current count from session storage (or default to 0 if it doesn't exist)
// //     const savedVisits = Number(sessionStorage.getItem("homeVisits")) || 0;
    
// //     // 2. Calculate the new count
// //     const newCount = savedVisits + 1;
    
// //     // 3. Update the state and save it back to session storage
// //     setCount(newCount);
// //     sessionStorage.setItem("homeVisits", newCount);
    
// //     // 4. Trigger the alert
// //     alert("Home opened " + newCount + " times");
// //   }, []); // The empty array ensures this only runs when the component mounts
//     const [product, setProduct] = useState([])
//     useEffect(()=>{
//         fetch('https://dummyjson.com/carts')
//       .then(response => response.json())
//       .then(data=>setProduct(data.))
// R
//     })
//   return (
//     <div className="container" style={{ height: "80vh" }}>
//       <h2>Home Page</h2>
//       <p>Opened {count} times</p>
//     </div>
//   );
// };

// export default Home;
import { useEffect, useState } from "react";

const UseEffect = () => {
  // Uncommenting the state so the {count} variable in the return doesn't break
  // const [count, setCount] = useState(0);
  
  // State to hold the fetched carts
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((response) => response.json())
      // 1. Fixed the syntax error by completing data.carts and removing the 'R'
      .then((data) => setProduct(data.carts)) 
      .catch((error) => console.error("Error fetching carts:", error));
  }, []); // 2. Added the empty dependency array to prevent infinite re-rendering

  return (
    <div className="container" style={{ height: "80vh" }}>
      <h2>Home Page</h2>
      {/* <p>Opened {count} times</p> */}
      {/* {JSON.stringify(product)} */}
      {product.map((item)=>(
        <div key={item.id}>
            <li>ID:{item.id}</li>
            <li>Total Products:{item.totalProducts}</li>
            </div>
      ))}
     
      <p>Total carts fetched: {product.length}</p>
      
    </div>
  );
};

export default UseEffect;