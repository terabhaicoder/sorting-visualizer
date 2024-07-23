import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        system: {
          purple10: "#250f48",
          purple15: "#31135e",
          purple20: "#4b1c88",
          purple30: "#6928bf",
          purple40: "#8536f5",
          purple50: "#a454f9",
          purple60: "#b773fb",
          purple65: "#c184fd",
          purple70: "#cc96ff",
          purple80: "#dbb5ff",
          purple90: "#eadaff",
          purple95: "#f5edff",

          green10: "#0a2b1b",
          green15: "#0d3a20",
          green20: "#135429",
          green30: "#197031",
          green40: "#1e8d38",
          green50: "#25a63d",
          green60: "#2fcf45",
          green65: "#39d74d",
          green70: "#42df55",
          green80: "#6eef8b",
          green90: "#9fffc3",
          green95: "#d0ffec",
          green100: "#27b13f",
        },
      },
    },
  },
  plugins: [],
};

export default config;
