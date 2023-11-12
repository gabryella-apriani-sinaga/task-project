// loginPortal Actions
// --------------------------------------------------------

import {
  loginServiceUser,
  registerServiceUser,
} from "../../utils/api/userService";

// Define action types
export const SET_LOADING = "register/SET_LOADING";
export const SET_ERROR = "register/SET_ERROR";
export const CLEAR_ERROR = "regsiter/CLEAR_ERROR";
export const SET_TOKEN = "register/SET_TOKEN";

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const setToken = (payload) => ({
  type: SET_TOKEN,
  payload,
});

export const register =
  (email, password, handlingError, navigate) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(clearError());
      const response = await registerServiceUser({ email, password });
      console.log(response);
      const { status, data } = response;
      if (status === 200) {
        const { token } = data;
        localStorage.setItem("email", email);
        localStorage.setItem("dataUser", JSON.stringify(data));
        navigate("/homepage");
        dispatch(setToken(token));
      }
    } catch (error) {
      console.error("ERR ", handlingError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const login =
  (email, password, handlingError, navigate) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(clearError());
      const response = await loginServiceUser({ email, password });
      console.log(response);
      const { status, data } = response;
      if (status === 200) {
        const { token } = data;
        localStorage.setItem("dataUser", JSON.stringify(data));
        dispatch(setToken(token));
        navigate("homepage");
        console.log("CobaCoba");
      }
    } catch (error) {
      console.error("ERR ", handlingError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const logout = () => {
  localStorage.removeItem("dataUser");
};
