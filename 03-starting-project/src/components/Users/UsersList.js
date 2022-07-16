import React from "react";
import Card from "../UI/Card";

import classes from "./UsersList.module.css";

function UsersList(props) {
  return (
    // Users is an array of user object
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li> // each objects has a name and age property
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
