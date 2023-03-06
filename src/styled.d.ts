// import original module declarations
import 'styled-components';
import { Theme } from "@mui/material";
import { } from 'styled-components/cssprop';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
  }
}