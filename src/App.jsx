function App() {
  let listinfo = {
    id: 1,
    name: "Raman",
    class: "ReactJS",
  };
  return (
    <div>
      <h1>Welcome to ReactJS</h1>
      <h1>Id: {listinfo.id}</h1>
      <h1>Name: {listinfo.name}</h1>
      <h1>Class: {listinfo.class}</h1>
    </div>
  );
}
export default App;
