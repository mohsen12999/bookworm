import { TodoActionsTypes, Todo, CREATE_TODO_REQUEST } from "../types/types";

import {
  Message,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  ChatActionTypes,
} from "../types/types";

export function createTodo(todo: Todo): TodoActionsTypes {
  return {
    type: CREATE_TODO_REQUEST,
    payload: { todo },
  };
}

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  };
}
