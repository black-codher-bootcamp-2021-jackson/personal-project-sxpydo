import React, { useState, useEffect } from "react";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllUsers } from "../services/usersprofileService";

function UsersList() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function getUsers() {
      if (!users) {
        const response = await getAllUsers();
        setUsers(response);
      }
    }

    getUsers();
  }, [users]);

  const renderMember = (user) => {
    console.log(user)
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>{user.location}</p>
        <p>{user.mobile}</p>
        <p>{user.email}</p>
        <p>{user.options.join(", ")}</p>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {users && users.length > 0 ? (
          users.map((user) => renderMember(user))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}

export default UsersList;