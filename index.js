$(document).ready(function () {
  const fields = [
    { name: "skin", className: "skin-points" },
    { name: "location", className: "location-points" },
    { name: "ink", className: "ink-points" },
    { name: "layering", className: "layering-points" },
    { name: "scarring", className: "scarring-points" },
    { name: "colors", className: "colors-points" }
  ];

  function calculateTotal() {
    let total = 0;

    fields.forEach((field) => {
      const value = parseInt($(`input[name="${field.name}"]:checked`).val()) || 0;
      total += value;
      $(`.${field.className}`).text(`${value} puntos`);
    });

    $(".total-points").text(`${total} sesiones`);
  }

  // Ejecutar cada vez que se haga clic en una opción
  $('input[type="radio"]').on("change", calculateTotal);
});
