import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import React from "react";
import ReactDOM from "react-dom/client";

import { ToastContainer } from "react-toastify";
import App from "./App";
import UserContextProvider from "./provider/userContextProvider";
import WeatherContextProvider from "./provider/weatherContextProvider";
import "./style/index.css";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <WeatherContextProvider>
          <App />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
          />
        </WeatherContextProvider>
      </UserContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
