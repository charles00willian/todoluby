import { ITaskListState, TaskListAction, TaskListActionTypes } from "./types";
import { v4 as uuid } from 'uuid';

const initialState: ITaskListState = { 
  tasks: [],
}

function reducers(
  state = initialState, 
  action: TaskListAction
) {
    switch(action.type) {
        case TaskListActionTypes.ADD_TASK: {
          const { description } = action.payload;
          const { tasks } = state;

          tasks.push({
            description,
            id: uuid(),
            done: false,
            createdDate: new Date(),
          })

          return { ...state, tasks }
        }
         
        case TaskListActionTypes.COMPLETE_TASK:  {
          const { id } = action.payload;
          const { tasks } = state;
          
          const index = tasks.findIndex(task => task.id === id);

          if(index >= 0) {
            tasks[index].done = true;
          }

          return { ...state, tasks }
        }

        default:
            return state;
    }
}

export default reducers;