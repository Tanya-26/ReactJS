import { NavLink, Outlet } from 'react-router-dom';

const Courses = () => {
  return (
    <div className="container" style={{ height: "80vh" }}>
      <h2>Select your course:</h2>
      <nav className='justify-between d-flex mb-4'> 
        
        <NavLink to="youtube" className="m-2">YouTube</NavLink>
        <NavLink to="certificates" className="m-2">Certificates</NavLink>
      </nav>
      
    
      <div className="p-3 border rounded">
        <Outlet />
      </div>
    </div>
  );
};

export default Courses;