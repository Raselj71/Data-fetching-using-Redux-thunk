import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../Constant/Constants";

const initialState = {
  isLoading: false,
  todos: [],
  error: null,
};

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
        error: null,
      };
    case GET_TODOS_FAILED:
      return {
        isLoading: false,
        todos: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default TodosReducer;
