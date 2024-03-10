import { useState } from "react";
import AppRouter from "./router/Router.tsx";
import { ProgressTrackerContext } from "./components/context/ProgresTrackerContext.ts";

function App() {
  // const [Open, setOpen] = useState(false);
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
        <AppRouter />
      </ProgressTrackerContext.Provider>
    </>
  );
}

export default App;
