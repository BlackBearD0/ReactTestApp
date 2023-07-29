import React from 'react'

const List = ({data, onDelete}) => {
  return (
    <div>
        <table>
            <th>
                <td>Id</td>
                <td>Atask</td>
                <td>Actions</td>
            </th>
            {
                data.map(task => 
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.name}</td>
                        <td>
                            <span>edit</span>
                            <span> </span>
                            <span onClick={() => onDelete(task.id)}>delete</span>
                        </td>
                    </tr>
                )
            }
        </table>
    </div>
  )
}

export default List