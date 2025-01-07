import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  colorSchemes,
  typography,
  shadows,
  shape,
} from "../utils/mui_theme_customizations/themePrimitives";
import { navigationCustomizations } from "../utils/mui_theme_customizations/navigation";
// import { inputsCustomizations } from "../utils/mui_theme_customizations/inputs";
import { feedbackCustomizations } from "../utils/mui_theme_customizations/feedback";
import { dataDisplayCustomizations } from "../utils/mui_theme_customizations/dataDisplay";
import { surfacesCustomizations } from "../utils/mui_theme_customizations/surfaces";

const theme = createTheme({
  colorSchemes,
  typography,
  shadows,
  shape,
  components: {
    ...navigationCustomizations,
    // ...inputsCustomizations,
    ...feedbackCustomizations,
    ...dataDisplayCustomizations,
    ...surfacesCustomizations,
  },
});

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
