import { useState } from "react";
import AppRouter from "./router/Router.tsx";
import { ProgressTrackerContext } from "./components/context/ProgresTrackerContext.ts";
import { SideBarContext } from "./components/context/SidebarContext.tsx";
import { useMinisterCtx } from "./components/context/MinistersContext.ts";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [Open, setOpen] = useState(false);
  const [OpenMinisterModal, setOpenMinistersModal] = useState(false);
  const [registerReady, setRegisterReady] = useState(false);
  const [completeDownload, setCompleteDownload] = useState(false);
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ProgressTrackerContext.Provider
        value={{
          registerReady,
          completeDownload,
          setRegisterReady,
          setCompleteDownload,
        }}
      >
        <SideBarContext.Provider value={{ Open, setOpen }}>
          <useMinisterCtx.Provider
            value={{ OpenMinisterModal, setOpenMinistersModal }}
          >
            <AppRouter />
            <ToastContainer />
          </useMinisterCtx.Provider>
        </SideBarContext.Provider>
      </ProgressTrackerContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
