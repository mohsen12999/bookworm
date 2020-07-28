export interface Todo {
  id: number;
  description: string;
  checked: boolean;
}

export interface TodoState {
  data: Todo[];
}

export const CREATE_TODO_REQUEST = "@todo/CREATE_TODO_REQUEST";

interface CreateTodoRequest {
  type: typeof CREATE_TODO_REQUEST;
  payload: { todo: Todo };
}

export type TodoActionsTypes = CreateTodoRequest;

//-----------------------------------------
export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export const SEND_MESSAGE = "SEND_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction;
