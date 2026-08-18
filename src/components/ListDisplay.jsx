function ListDisplay() {
  // let listinfo = {
  //   id: 1,
  //   name: "Raman",
  //   class: "ReactJS",
  // };
  // let language = [" Java"," Python", " JavaScript", " Mojo", " C++", " Kotlin"];
  // let language = [
  //   { id: 1, name: "Java", scope: 50 },
  //   { id: 2, name: "Python", scope: 70 },
  //   { id: 3, name: "JavaScript", scope: 60 },
  //   { id: 4, name: "Mojo", scope: 90 },
  //   { id: 5, name: "Kotlin", scope: 10 },
  // ];
  let studentInfo = [
    { id: 187, name: "Sachin Soni", dept: "MCA" },
    { id: 188, name: "Saket", dept: "IT" },
    { id: 189, name: "Sakshi Singh", dept: "CS" },
    { id: 190, name: "Sakshi Rajput", dept: "ECE" },
  ];
  return (
    <div>
      {/* <h1>Welcome to ReactJS</h1>
      <h1>Id: {listinfo.id}</h1>
      <h1>Name: {listinfo.name}</h1>
      <h1>Class: {listinfo.class}</h1> */}
      {/* <h2>Welcome to list of languages:</h2> */}
      {/* <h1>{language}</h1> */}
      {/* Displaying array without return */}
      {/* <ul>
        {language.map((l,index) => (
          <li key={index}>
            <h4>{l}</h4>
          </li>
        ))}
      </ul> */}
      {/* Displaying Array */}
      {/* {
        language.map((value, index)=>{
          return <h1 key={index}>{index}.{value}</h1>
        })
      } */}
      {/* Displaying Array containing objects */}
      {/* {language.map((l) => {
        return (
          <li key={l.id}>
            {l.id}. Name: {l.name}. Scope: {l.scope}{" "}
          </li>
        );
      })} */}
      {studentInfo.map((value) => {
        return (
          <li key={value.id}>
            {value.id}. Name: {value.name} Department: {value.dept}{" "}
          </li>
        );
      })}
    </div>
  );
}
export default ListDisplay;
