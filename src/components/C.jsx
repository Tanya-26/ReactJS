import { useContext } from 'react'
import { context } from './Home'

const C = () => {
  const {name,setName} = useContext(context)
  return (
    <div>
      Component C inside B
     <p>Name: {name}</p> 
     <button className='btn btn-success rounded' onClick={()=>{setName('MCA')}}>Change Name</button>
    </div>
  )
}

export default C
