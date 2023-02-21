import "styled-components";
import { Theme } from "../theme/defaultTheme";

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
