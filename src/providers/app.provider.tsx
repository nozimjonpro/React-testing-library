import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseLine from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine></CssBaseLine>
      {children}
    </ThemeProvider>
  );
};
