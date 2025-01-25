import { useState, useReducer, useEffect } from 'react';
import Box from '@mui/material/Box';
import Header from './components/Header';
import UserForm from './components/UserForm'
import UserFormEdit from './components/UserFormEdit'
import { User, State, usersReducer } from './interfaces/user'

import './App.css';
import UserTable from './components/UserTable';

const initialState: State = {
  users: [
    {
      email: "diana@z.x",
      name: "Diana Resendiz",
      role: "ADMIN"
    },
    {
      email: "Andy@z.x",
      name: "Andrea Garcia",
      role: "USER"
    },
    {
      email: "Luis@z.x",
      name: "Luis Lopez",
      role: "USER"
    }
    ]
};

function App() {

  const [state, dispatch] = useReducer(usersReducer, initialState);
  const [dataToEdit, setDataToEdit] = useState<User | undefined>(undefined);

  const handleEdit = (email: string) => {
    setDataToEdit(state.users.find((user) => user.email === email));
  };

  return (
    <Box className="App">
      <Header />
      <Box>
        {state.users.length > 0 && (
          <UserTable
            users={state.users}
            handleEdit={handleEdit}
            dispatch={dispatch}
          />
        )}
        { !dataToEdit ?
          <UserForm
            dispatch={dispatch}
            dataToEdit={dataToEdit}
          />
          :
          <UserFormEdit
            dispatch={dispatch}
            dataToEdit={dataToEdit}
          />
        }
      </Box>
    </Box>
  );
}

export default App;