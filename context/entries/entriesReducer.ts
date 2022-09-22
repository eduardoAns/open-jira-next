import { EntriesState } from './';


type EntriesActionType = 
| { type: 'Entries - ActionType' } 



export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case 'Entries - ActionType':
      return { ...state };
    default:
      return state;
  }
};