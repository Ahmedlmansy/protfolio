import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MainLayout from "./layout/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<PageLoading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <Suspense fallback={<PageLoading />}>
                <ProjectDetails />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function PageLoading() {
  return (
    <div
      role="status"
      className="mx-auto flex min-h-[60vh] w-[min(100%-2rem,1200px)] items-center font-mono text-xs text-muted-foreground"
    >
      Loading portfolio…
    </div>
  );
}

export default App;
