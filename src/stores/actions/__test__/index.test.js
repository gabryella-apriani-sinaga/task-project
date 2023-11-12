import {
  setLoading,
  setError,
  clearError,
  setToken,
  register,
  login,
  logout,
  SET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_TOKEN,
} from "./your-action-file";

describe("LoginPortal Actions", () => {
  it("should create an action to set loading", () => {
    const payload = true;
    const expectedAction = {
      type: SET_LOADING,
      payload,
    };
    expect(setLoading(payload)).toEqual(expectedAction);
  });

  it("should create an action to set error", () => {
    const payload = "Some error message";
    const expectedAction = {
      type: SET_ERROR,
      payload,
    };
    expect(setError(payload)).toEqual(expectedAction);
  });

  it("should create an action to clear error", () => {
    const expectedAction = {
      type: CLEAR_ERROR,
    };
    expect(clearError()).toEqual(expectedAction);
  });

  it("should create an action to set token", () => {
    const payload = "someTokenValue";
    const expectedAction = {
      type: SET_TOKEN,
      payload,
    };
    expect(setToken(payload)).toEqual(expectedAction);
  });
});
