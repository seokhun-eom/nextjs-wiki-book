import "styled-components";
import { theme } from "@/themes";

type Theme = typeof theme;

declare module "styled-components" {
  export type DefaultTheme = Theme;
}
