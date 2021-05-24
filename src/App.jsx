import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Carers from "./pages/Carers/Carers";
import Churches from "./pages/Churches/Churches";
import TrainingAndResourcing from "./pages/TrainingAndResourcing/TrainingAndResourcing";
import PublicSpeaking from "./pages/PublicSpeaking/PublicSpeaking";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/admin/dashboard/dashboard";

import "./App.scss";

const App = () => {
  const admin = useSelector(({ user }) => user.admin);
  return (
    <Switch>
      <Route exact path={`/`} component={HomePage} />
      <Route exact path={`/carers`} component={Carers} />
      <Route exact path={`/churches`} component={Churches} />
      <Route
        exact
        path={`/training-and-resourcing`}
        component={TrainingAndResourcing}
      />
      <Route exact path={`/public-speaking`} component={PublicSpeaking} />
      <Route path={`/blogs`} component={Blog} />
      <Route
        exact
        path="/oak-admin-auth"
        render={() => (admin ? <Redirect to="/oak-admin" /> : <Auth />)}
      />
      <Route
        exact
        path="/oak-admin"
        render={() =>
          admin ? <Dashboard /> : <Redirect to="/oak-admin-auth" />
        }
      />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default App;
