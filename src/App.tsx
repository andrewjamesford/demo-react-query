import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { RouterProviderWrapper } from "./Router";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProviderWrapper />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
