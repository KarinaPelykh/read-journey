import { Route, Routes } from "react-router-dom";
import { RegistrationPage } from "./pages/Registration/Registration";
import { LoginPage } from "./pages/Login/Login";
import { HomePage } from "./pages/Home/HomePage";
import { Layout } from "./components/Layout/Layout";
// import { MyLibrary } from "./pages/MyLibrary/MyLibrary";
// import { Recommended } from "./pages/Recommended/Recommended";
// import { Reading } from "./pages/Reading/Reading";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="reading " element={<MyLibrary />} />
          <Route path="library" element={<Recommended />} />
          <Route path="recommended" element={<Reading />} /> */}
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
