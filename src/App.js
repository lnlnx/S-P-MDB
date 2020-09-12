import React, { useState } from "react";
import { Route, Switch, Router, useLocation, Redirect } from "react-router-dom";
import ArtistListPage from "./components/artists/ArtistListPage";
import Header from "./components/Header";
import SideDrawer from "./components/UI/SideDrawer";
import styles from "./App.module.css";

function App() {
  let [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  let location = useLocation();

  const toggleSideDrawer = () => setSideDrawerOpen(true);
  let navLinks = [
    { link: "/home", name: "Home", active: false },
    { link: "/artists", name: "Artists", active: false },
  ];
  for (let navLink of navLinks) {
    if (location.pathname.includes(navLink.link)) {
      navLink.active = true;
    }
  }

  const landingPage = <div className={styles.LandingPage}>Welcom to MDB!</div>;

  return (
    <div className={styles.App}>
      <Header onClick={toggleSideDrawer} />
      <SideDrawer
        open={sideDrawerOpen}
        onClose={() => setSideDrawerOpen(false)}
        links={navLinks}
      />
      <div className={styles.BodyContainer}>
        <Switch>
          <Route path="/artists" component={ArtistListPage} />
          <Route path="/home">{landingPage}</Route>
          <Route path="/">
            <Redirect
              to={{
                pathname: "/home",
                state: { from: location },
              }}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
