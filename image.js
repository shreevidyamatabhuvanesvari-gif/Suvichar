/* ======================================================
   image.js — IMAGE PICKER CORE
   PURPOSE:
   - मोबाइल गैलरी से फोटो चुनना
   - चुनी गई फोटो को Card में दिखाना
   ====================================================== */

(function () {
  "use strict";

  const imageInput = document.getElementById("imageInput");
  const previewImg = document.getElementById("previewImg");

  if (!imageInput || !previewImg) {
    console.warn("imageInput या previewImg नहीं मिला");
    return;
  }

  imageInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
      previewImg.src = e.target.result;
      previewImg.style.display = "block";
    };

    reader.readAsDataURL(file);
  });

})();
