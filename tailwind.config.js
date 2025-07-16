/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,css}"],
  theme: {
    extend: {
      colors: {
        // ... suas cores existentes ...
        // Cores com opacidade para os gradientes dos cards
        // Instagram
        "instagram-primary": "rgba(228, 64, 95, 0.4)", // #E4405F com 70% de opacidade
        "instagram-secondary": "rgba(131, 58, 180, 0.4)", // #833AB4 com 70% de opacidade
        // TikTok
        "tiktok-primary": "rgba(0, 0, 0, 0.4)", // #000000 com 70% de opacidade
        "tiktok-secondary": "rgba(255, 0, 80, 0.5)", // #FF0050 com 70% de opacidade
        // Telegram
        "telegram-primary": "rgba(0, 136, 204, 0.1)", // #0088CC com 70% de opacidade
        "telegram-secondary": "rgba(34, 158, 217, 0.1)", // #229ED9 com 70% de opacidade
        // Privacy
        "privacy-primary": "rgba(255, 107, 53, 0.6)", // #FF6B35 com 70% de opacidade
        "privacy-secondary": "rgba(247, 147, 30, 0.3)", // #F7931E com 70% de opacidade
        "privacy-icon-orange": "#F7931E",
      },
      backgroundImage: {
        // Gradientes para os backgrounds dos cards sociais
        "instagram-gradient-card":
          "linear-gradient(to bottom right, theme(colors.instagram-primary) 5%, theme(colors.instagram-secondary) 90%)",
        "tiktok-gradient-card":
          "linear-gradient(to bottom right, theme(colors.tiktok-primary) 75%, theme(colors.tiktok-secondary) 95%)",
        "telegram-gradient-card":
          "linear-gradient(to bottom right, theme(colors.telegram-primary) 80%, theme(colors.telegram-secondary) 90%)",
        "privacy-gradient-card":
          "linear-gradient(to bottom right, theme(colors.privacy-primary) 60%, theme(colors.privacy-secondary) 90%)",
      },
    },
  },
  plugins: [],
};
