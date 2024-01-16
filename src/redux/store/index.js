import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favourites'
import jobsReducer from '../reducers/jobs'

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  jobs: jobsReducer
})

const store = configureStore({
  reducer: bigReducer,
})

export default store;
