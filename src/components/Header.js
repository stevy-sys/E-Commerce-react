import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
  },
});

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<HomeIcon />} aria-label="home" />
        <Tab icon={<FavoriteIcon />} aria-label="favorite" />
        <Tab icon={<SearchIcon />} aria-label="search" />
        <Tab icon={<PersonPinIcon />} aria-label="person" />
      </Tabs>
    </Paper>
  );
}
