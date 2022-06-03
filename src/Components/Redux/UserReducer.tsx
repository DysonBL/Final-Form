import { ActionType } from "./ActionType";

const initialState = {
  user: [],
};
export const UserReducer = (
  state = initialState,
  action: { type: any; data: any }
) => {
  
  switch (action.data) {
    case ActionType.GET_USER:
      console.log(action.data,"getuser")
      return {...state, userget: action.data };
    case ActionType.POST_USER:
      return { state, userpost: action.data };
    // case ActionType.PUT_USER:
    //   return state;
    // case ActionType.DELETE_USER:
    //   return state;
    default:
      return state;
  }
};
