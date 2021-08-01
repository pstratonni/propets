import { FETCH_FOUND_PETS } from "../typeList";
import URL from "../url";

export const getFoundPets = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/lostfounds/found`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      dispatch(fetchFoundPets({ list: json }));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const fetchFoundPets = (obj) => {
  return {
    type: FETCH_FOUND_PETS,
    payload: obj,
  };
};

export const getFoundPetsById = (id) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${URL}/lostfounds/found/${id}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        dispatch(fetchFoundPets({ list: json }));
      } catch (e) {
        console.log(e.message);
      }
    };
  };