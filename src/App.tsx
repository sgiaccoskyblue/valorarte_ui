import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Layout from './layout/main';
import { CASTING_ROUTE, HOME_ROUTE, PROFILE_ROUTE, LOGIN_ROUTE } from 'utils/routes';
import Casting from 'pages/Casting';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';

const App: FC = () => {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const firebase = getFirebase();

//     if (firebase) {
//       firebase.auth().onAuthStateChanged((authUser: any) => {
//         if (authUser) {
//           setCurrentUser(authUser.email);
//         } else {
//           setCurrentUser(null);
//         }
//       });
//     }
//   }, []);
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path={CASTING_ROUTE} component={Casting}></Route>
            <Route path={HOME_ROUTE} component={Home}></Route>
            <Route path={PROFILE_ROUTE} component={Profile}></Route>
            <Route path={LOGIN_ROUTE} component={LogIn}></Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
