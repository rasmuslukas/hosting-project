import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Homepage } from "./pages/home/homepage";
import { DocsPage } from "./pages/docs/docspage";
import { Download } from "./pages/download/download";
import { Setup } from "./pages/setup/setup";
import { SetupSteps } from "./pages/setup/steps/setupSteps";
import { ErrorPage } from "./pages/error/errorPage";

export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact={true} path={"/"} element={<Homepage />} />
          <Route exact={true} path={"/setup"} element={<Setup />} />
          <Route
            exact={true}
            path={"/setup/:gameId"}
            element={<SetupSteps />}
          />
          <Route exact={true} path={"/documentation"} element={<DocsPage />} />
          <Route exact={true} path={"/download"} element={<Download />} />
          <Route exact={true} path={"/donate"} element={<ErrorPage />} />
          <Route exact={true} path={"/dashboard"} element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
