import React from 'react';
import { useTable } from 'react-table';


const BoardsPage = () => {
    const data = React.useMemo(() => [{
       Board_ID : 1,
       Player_ID : 2,
       Game_ID : 3,
       Board_Name : Board1,
       Board_Model : Board2,
       Board_Location : Location1,
       Availbale : YES,
    },
    {
        Board_ID : 2,
        Player_ID : 102,
        Game_ID : 1033,
        Board_Name : Board2,
        Board_Model : Board3,
        Board_Location : Location2,
        Availbale : YES,
    },
],[]
);

const columns = React.useMemo(() => [{
    Header : 'Board ID',
    accessor : 'Board_ID',
    Header : 'Player ID',
    accessor : 'Player_ID',
    Header : 'Game ID',
    accessor : 'Game_ID',
    Haeder : 'Board Name',
    accessor : 'Board_Name',
    Header : 'Board Model',
    accessor : 'Board_Model',
    Header : 'Board Location',
    accessor : 'Board_Location',
    Header : 'Available',
    accessor : 'Available',
},], [] );

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
} = useTable ({ columns,data });

return (
    <div>
        <h2>Boards</h2>
        <table {...getTableProps()}style = {{ border: '1px solid black' }} > 
          <thead>
            {headerGroups.map(headerGroup => (
                <tr { ...headerGroup.headers.map(column => (
                    <th { ...column.getHeaderProps ()} style = {{ borderbottom : '1px solid black', background : 'aliceblue', fontWeight : 'bold', }} >
                        {column.render('Header')}
                    </th>
                )) } ></tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} > 
             {rows.map(row => {
                prepareRow(row);
                return(
                    <tr {...rowgetRowprops()} >
                        {rows.cells.map(cell => (
                            <td {...cell.getCellProps()} style = {{ padding : '10px', border : '1px solid black', background : 'white', }} >
                              {cell.render('Cell')}  
                            </td>
             ))}
                    </tr>
                )
             })}
          </tbody>
        </table>
    </div>
);
            };

export default BoardsPage;