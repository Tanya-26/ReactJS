import { useState } from "react";

const Display = ({ user, pwd, age }) => {
  return (
    <div className="mt-4 p-3 border rounded bg-light">
      <h4>Submitted Details:</h4>
      <p className="mb-1"><strong>User:</strong> {user}</p>
      <p className="mb-1"><strong>Password:</strong> {pwd}</p>
      <p className="mb-0"><strong>Age:</strong> {age}</p>
    </div>
  );
};

const Registration = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [age, setAge] = useState(0);
  const [submittedData, setSubmittedData] = useState(null);

  const submitValue = (e) => {
    e.preventDefault();
    setSubmittedData({ user, pwd, age });
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
        <input 
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="form-control"
          placeholder="Enter age"
        />
        <button type="submit" className="btn btn-primary w-25 align-self-center">
          Register
        </button>
      </form>

      {submittedData && <Display {...submittedData} />}
    </div>
  );
};

export default Registration;