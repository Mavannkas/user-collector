# How to run

Steps to run this project:

1. Run `git clone https://github.com/Mavannkas/user-collector.git`
2. Run `cd ./user-collector/backend`
3. Run `npm i` command
4. Run `npm start` command

# API

## **Get User Page**

Returns one page of users

- **URL**

  /:page

- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ users : [{ name: "Adam", surname: "Lorem", address: null }], page : 1, lastPage : 5 }`

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:** `{ error : "Error info", code: 400 }`

- **Sample Call:**

  ```javascript
  fetch("/1")
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.warn(res));
  ```

## **Get All users**

Returns all users

- **URL**

  /all

- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `[{ name: "Adam", surname: "Lorem", address: null }]`

- **Sample Call:**

  ```javascript
  fetch("/all")
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.warn(res));
  ```

## **Create user**

Create one user

- **URL**

  /

- **Method:**

  `POST`

- **Success Response:**

  - **Code:** 201 <br />
    **Content:** `{ ok: 1 }`

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:** `{ error : "Error info", code: 400 }`

    OR

  - **Code:** 422 Unprocessable Entity <br />
    **Content:** `{ "name": { "value": "XX", "msg": "Invalid value", "param": "name", "location": "body" }, "surname": { "value": "X", "msg": "Invalid value", "param": "surname", "location": "body" }, "address": { "value": "XA", "msg": "Invalid value", "param": "address", "location": "body" } }`

- **Sample Call:**

  ```javascript
  const req = {
    name: "Adam",
    surname: "Kielecki",
    address: "Os. Mickiewicza",
  };

  fetch("/", {
    method: "POST",
    body: JSON.stringify(req),
  })
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.warn(res));
  ```
