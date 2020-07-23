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