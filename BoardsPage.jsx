import React, { useState } from "react";
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@mui/material';

 function BoardsPage () {
         // State to store boards data
    const [ boards,setBoards ] = useState([]);
         // fetch boards data and update the state
    const fetchBoardsData = () => {
        // Fetch boards data from your API using appropriate functions
    const boardsData = getAllBoards (); 
         // Implement this function in your API file
    setBoards(boardsData);
    };
        // Call fetchBoardsData when the component mounts
    useEffect(() => {
        fetchBoardsData();
    }, []);

    return (
        <div>
            <h2>Boards Page</h2>

            { boards.length > 0 ? (
              <TableContainer component = { Paperr }>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Player ID</TableCell>
                            <TableCell>Board ID</TableCell>
                            <TableCell>Game ID</TableCell>
                            <TableCell>Board Name</TableCell>
                            <TableCell>Board Model</TableCell>
                            <TableCell>Is Available</TableCell>
                            <TableCell>Board Location</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { boards.map((board) => (
                        <TableRow key={board.boardId}>
                            <TableCell>{ board.playerId }</TableCell>
                            <TableCell>{ board.boardId }</TableCell>
                            <TableCell>{ board.gameId }</TableCell>
                            <TableCell>{ board.boardName }</TableCell>
                            <TableCell>{ board.boardModel }</TableCell>
                            <TableCell>{ board.IsAvailable ? 'Yes' : 'No' }</TableCell>
                            <TableCell>{ board.boardLocation }</TableCell>  
                        </TableRow> 
                        ))}
                    </TableBody> 
                </Table>
              </TableContainer>
            ) : (
          <p>No boards Available</p>
            )}
        </div>
    )
 }

 export default BoardsPage;
