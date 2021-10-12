import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ListIcon from "@material-ui/icons/List";
import ScheduleIcon from "@material-ui/icons/Schedule";

const useStyles = makeStyles({
  root: {
    width: (prop) => prop.width,
    backgroundColor:''
  },
});



const LabelBottomNavigation = ({setNavData, windowDimensions}) => {
  const prop = { width: windowDimensions.width };
  const classes = useStyles(prop);
  const [value, setValue] = React.useState("recents");

  

  const handleChange = (event, newValue) => {
    setNavData(newValue);
    setValue(newValue);
    
  };


 

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction label="Todo" value="todo" icon={<ListIcon />} />
      <BottomNavigationAction
        label="Calender"
        value="calender"
        icon={<ScheduleIcon />}
      />
    </BottomNavigation>
  );
};

export default LabelBottomNavigation;
