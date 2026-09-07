import { useParams } from 'react-router-dom';

const Product = () => {
  const { pid } = useParams();
  let productContent;

  switch (pid) {
    case '1':
      productContent = (
        <>
          <h2>Product 1 Details</h2>
          <p>This is a multi-line description for the first product.</p>
          <ul>
            <li>High quality</li>
            <li>Durable material</li>
          </ul>
        </>
      );
      break;
    case '2':
      productContent = (
        <div>
          <h2>Product 2 Details</h2>
          <p>This is the second product.</p>
        </div>
      );
      break;
    default:
      productContent = (
        <h3>ID not found</h3>
      );
  }

  return (
    <div className='vh-100'>
      {productContent}
    </div>
  );
};

export default Product;