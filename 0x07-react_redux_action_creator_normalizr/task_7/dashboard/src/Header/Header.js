import React, { useContext } from 'react';
import holberton_logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

function Header () {
  const { user, logOut } = useContext(AppContext);
    return (
        <>
        <div className={css(styles.appHeader)}>
           <img src={holberton_logo} alt="logo" className={css(styles.appHeaderImg)} />
           <h1 className={css(styles.h1)}>School dashboard</h1>      
        </div>

        {user.isLoggedIn && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome<strong> {user.email} </strong>
          <em>
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </em>
        </section>
      )}
        </>
    );
}

const styles = StyleSheet.create({
  appHeader: {
    display: "flex",
    alignItems: "center",
    color: "var(--color-brand)",
    fontSize: "20px",
    borderBottom: "3px solid var(--color-brand)",
  },

  h1: {
    fontFamily: "Tahoma",
  },

  appHeaderImg: {
    width: "200px",
  },

  greeting: {
    marginTop: "1rem",
  },
  
});

export default Header;
