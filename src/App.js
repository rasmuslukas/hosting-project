import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Homepage } from "./pages/home/homepage";
import { DocsPage } from "./pages/docs/docspage";
import { Download } from "./pages/download/download";
import { SetupSteps } from "./pages/setup/steps/setupSteps";
import {BetaDevPage} from "./pages/beta/dev/betaDevPage";
import {Setup} from "./pages/setup/setup";

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
          <Route exact={true} path={"/donate"} element={<BetaDevPage />} />
          <Route exact={true} path={"/dashboard"} element={<BetaDevPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
