import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "", address: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.error("Error fetching users", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.id.trim() || !formData.name.trim() || !formData.address.trim()) {
      alert("Please fill in ID, Name, and Address.");
      return;
    }

    try {
      if (editingId) {
        const response = await axios.put(
          `http://localhost:5000/users/${editingId}`,
          formData
        );

        setUsers((prevUsers) =>
          prevUsers.map((u) => (u.id === editingId ? response.data : u))
        );
      } else {
        const response = await axios.post("http://localhost:5000/users", formData);
        setUsers((prevUsers) => [...prevUsers, response.data]);
      }

      setEditingId(null);
      setFormData({ id: "", name: "", address: "" });
    } catch (error) {
      console.error("Error saving user", error);
      alert("Failed to save user. Ensure the ID is unique.");
    }
  };

  const handleEdit = (user) => {
    setFormData({ id: user.id, name: user.name, address: user.address });
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/users/${id}`);
      if (response.status === 200) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
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