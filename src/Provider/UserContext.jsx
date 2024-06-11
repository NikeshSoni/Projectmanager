import React from 'react';

export const UserContext = React.createContext({
  user: [],
  setUser: () => { } // Stub function to avoid null calls
});