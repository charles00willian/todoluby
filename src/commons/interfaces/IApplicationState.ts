import { ITaskListState } from "../../store/modules/tasklist/types";

export default interface IApplicationState {
  tasklist: ITaskListState;
}