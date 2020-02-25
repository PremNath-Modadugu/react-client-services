import React from react;

const ClientAssetsTable = ({clientAssets}) => {
  return (
    <div>
      {
        clientAssets && (
          <table>
            <head>
              <tr>
                <th> Name </th>   
                <th> Age </th>
                <th> Date </th>                        
                <th> Time </th>
                <th> Region </th>
                <th> Message </th>
              </tr>
            </head>
            <body>
              {
                clientAssets.map(data => {
                  return (
                    <tr>
                      <td> {data.name} </td>                        <td> {data.age} </td>
                      <td> {data.date} </td>                        <td> {data.time} </td>
                      <td> {data.region} </td>
                      <td> {data.message} </td>
                    </tr>
                  )
                })
              }
            </body>
          </table>
        )
      }
    </div>
  )
} 

export default ClientAssetsTable;