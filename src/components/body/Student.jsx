const Student = ({ id, name, sec, Dept }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{sec}</td>
      <td>{Dept}</td>
    </tr>
  )
}

export default Student
