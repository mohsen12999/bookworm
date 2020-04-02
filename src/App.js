import React from "react";
import Index from "./pages/Index";
import { AuthContext } from "./contexts/AuthContext";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <React.Fragment>
      <AuthContext.Provider>
        <MainLayout>
          <Index />
        </MainLayout>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
