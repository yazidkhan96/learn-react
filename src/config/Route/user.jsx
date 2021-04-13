import { PeopleOutline } from "@material-ui/icons";

import UserList from "../../modules/users/pages/UserList";
import UserCreate from "../../modules/users/pages/UsersCreate";
import UserUpdate from "../../modules/users/pages/UsersUpdate";

const UserRouter = [
  {
    path: "/users",
    label: "User List",
    component: UserList,
    isMenu: true,
    icon: PeopleOutline
  },
  {
    path: "/users/create",
    label: "User create",
    component: UserCreate,
  },
  {
    path: "/users/:id",
    label: "User Update",
    component: UserUpdate,
  },
 
];

export default UserRouter;