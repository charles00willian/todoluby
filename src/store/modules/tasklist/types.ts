import ITask from "../../../commons/interfaces/ITask";

export interface ITaskListState {
  tasks: ITask[];
}

export enum TaskListActionTypes {
  ADD_TASK = '@tasklist/ADD_TASK',
  CHANGE_STATUS = '@tasklist/CHANGE_STATUS',
}

export interface TaskListAction {
  type: TaskListActionTypes;
  payload: any;
}


