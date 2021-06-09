import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Favoris from "./pages/Favoris";
import Market from "./pages/Market";
import Profil from "./pages/Profil";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/profil" component={Profil} />
          <Route path="/market" component={Market} />
          <Route path="/favoris" component={Favoris} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
