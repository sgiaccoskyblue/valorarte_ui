import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './layout/main';
import { CASTING_ROUTE, HOME_ROUTE } from 'utils/routes';
import Casting from 'pages/Casting';

const App: FC = () => {
    return (
        <>
            <Router>
                <Layout>
                    <Switch>
                        <Route path={CASTING_ROUTE} component={Casting}></Route>
                        <Route path={HOME_ROUTE} component={Home}></Route>
                    </Switch>
                </Layout>
            </Router>
        </>
    );
};

export default App;
