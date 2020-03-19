import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
// safety net so that we do not accidently mutate the state.
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  // add support to the dev tools for redux
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
