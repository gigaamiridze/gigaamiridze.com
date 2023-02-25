import "styled-components";
import { Theme } from "../interfaces/theme";

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
