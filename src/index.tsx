import React from "react";
import { createRoot } from "react-dom/client";
import App from "~/components/App/App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "~/theme";
import axios from "axios";

axios.interceptors.response.use(
  (response) => {
    console.log("response", JSON.stringify(response));
    return response;
  },
  (error) => {
    console.log("error", JSON.stringify(error));
    const responseStatus = error.response?.status;
    if (responseStatus === 400) {
      alert(error.response?.data.data);
    }
    if (responseStatus === 401 || responseStatus === 403) {
      alert(error.response?.data.message);
    }
    return Promise.reject(error.response);
  }
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: Infinity },
  },
});

if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser");
  worker.start({ onUnhandledRequest: "bypass" });
}

const container = document.getElementById("app");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

 {
  "message":"Network Error",
  "name":"AxiosError",
  "config":{
    "transitional":{
      "silentJSONParsing":true,
      "forcedJSONParsing":true,
      "clarifyTimeoutError":false},
      "transformRequest":[null],
      "transformResponse":[null],
      "timeout":0,
      "xsrfCookieName":"XSRF-TOKEN",
      "xsrfHeaderName":"X-XSRF-TOKEN",
      "maxContentLength":-1,
      "maxBodyLength":-1,
      "env":{"FormData":null},
      "headers":{"Accept":"application/json, text/plain, */*"},
      "method":"get",
      "url":"https://21de00mzo2.execute-api.us-east-1.amazonaws.com/prod/import",
      "params":{"name":"filill.csv"}},
      "code":"ERR_NETWORK",
      "status":null
    }