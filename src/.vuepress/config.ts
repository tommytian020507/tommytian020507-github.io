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
      title: "博客演示",
      description: "淘米田的摄影博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
