
export interface User {
    email: string;
    name: string;
    role: string;
  }
  
export interface State {
    users: User[];
}

export interface State {
    users: User[];
}

export interface Update {
    email: string;
    updates?: User;
  }

export interface Action {
    type: 'ADD_USER' | 'UPDATE_USER' | 'DELETE_USER'
    payload: User | Update;
}

export const usersReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload as User]
        };
      case 'UPDATE_USER':
        const { email, updates } = action.payload as Update;
        return {
          ...state,
          users: state.users.map((user) => {
            if (user.email === email) {
              return {
                ...user,
                ...updates
              };
            }
            return user;
          })
        };
      case 'DELETE_USER': {
        const { email } = action.payload;
        return {
          ...state,
          users: state.users.filter((user) => user.email !== email)
        };
      }
      default:
        return state;
    }
  };