import { ActionType } from "./ActionType";

const initialState = {
  user: [],
};
export const UserReducer = (
  state = initialState,
  action: { type: string; data: String|Number }
) => {
  
  switch (action.type) {
    case ActionType.GET_USER:
      return {...state, user: action.data };

    case ActionType.POST_USER:
      return { state, user: action.data };

    case ActionType.PUT_USER:
      return {...state.user.filter((useredit)=>useredit !==action.data)};

    case ActionType.DELETE_USER:
      return {...state.user.filter((userdel)=>userdel !==action.data)};
    default:
      return state;
  }
};
