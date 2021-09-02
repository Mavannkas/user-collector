import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import styles from "./AddUser.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const AddUser = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      surname,
    };
    if (address.trim().length !== 0) {
      data.address = address;
    }

    fetch("http://localhost:3001/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then((res) => {
        if (res.ok === false) throw res;

        setResponse("Success");
        setName("");
        setSurname("");
        setAddress("");
      })
      .catch((res) => {
        setResponse("Failure");
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography align="center" variant="h2">
          Add User
        </Typography>
        <TextField
          label="First Name"
          variant="filled"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="filled"
          required
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <TextField
          label="Address"
          variant="filled"
          type="string"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div>
          <Button
            type="submit"
            align="center"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </div>
        <Typography variant="h5">{response}</Typography>
      </Box>
    </form>
  );
};
