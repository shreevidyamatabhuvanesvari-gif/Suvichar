/* ======================================================
   card.js — SUWICHAR CARD ENGINE
   PURPOSE:
   - Multiple card styles
   - Background themes
   - Font control
   - Future: share / download
   ====================================================== */

(function(global){

  const themes = [
    {
      bg: "linear-gradient(135deg,#fff7e6,#e6f0ff)",
      color: "#111"
    },
    {
      bg: "linear-gradient(135deg,#e0ffe8,#ccf5ff)",
      color: "#003333"
    },
    {
      bg: "linear-gradient(135deg,#ffe0e0,#fff0cc)",
      color: "#5a0000"
    },
    {
      bg: "linear-gradient(135deg,#ede9fe,#ddd6fe)",
      color: "#2e1065"
    }
  ];

  let currentTheme = 0;

  function applyTheme(cardElement){
    const theme = themes[currentTheme];
    cardElement.style.background = theme.bg;
    cardElement.style.color = theme.color;
  }

  function nextTheme(cardElement){
    currentTheme++;
    if(currentTheme >= themes.length){
      currentTheme = 0;
    }
    applyTheme(cardElement);
  }

  function setFontSize(cardElement, size){
    cardElement.querySelector(".quote").style.fontSize = size + "px";
  }

  /* EXPORT */
  global.CardEngine = {
    applyTheme,
    nextTheme,
    setFontSize
  };

})(window);
