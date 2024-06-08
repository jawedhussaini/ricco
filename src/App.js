
import { Routes, Route, Navigate, Outlet, } from "react-router-dom";

import Tables from "./pages/Tables";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import { getToken } from "./utill/helpers";

const PrivateRoutes = () => {
  let auth = getToken();
  return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            path="/"
            element={<PrivateRoutes />}
          >
            <Route element={<Main><Outlet /></Main>}>
              <Route path="/" element={<Tables />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="*" element={<Tables/>}/>
            </Route>
          </Route>
        </Routes>
      
    </div>
  );
}

export default App;