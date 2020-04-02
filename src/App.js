import React from "react";
import Index from "./pages/Index";
import AuthContextProvider from "./contexts/AuthContext";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthContextProvider>
          <MainLayout>
            <Index />
          </MainLayout>
        </AuthContextProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
