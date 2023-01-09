import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
		extend: {
			fontFamily: {
				sans: ["JetBrains Mono"],
				serif: ["JetBrains Mono"],
				mono: ["JetBrains Mono"],
				display: ["JetBrains Mono"],
				body: ["JetBrains Mono"],
			},
		},
    colors: {
      blue: colors.blue,
      black: colors.black,
      gray: colors.gray,
      green: colors.green,
      white: colors.white,
      yellow: colors.yellow,
      transparent: "transparent",
    },
  },
} as Options;
