import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "Tommy Tian's Photography Blog",
    },
    
    "/zh/": {
      lang: "zh-CN",
      title: " ",
      description: " ",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
