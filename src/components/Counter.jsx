// import { useState } from "react";

// const Counter = (props) => {
//   const [count, setCount] = useState(props.count);

//   return (
//     <div className="d-flex justify-content-center align-items-center mt-5">
//       <div className="d-flex align-items-center gap-4 p-4 bg-light rounded shadow-sm border">
//         <button
//           className="btn btn-danger btn-lg px-4 fs-3 shadow-sm"
//           onClick={() => setCount(count - 1)}
//         >
//           -
//         </button>

//         <h1
//           className="mb-0 fw-bold text-dark"
//           style={{ minWidth: "4rem", textAlign: "center" }}
//         >
//           {count}
//         </h1>

//         <button
//           className="btn btn-success btn-lg px-4 fs-3 shadow-sm"
//           onClick={() => setCount(count + 1)}
//         >
//           +
//         </button>
//       </div>
//       {/* <button
//         className="ms-4 btn btn-primary btn-lg shadow-sm"
//         onClick={() => setCount(0)}
//       >
//         Reset
//       </button> */}
//     </div>
//   );
// };

const Counter = (props) => {

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="d-flex align-items-center gap-4 p-4 bg-light rounded shadow-sm border">
        <button
          className="btn btn-danger btn-lg px-4 fs-3 shadow-sm"
          onClick={props.decrement} 
        >
          -
        </button>

        <h1
          className="mb-0 fw-bold text-dark"
          style={{ minWidth: "4rem", textAlign: "center" }}
        >
          {props.count}
        </h1>

        <button
          className="btn btn-success btn-lg px-4 fs-3 shadow-sm"
          onClick={props.increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
