import { Route, BrowserRouter as Router, Routes } from "react-router";

import Layout from "./Layout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import Feedback from "./pages/Feedback";
import About from "./pages/About";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/map" element={<Map />} />

          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
