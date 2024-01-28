/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-dark-bg": "var(--primary-bg)",
        "theme-text-primary": "var(--theme-font-primary-color)",
        "theme-text-secondary": "var(--theme-font-secondary-color)",
        "theme-heading-primary": "var(--theme-font-heading-primary-color)",
        "theme-heading-secondary": "var(--theme-font-heading-secondary-color)",
      },

    },
    fontSize: {
      "xxs": ["var(--font-size-xxs)", "var(--line-height-xxs)"],
      "xs": ["var(--font-size-xs)", "var(--line-height-xs)"],
      "sm": ["var(--font-size-sm)", "var(--line-height-sm)"],
      "md": ["var(--font-size-md)", "var(--line-height-md)"],
      "lg": ["var(--font-size-lg)", "var(--line-height-lg)"],
      "xl": ["var(--font-size-xl)", "var(--line-height-xl)"],
      "2xl": ["var(--font-size-2xl)", "var(--line-height-2xl)"],
      "3xl": ["var(--font-size-3xl)", "var(--line-height-3xl)"],
      "4xl": ["var(--font-size-4xl)", "var(--line-height-4xl)"],
    },
    fontFamily: {
      'inter': ['inter-regular'],
      'mono': ['SF Mono','Fira Code','Fira Mono','Roboto Mono', "monospace"],
      'cursive': ['cursive']
    }
  },
  plugins: [],
}

