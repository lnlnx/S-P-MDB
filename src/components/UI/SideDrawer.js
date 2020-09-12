import React, { Fragment } from "react";
import styles from "./SideDrawer.module.css";
import Backdrop from "./Backdrop/Backdrop";
import NavigationItem from "../UI/NavigationItems/NavigationItem";

const SideDrawer = ({ open, links, onClose }) => {
  const attachedClasses = open
    ? [styles.SideDrawer, styles.Open]
    : [styles.SideDrawer, styles.Close];

  const navigationLinks = links.map(({ link, name, active }) => (
    <NavigationItem link={link} active={active}>
      {name}
    </NavigationItem>
  ));

  return (
    <Fragment>
      <Backdrop show={open} clicked={onClose} />
      <div className={attachedClasses.join(" ")}>
        <nav>
          <ul className={styles.NavigationItems}>{navigationLinks}</ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
