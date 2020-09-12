import React, { useState } from "react";
import { Route, Switch, Router } from "react-router-dom";
import ArtistListPage from "./components/artists/ArtistListPage";
import Header from "./components/Header";
import SideDrawer from "./components/UI/SideDrawer";
import styles from "./App.module.css";

function App() {
  let [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const toggleSideDrawer = () => setSideDrawerOpen(true);
  const navLinks = [{ link: "/artists", name: "Artists" }];

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
          <Route path="/">{landingPage}</Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
