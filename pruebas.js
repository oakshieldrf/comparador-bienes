const botonesContainers = document.querySelectorAll('[id^="botonesContainer"]');

botonesContainers.forEach((container) => {
  const botones = container.querySelectorAll(".boton");

  botones.forEach((boton) => {
    boton.addEventListener("click", function () {
      const selectedBtns = container.querySelectorAll(".selected");

      if (selectedBtns.length === 1 && this.classList.contains("selected")) {
        this.classList.remove("selected");
      } else {
        selectedBtns.forEach((selectedBtn) => {
          selectedBtn.classList.remove("selected");
        });
        this.classList.add("selected");
      }

      const hayBotonSeleccionado = container.querySelector(".selected");
      if (hayBotonSeleccionado) {
        console.log("En el grupo", container.id, "se ha seleccionado un botón");
      } else {
        console.log("En el grupo", container.id, "ningún botón seleccionado");
      }
    });
  });
});
