import ITask from "../../../commons/interfaces/ITask";

export interface ITaskListState {
  tasks: ITask[];
}

export enum TaskListActionTypes {
  ADD_TASK = '@tasklist/ADD_TASK',
  COMPLETE_TASK = '@tasklist/COMPLETE_TASK',
}

export interface TaskListAction {
  type: TaskListActionTypes;
  payload: any;
}


