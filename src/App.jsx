import { BrowserRouter, Route, Routes } from "react-router";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import Home from "./pages/home";
import ServicesIndex from "./pages/services/index";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <BrowserRouter>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Services */}
            <Route path="services">
              <Route index element={<ServicesIndex />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
