import { TaskListActionTypes } from "./types";

export function addTask(description: string) {
  return {
    type: TaskListActionTypes.ADD_TASK,
    payload: {
      description,
    }
  };
}
