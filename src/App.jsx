import { Routes, Route } from "react-router-dom";
import {
  Footer,
  Header,
  PrivateRoute,
  RestrictedRoute,
  ScrollToTop,
} from "./components";
import { Auth, Home, Page404, User } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MockAPI from "./Mockman";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { verify } from "./redux/reducers/authSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verify());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />

      <ScrollToTop />
      <Routes>
        <Route element={<RestrictedRoute />}>
          <Route path="/" element={<Auth />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Route>

        <Route path="/mockman" element={<MockAPI />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer
        theme="colored"
        autoClose={1500}
        position={"top-right"}
        className={"toast-container"}
      />
      <Footer />
    </>
  );
}

export default App;
