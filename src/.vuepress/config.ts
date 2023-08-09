import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Discovering Beauty",
      description: "Tommy Tian's Photography Blog",
    },
    
    "/zh/": {
      lang: "zh-CN",
      title: "淘米田啥都拍",
      description: "淘米的照片墙",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
