import B from './B.jsx'
const A = ({name}) => {
  return (
    <div>
      <h2>Component A inside Home</h2>
      {<B name={name}/>}
    </div>
  )
}

export default A
