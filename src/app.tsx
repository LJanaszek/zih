import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import { getHomeRoute, getGamePageRoute, getRulesRoute, getEntryRoute } from './routes/routes';
import React, { Suspense } from 'react';
import Loader from './components/elements/loader';
import { useEffect } from 'react';
import { CONFIG_MODULE_ACTION, useConfigModuleDispatch } from './modules/config';
import PuzzleTestPage from './components/task-widgets/puzzle';
import ButtonStyle from './button-style';
import ErrorMessege from './components/errorMessage';

const HomePage = React.lazy(() => import('./routes/home'));
const GamePage = React.lazy(() => import('./routes/game'));
const RulesPage = React.lazy(() => import('./routes/rules'));
const EntryPage = React.lazy(()=>import('./routes/entry'))

export default function App() {

    return (
        <>
            <ErrorMessege />
            <ButtonStyle />
            <BrowserRouter>
                {/* <CookiesInfo /> */}
                {/* {showHeader && <PageHeader />} */}
                <main aria-live="polite">
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path={getHomeRoute()} element={<HomePage />} />
                            <Route path={getGamePageRoute()} element={<GamePage />} />
                            <Route path={getRulesRoute()} element={<RulesPage />} />
                            <Route path={getEntryRoute()} element={<EntryPage />} />

                            <Route path={'/test/puzzle'} element={<PuzzleTestPage />} />

                            <Route path={'/debug-on'} element={<DebugOn />} />
                            <Route path={'/debug-off'} element={<DebugOff />} />
                            <Route element={<HomePage />} />
                        </Routes>
                    </Suspense>
                </main>
                {/* {showHeader} */}
            </BrowserRouter>
        </>
    )
}


function DebugOn() {
    const navigate = useNavigate();
    const dispatch = useConfigModuleDispatch();

    useEffect(() => {
        dispatch({
            type: CONFIG_MODULE_ACTION.SET_DEBUG,
            payload: true
        });

        navigate(getHomeRoute(), { replace: true });
    }, [navigate, dispatch]);

    return <></>
}


function DebugOff() {
    const navigate = useNavigate();
    const dispatch = useConfigModuleDispatch();

    useEffect(() => {
        dispatch({
            type: CONFIG_MODULE_ACTION.SET_DEBUG,
            payload: false
        });

        navigate(getHomeRoute(), { replace: true });
    }, [navigate, dispatch]);

    return <></>
}
