import * as Const from '../utils/constants';

export const setAddNumber = (number)=> {
  return {
    type: Const.ACTION_ADD_NUMBER,
    number,
  }
}
