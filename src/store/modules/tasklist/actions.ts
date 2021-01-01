import { TaskListActionTypes } from "./types";

export function addTask(description: string) {
  return {
    type: TaskListActionTypes.ADD_TASK,
    payload: {
      description,
    }
  };
}

export function doTask(id: string) {
  return {
    type: TaskListActionTypes.CHANGE_STATUS,
    payload: {
      id,
    }
  };
}
