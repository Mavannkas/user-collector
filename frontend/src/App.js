import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { UserList } from "./components/list/UserList";
import { AddUser } from "./components/form/AddUser";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Tab" centered>
          <Tab label="User List" id="0" />
          <Tab label="Add User" id="1" />
        </Tabs>
      </AppBar>
      {+value === 0 && <UserList />}
      {+value === 1 && <AddUser />}
    </div>
  );
}
