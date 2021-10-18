import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layout/main';
import Home from './pages/Home';

const App: FC = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path={'/'} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
