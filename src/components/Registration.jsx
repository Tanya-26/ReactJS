import { useState } from "react";

const Registration = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const submitValue = (e) => {
    e.preventDefault();
    setSubmittedData({ user, pwd });
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "400px" }}>
      <h2 className="bg-warning text-center p-2 rounded">Registration Form</h2>
      <form className="d-flex flex-column gap-3 mt-3" onSubmit={submitValue}>
        <input 
          type="text" 
          name="user" 
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="form-control" 
          placeholder="Enter user name" 
        />
        <input 
          type="password" 
          name="pwd" 
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className="form-control" 
          placeholder="Enter password" 
        />
        <button type="submit" className="btn btn-primary w-25 align-self-center">
          Register
        </button>
        
      </form>

      {submittedData && (
        <div className="mt-4 p-3 border rounded bg-light">
          <h4>Submitted Details:</h4>
          <p className="mb-1"><strong>User:</strong> {submittedData.user}</p>
          <p className="mb-0"><strong>Password:</strong> {submittedData.pwd}</p>
        </div>
      )}
      {/* const Display =(props) =>{
        const {user, pwd} = props;
        return (
            <h1>User: {user}</h1>
            <h1>Password: {pwd} </h1>
        )
      } */}
    </div>
  );
};

export default Registration;