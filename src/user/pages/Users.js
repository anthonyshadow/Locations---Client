import React from "react";

import UsersList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Anthony Shadowitz",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
