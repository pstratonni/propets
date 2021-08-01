import { CHANGE_TOKEN_VALID, SIGN_IN } from "../typeList";
import URL from "../url";

export const doSignIn = (data) => {
  return async () => {
    try {
      const response = await fetch(`${URL}/auth/signin`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        const json = await response.json();
        await localStorage.setItem("token", json.accessToken);
        await localStorage.setItem("userId", json.id);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const doSignUp = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/auth/signup`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        const json = await response.json();
        doSignIn({ email: data.email, password: data.password });
      }
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/users/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": localStorage.token,
        },
      });
      if (response.status === 200) {
        const json = await response.json();
        await dispatch(putUser(json));
      }
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const doSignOut = () => {
  return async (dispatch) => {
    try {
      await localStorage.removeItem("token");
      await localStorage.removeItem("userId");
      await dispatch({ type: CHANGE_TOKEN_VALID });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const updateUser = (data) => {
  return async (dispatch) => {
    const response = await fetch(`${URL}/users/${data.id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": localStorage.token,
      },
      body: JSON.stringify(data)
    });
    if(response.status===200){
      const json=await response.json()
      await dispatch(putUser(json))
    }
  };
};

const putUser = (data) => {
  return {
    type: SIGN_IN,
    payload: data,
  };
};
