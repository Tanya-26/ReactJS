import Student from "./Student";

const Body = () => {
  return (
    <div>
      <h2>Student Information</h2>
      <Student id={1} name="Suraj" />
      <Student id={2} name="Akash" />
    </div>
  );
};

export default Body;
