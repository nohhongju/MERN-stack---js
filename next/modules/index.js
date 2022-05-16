import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import addArticle, { addArticleSaga } from './board/addArticle'
import { HYDRATE } from "next-redux-wrapper"

const rootReducer = combineReducers({
    index: (state = {}, action) => {
      switch (action.type) {
          case HYDRATE:
              console.log("HYDRATE", action);
              return { ...state, ...action.payload };
          default:
              return state;
      }
  },
  addArticle,
});

export function* rootSaga() {
  yield all([addArticleSaga()]);
}

export default rootReducer;