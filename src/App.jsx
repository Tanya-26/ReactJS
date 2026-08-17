function App() {
  let listinfo = {
    id: 1,
    name: "Raman",
    class: "ReactJS",
  };
  let language = ["Java"," Python", " JavaScript", " Mojo", " C++"];
  return (
    <div>
      <h1>Welcome to ReactJS</h1>
      <h1>Id: {listinfo.id}</h1>
      <h1>Name: {listinfo.name}</h1>
      <h1>Class: {listinfo.class}</h1>
      <h2>Welcome to list of languages</h2>
      <h1>{language}</h1>
      <ul>
        {language.map((l,index) => (
          <li key={index}>
            <h4>{l}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
