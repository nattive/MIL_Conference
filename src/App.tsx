import { useState } from "react";
import AppRouter from "./router/Router.tsx";
import { ProgressTrackerContext } from "./components/context/ProgresTrackerContext.ts";
import { SideBarContext } from "./components/context/SidebarContext.tsx";

function App() {
  const [Open, setOpen] = useState(false);
  const [registerReady, setRegisterReady] = useState(false);
  const [completeDownload, setCompleteDownload] = useState(false);

  return (
    <>
      <ProgressTrackerContext.Provider
        value={{
          registerReady,
          completeDownload,
          setRegisterReady,
          setCompleteDownload,
        }}
      >
        <SideBarContext.Provider value={{ Open, setOpen }}>
          <AppRouter />
        </SideBarContext.Provider>
      </ProgressTrackerContext.Provider>
    </>
  );
}

export default App;
