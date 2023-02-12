import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa"],
        mono: ["JetBrains Mono"],
      },
    },
    colors: { ...colors, transparent: "transparent" },
  },
} as Options;
