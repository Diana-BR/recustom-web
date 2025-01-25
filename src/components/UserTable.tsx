import { FC } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Action, User } from '../interfaces/user';
import UserData from './UserData';

interface UserTableProps {
  users: User[];
  handleEdit: (email: string) => void;
  dispatch: React.Dispatch<Action>;
}

const UserTable: FC<UserTableProps> = ({
  users,
  handleEdit,
  dispatch
}) => {
  return (
    <Box className='users-list'>
      <h3 className='users-list-title'>List of users</h3>
      <Box className='users-list-table-container'>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 60 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">E-MAIL</TableCell>
                <TableCell align="center">NAME</TableCell>
                <TableCell align="center">ROLE</TableCell>
                <TableCell align="center">ACTIONS</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {users.map((user) => (
                <UserData
                key={user.email}
                {...user}
                handleEdit={handleEdit}
                dispatch={dispatch}
              />
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default UserTable;
