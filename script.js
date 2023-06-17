function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  function changeColor(color) {
    var modalContent = document.querySelector(".modal-content");
    
    // Supprimer toutes les classes "selected-color" des options de couleur
    var colorOptions = document.querySelectorAll(".color-option");
    colorOptions.forEach(function(option) {
      option.classList.remove("selected-color");
    });
    
    // Appliquer la classe "selected-color" à l'option de couleur sélectionnée
    var selectedOption = document.querySelector(".color-option." + color);
    selectedOption.classList.add("selected-color");
    
    modalContent.style.backgroundColor = color;
  }
  
  function download() {
    var downloadBtn = document.getElementById("download-btn");
    downloadBtn.disabled = true;
    // Logique de téléchargement
    setTimeout(function() {
      downloadBtn.disabled = false;
    }, 2000); // Réactive le bouton après 2 secondes (simulation du téléchargement)
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  