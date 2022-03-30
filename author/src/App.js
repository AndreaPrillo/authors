import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Update from "./components/Update";
import './App.css';
import AuthorForm from "./components/AuthorForm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<Main />} path="/author" default />
          <Route element={<AuthorForm />} path="/author/new"  />
          <Route element={<Update/>} path="/author/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
