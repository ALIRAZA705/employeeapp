import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./sagas";
import reducers from "./reducers";

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    let middlewares = [sagaMiddleware]; // [routeMiddleware];

    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares))
    );
    // const store = compose(
    //   applyMiddleware(sagaMiddleware),
    //   window.devToolsExtension && window.devToolsExtension()
    // )(createStore)(reducers);
    const logger = createLogger({});

    middlewares.push(logger);

    sagaMiddleware.run(rootSaga);

    if (module.hot) {
    // Enable Webpack hot module replacement for reducers
        module.hot.accept("./reducers/index", () => {
            const nextRootReducer = require("./reducers/index");
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
