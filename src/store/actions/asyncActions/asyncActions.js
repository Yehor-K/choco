import { requestChocosSuccessful } from "../actionsProducts";
import { fetchChocos } from "../../services/fetchChocos";

export const requestChoco = () => {
  return (dispatch) => {
    fetchChocos().then((data) => {
      dispatch(requestChocosSuccessful(data));
    });
  };
};
