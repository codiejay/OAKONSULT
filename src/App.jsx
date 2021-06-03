import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
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
import { useEffect, useState } from "react";
import { auth } from "./firebase/config";
import { setAdmin } from "./redux/admin/actions";
import DashboardLayout from "./componentz/admin/DashboardLayout/Layout";
import { setUser } from "./redux/user/actions";
import { OnCreateUserProfileDocument } from "./firebase/auth";
import Spinner from "./componentz/Spinner/Spinner";
import Gallery from "./pages/admin/Gallery/Gallery";
import Quote from "./pages/admin/Quote/Quote";
import Draft from "./pages/admin/Draft/Draft";
import Event from "./pages/admin/Event/Event";

const App = () => {
  const admin = useSelector(({ user }) => user.admin);
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (pathname === "/oak-admin") {
        setLoading(true);
      }
      if (userAuth) {
        const userRef = await OnCreateUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          snapShot.data().role === "admin"
            ? dispatch(
                setAdmin({
                  id: snapShot.id,
                  ...snapShot.data(),
                })
              )
            : dispatch(
                setUser({
                  id: snapShot.id,
                  ...snapShot.data(),
                })
              );
          setLoading(false);
        });
      }
      setLoading(false);
    });
  }, []);
  return loading ? (
    <Spinner style={{ height: "100vh", width: "100vw" }} />
  ) : (
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
            <DashboardLayout>
              <Gallery />
            </DashboardLayout>
          )
        }
      />
      <Route
        path="/oak-admin/quotes"
        render={() =>
          !admin ? (
            <Redirect to={`/oak-admin-auth`} />
          ) : (
            <DashboardLayout>
              <Quote />
            </DashboardLayout>
          )
        }
      />
      <Route
        path="/oak-admin/events"
        render={() =>
          !admin ? (
            <Redirect to={`/oak-admin-auth`} />
          ) : (
            <DashboardLayout>
              <Event />
            </DashboardLayout>
          )
        }
      />
      <Route
        path="/oak-admin/draft"
        render={() =>
          !admin ? (
            <Redirect to={`/oak-admin-auth`} />
          ) : (
            <DashboardLayout>
              <Draft />
            </DashboardLayout>
          )
        }
      />
      <Route
        path="/oak-admin/trash"
        render={() =>
          !admin ? (
            <Redirect to={`/oak-admin-auth`} />
          ) : (
            <DashboardLayout>Trash</DashboardLayout>
          )
        }
      />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default App;
