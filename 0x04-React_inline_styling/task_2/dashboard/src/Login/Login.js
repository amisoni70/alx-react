import React from 'react';
import { StyleSheet, css } from "aphrodite";

function Login () {
    return (
       <>
       <div className={css(styles["App-body"])}>
       <p>Login to access the full dashboard</p>
       <label htmlFor="email">Email: </label>
       <input type="email" id="email" />
       <label htmlFor="password">Password: </label>
       <input type="password" id="password" />
       <button>OK</button>
       </div>
       </>
    );
}

const styles = StyleSheet.create({
    "App-body": {
        margin: "50px",
        paddingBottom: "20px"
    },
});

export default Login;