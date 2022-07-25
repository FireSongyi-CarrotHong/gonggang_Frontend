import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import test from './slices/counter';

const reducer = (
  state: CombinedState<{ test: { value: number } }>,
  action: AnyAction,
) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      return combineReducers({
        test,
      })(state, action);
  }
};

export default reducer;
