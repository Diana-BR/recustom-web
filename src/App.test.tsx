import React from 'react';
import { render, screen } from '@testing-library/react';
import UserData from '../src/components/UserData';
import { User, State, usersReducer } from './interfaces/user'


/*
test('renders learn react link', () => {
 const [state, dispatch] = useReducer(usersReducer, initialState);
   const [dataToEdit, setDataToEdit] = useState<User | undefined>(undefined);

 const handleEdit = (email: string) => {
    setDataToEdit(state.users.find((user) => user.email === email));
  };

  render(<UserData name='Diana' email='diana@correo.com' role='ADMIN' dispatch={dispatch} handleEdit={handleEdit}/>);
  const linkElement = screen.getByText('List of users');
  expect(linkElement).toBeInTheDocument();
});
*/
