import { Route, Routes } from "react-router-dom";
// import { RegistrationPage } from "./pages/Registration/Registration";

import { HomePage } from "./pages/Home/HomePage";
import { Layout } from "./components/Layout/Layout";
import { MyLibrary } from "./pages/MyLibrary/MyLibrary";
import { Recommended } from "./pages/Recommended/Recommended";
import { Reading } from "./pages/Reading/Reading";
// import { LoginPage } from "./pages/Login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} /> */}
          <Route path="reading" element={<Reading />} />
          <Route path="library" element={<MyLibrary />} />
          <Route path="recommended" element={<Recommended />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
