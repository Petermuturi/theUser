import * as Const from '../utils/constants';

const addNumberReducer = (state=1, action)=> {
  switch (action.type) {
    case Const.ACTION_ADD_NUMBER:
      return state += action.number;
    default:
      return state;
  }
}

export default addNumberReducer;
