import {
  TodoState,
  TodoActionsTypes,
  CREATE_TODO_REQUEST,
} from "../types/types";

const initialState: TodoState = {
  data: [],
};

export default function todoReducer(
  state = initialState,
  action: TodoActionsTypes
): TodoState {
  switch (action.type) {
    case CREATE_TODO_REQUEST:
      return {
        data: [...state.data, action.payload.todo],
      };

    default:
      return state;
  }
}
