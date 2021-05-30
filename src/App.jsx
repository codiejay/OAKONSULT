import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Carers from "./pages/Carers/Carers";
import Churches from "./pages/Churches/Churches";
import TrainingAndResourcing from "./pages/TrainingAndResourcing/TrainingAndResourcing";
import PublicSpeaking from "./pages/PublicSpeaking/PublicSpeaking";
import Auth from "./pages/Auth/Auth";

import "./App.scss";
import Main from "./Components/Main";
import { useEffect } from "react";
import { auth } from "./firebase/config";
import { setAdmin } from "./redux/admin/actions";
import DashboardLayout from "./componentz/admin/DashboardLayout/Layout";

const App = () => {
  const admin = useSelector(({ user }) => user.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      console.log(auth);
      // if (userAuth) {
      //   const userRef = await createUserProfileDocument(userAuth);
      //   userRef.onSnapshot((snapShot) => {
      //       dispatch(setCurrentUser({
      //           id: snapShot.id,
      //           ...snapShot.data(),
      //         }))
      //   });
      // }
    });
  }, []);
  return (
    <Switch>
      <Route exact path={`/`} render={() => <HomePage />} />
      <Route
        exact
        path={`/carers`}
        render={() => (
          <Main>
            <Carers />
          </Main>
        )}
      />
      <Route
        exact
        path={`/churches`}
        render={() => (
          <Main>
            <Churches />
          </Main>
        )}
      />
      <Route
        exact
        path={`/training-and-resourcing`}
        render={() => (
          <Main>
            <TrainingAndResourcing />
          </Main>
        )}
      />
      <Route
        exact
        path={`/public-speaking`}
        render={() => (
          <Main>
            <PublicSpeaking />
          </Main>
        )}
      />
      <Route
        path={`/blogs`}
        render={() => (
          <Main>
            <Blog />
          </Main>
        )}
      />
      <Route
        exact
        path="/oak-admin-auth"
        render={() => (admin ? <Redirect to="/oak-admin" /> : <Auth />)}
      />
      <Route
        exact
        path="/oak-admin"
        render={() =>
          admin ? (
            <DashboardLayout>Home</DashboardLayout>
          ) : (
            <Redirect to="/oak-admin-auth" />
          )
        }
      />
      <Route
        path="/oak-admin/gallery"
        render={() =>
          !admin ? (
            <Redirect to={`/oak-admin-auth`} />
          ) : (
            <DashboardLayout>Gallery</DashboardLayout>
          )
        }
      />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default App;
