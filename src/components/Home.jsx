import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "", address: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that ID, Name, and Address are all filled in
    if (!formData.id.trim() || !formData.name.trim() || !formData.address.trim()) {
      alert("Please fill in ID, Name, and Address.");
      return;
    }

    if (editingId) {
      // UPDATE: Send the PUT request
      try {
        const response = await fetch(`http://localhost:5000/users/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          const updatedUser = await response.json();
          setUsers(users.map((u) => (u.id === editingId ? updatedUser : u)));
          setEditingId(null); 
          setFormData({ id: "", name: "", address: "" });
        }
      } catch (error) {
        console.error("Error updating user", error);
      }
    } else {
      // CREATE: Send the full formData, including your custom ID
      try {
        const response = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData), 
        });

        if (response.ok) {
          const newUser = await response.json();
          setUsers([...users, newUser]);
          setFormData({ id: "", name: "", address: "" });
        } else {
          alert("Failed to add user. Ensure the ID is unique.");
        }
      } catch (error) {
        console.error("Error adding user", error);
      }
    }
  };

  const handleEdit = (user) => {
    setFormData({ id: user.id, name: user.name, address: user.address });
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setUsers(users.filter((user) => user.id !== id));
      }
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ id: "", name: "", address: "" });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">User Information</h2>
      
      <div className="card bg-warning p-4 mx-auto mb-5 border-0 shadow-sm" style={{ maxWidth: "500px" }}>
        <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
          
          <input 
            type="text"
            name="id"
            placeholder="ID"
            className="form-control" 
            value={formData.id}
            onChange={handleChange}
            disabled={editingId !== null} 
          />

          <input 
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          <input 
            type="text"
            name="address"
            placeholder="Address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
          />
          
          <div className="d-flex gap-2 mt-2">
            <button type="submit" className="btn btn-dark fw-bold flex-grow-1">
              {editingId ? "Update User" : "Add User"}
            </button>
            {editingId && (
              <button type="button" className="btn btn-secondary fw-bold" onClick={cancelEdit}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
      
      <h2 className="mb-3">List of Users</h2>
      <div className="table-responsive">
        <table className="table table-dark table-striped table-hover align-middle">
          <thead className="text-center">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-warning text-center">
            {users.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.address}</td>
                <td>
                  <button 
                    className="btn btn-sm btn-primary me-2" 
                    onClick={() => handleEdit(row)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-sm btn-danger" 
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;