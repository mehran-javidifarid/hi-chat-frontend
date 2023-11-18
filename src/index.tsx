import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import configureStore from './configureStore';
import 'typeface-ibm-plex-sans';
import 'react-toastify/dist/ReactToastify.css';
import "./assets/css/index.css";
import {CacheProvider} from '@emotion/react';
import {prefixer} from 'stylis';
import {ConnectedRouter} from "connected-react-router";
import createCache from '@emotion/cache';
import CustomTheme from "./configTheme";
import Routes from './routes';
import reportWebVitals from "./reportWebVitals";

const history = createBrowserHistory();
// @ts-ignore
const initialState = window.INITIAL_REDUX_STATE;
export const store = configureStore(history, initialState);

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer],
});

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <CacheProvider value={cacheRtl}>
                <CustomTheme>
                    <ConnectedRouter history={history}>
                        <Routes/>
                    </ConnectedRouter>
                </CustomTheme>
            </CacheProvider>
        </Provider>
    </React.Fragment>,
    document.getElementById('root'),
);

reportWebVitals();
serviceWorkerRegistration.register();