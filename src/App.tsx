import { QueryClient, QueryClientProvider } from "react-query";
import { starWarsTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import Home from "pages/Home/Home";
import "App.css";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={starWarsTheme}>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
