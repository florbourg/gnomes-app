import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";

export default function InteractiveList({ items, title }) {
  return (
    <List>
      {title}
      {items.map((item) => (
        <ListItem key={item}>
          <ListItemIcon>
            <ArrowRightAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
}

InteractiveList.propTypes = {
  items: PropTypes.object.isRequired,
  title: PropTypes.string,
};

InteractiveList.defaultProps = {
  item: {},
  title: "",
};
