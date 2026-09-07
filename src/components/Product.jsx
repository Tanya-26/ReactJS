// import { useParams } from 'react-router-dom';

// const Product = () => {
//   const { pid } = useParams();
//   let productContent;

//   switch (pid) {
//     case '1':
//       productContent = (
//         <>
//           <h2>Product 1 Details</h2>
//           <p>This is a multi-line description for the first product.</p>
//           <ul>
//             <li>High quality</li>
//             <li>Durable material</li>
//           </ul>
//         </>
//       );
//       break;
//     case '2':
//       productContent = (
//         <div>
//           <h2>Product 2 Details</h2>
//           <p>This is the second product.</p>
//         </div>
//       );
//       break;
//     default:
//       productContent = (
//         <h3>ID not found</h3>
//       );
//   }

//   return (
//     <div className='vh-100'>
//       {productContent}
//     </div>
//   );
// };

// export default Product;
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Product = () => {
  // 1. Get the 'pid' from the URL path (e.g., /product/1)
  const { pid } = useParams(); 
  
  // 2. Manage query parameters (e.g., ?search=xyz&color=red)
  const [filter, setFilter] = useSearchParams();

  const [pvalue, setPvalue] = useState(filter.get('search') || '');
  
  const updatePvalue = (e) => {
    setPvalue(e.target.value);
  };
  
  const activeColor = filter.get('color');

  const onSearch = (e) => {
    e.preventDefault(); 
    
    const currentParams = Object.fromEntries([...filter]);
    
    if (pvalue.trim()) {
      setFilter({ ...currentParams, search: pvalue });
    } else {
      delete currentParams.search;
      setFilter(currentParams);
    }
  };

  const getSwitch = (id) => {
    switch (id) {
      case '1':
        return (
          <>
            <h2>Product 1 Details</h2>
            <p>This is a multi-line description for the first product.</p>
            <ul>
              <li>High quality</li>
              <li>Durable material</li>
            </ul>
          </>
        );
      case '2':
        return (
          <div>
            <h2>Product 2 Details</h2>
            <p>This is the second product.</p>
          </div>
        );
      default:
        return (
          <h3>Product not found of Product ID: {id}</h3>
        );
    }
  };

  return (
    <div className='vh-100'>
      {getSwitch(pid)}
      
      {/* Search Form */}
      <form className='d-flex flex-column' onSubmit={onSearch} style={{ marginTop: '20px', maxWidth: '300px' }}>
        <input 
          type="text" 
          value={pvalue}
          onChange={updatePvalue} 
          placeholder="Search products..."
        />
        <button type="submit" className="mt-2 btn btn-primary">Search</button>
      </form>

      {/* Filter Options */}
      <div style={{ marginTop: '20px' }}>
        <h4>Filter Options</h4>
        <button onClick={() => setFilter({ ...Object.fromEntries([...filter]), color: 'red' })}>
          Red
        </button>
        <button onClick={() => setFilter({ ...Object.fromEntries([...filter]), color: 'blue' })}>
          Blue
        </button>
        <button onClick={() => setFilter({})}>
          Clear All Filters
        </button>

        {activeColor && <p>Currently selected color: <strong>{activeColor}</strong></p>}
        {filter.get('search') && <p>Searching for: <strong>{filter.get('search')}</strong></p>}
      </div>
    </div>
  );
};

export default Product;