import {
  defineConfig,
  presetUno,
  presetWind,
  presetAttributify,
  transformerCompileClass,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetWind(), presetAttributify()],
  transformers: [transformerCompileClass(), transformerVariantGroup()],
  theme: {
    breakpoints: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
    },
    verticalBreakpoints: {
      sm: "360px",
      md: "720px",
      lg: "1080px",
    },
  },
  rules: [
    ["max-content", { width: "max-content" }],
    [
      /^bg-linear-\[(.+)\]$/,
      ([_, params]) => ({
        background: `linear-gradient(${params.replace(/\_/g, " ")})`,
      }),
    ],
  ],
});
