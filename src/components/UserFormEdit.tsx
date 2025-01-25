import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Action, User } from '../interfaces/user';

interface UserformEditProps {
  dispatch: React.Dispatch<Action>;
  dataToEdit: User | undefined;
}

const UserformEdit: FC<UserformEditProps> = ({
  dispatch,
  dataToEdit
}) => {

    const [user, setUser] = useState({
        email: dataToEdit?.email ? dataToEdit.email : '',
        name: dataToEdit?.name ? dataToEdit.name : '',
        role: dataToEdit?.role ? dataToEdit.role : ''
    });

    const [errorMsg, setErrorMsg] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        setUser((prevState) => {
          return {
            ...prevState,
            [name]: value
          };
        });
    };

    const handleOnChangeRole = (event: SelectChangeEvent) => {
        setUser((prevState) => {
            return {
              ...prevState,
              ['role']: event.target.value
            };
          });
      };

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("handleOnSubmit");
        event.preventDefault();
        const { email, name, role } = user;
    
        if (
          email.trim() === '' ||
          name.trim() === '' ||
          role.trim() === ''
        ) {
          setErrorMsg('All the fields are required.');
          return;
        } 
    
        if (!dataToEdit) {
          dispatch({
            type: 'ADD_USER',
            payload: {
              ...user
            }
          });
          setUser({
            email: '',
            name: '',
            role: ''
          });
          setErrorMsg('');
        } else {
          dispatch({
            type: 'UPDATE_USER',
            payload: {
              email: dataToEdit.email,
              updates: {
                ...user
              }
            }
          });
        }
    };

    return (
        <form className='user-form' onSubmit={handleOnSubmit}>
            <Box>
                <Typography>E-mail</Typography>
                <TextField
                    className='email'
                    name='email'
                    value={user.email}
                    type='text'
                    style={{width: '15%'}}
                    onChange={handleOnChange}
                    disabled
                />
            </Box>
            <Box>
                <Typography>Name</Typography>
                <TextField
                    className='name'
                    name='name'
                    value={user.name}
                    type='text'
                    style={{width: '15%'}}
                    onChange={handleOnChange}
                />
            </Box>
            <Box>
                <Typography>Role</Typography>
                <Select
                    value={user.role}
                    onChange={handleOnChangeRole}
                    style={{width: '15%'}}
                >
                    <MenuItem value={'ADMIN'}>Admin</MenuItem>
                    <MenuItem value={'USER'}>User</MenuItem>
                </Select>
            </Box>
            <br></br>
            <Box>
                <Button variant='contained' type='submit' className='submit-btn'>
                    Update User
                </Button>
            </Box>
        </form>
    );
};

export default UserformEdit;