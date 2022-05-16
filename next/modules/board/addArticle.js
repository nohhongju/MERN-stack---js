import {createAction, handleActions} from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import { HYDRATE } from "next-redux-wrapper"
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    isAddArticled: false
}

const ADDARTICLE_REQUEST = 'board/ADDARTICLE_REQUEST';
const ADDARTICLE_SUCCESS = 'board/ADDARTICLE_SUCCESS';
const ADDARTICLE_FAILURE = 'board/ADDARTICLE_FAILURE';


export const addArticleRequest = createAction(ADDARTICLE_REQUEST, data => data)

export function* addArticleSaga() {
    yield takeLatest(ADDARTICLE_REQUEST, write);
}
function* write(action) {
    try {
        const response = yield call(addArticleAPI, action.payload)
        console.log(" 게시글 작성 서버다녀옴: " + JSON.stringify(response.data))
        yield put({type: ADDARTICLE_SUCCESS, payload: response.data})
        yield put(window.location.href= "/board/getArticle")
    } catch (error) {
        yield put({type: ADDARTICLE_FAILURE, payload: error.message})
    }
}
const addArticleAPI = payload => axios.post(
    `${SERVER}/board/write`,
    payload,
    {headers}
    )

const addArticle = handleActions({
    [HYDRATE] : (state, action) => ({
        ...state, ...action.payload
    })
}, initialState)

export default addArticle

