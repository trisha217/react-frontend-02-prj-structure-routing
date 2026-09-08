import React from 'react';
import UsersList from '../components/UsersList';


const Users = () => {

  const USERS = [
    {
      id: 'u1',
      name: 'Max',
      image: "image.jpg",
      places: 3
    },
    {
      id: 'u2',
      name: 'Mike',
      image: "image.jpg",
      places: 5
    }
  ]
  return <UsersList items= {USERS}/>;
};

export default Users;
