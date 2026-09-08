import React from 'react';
import UsersList from '../components/UsersList';  // path relative to Users.js


const Users = () => {

  const USERS = [
    {
      id: 'u1',
      name: 'Max',
      image: "image1.jpg",
      places: 3
    },
    {
      id: 'u2',
      name: 'Mike',
      image: "image2.jpg",
      places: 5
    }
  ]
  return <UsersList items= {USERS}/>;
};

export default Users;
