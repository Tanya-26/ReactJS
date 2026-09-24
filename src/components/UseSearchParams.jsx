import { useSearchParams } from "react-router-dom";

const UseSearchParams = () => {
    const[searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('query') || " ";
    const handleSearchChange = (e) => {
        setSearchParams({query: e.target.value});
    }
  return (
    <div>
      Current Search : {searchTerm}
      <input type="text" onChange={handleSearchChange} />
    </div>
  )
}

export default UseSearchParams
