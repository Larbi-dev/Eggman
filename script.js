let selectedProduct = "";

function openModal(product) {
  selectedProduct = product;
  document.getElementById("selected-item").innerText = "Ordering: " + product;
  document.getElementById("orderModal").style.display = "block";
}

function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const hostel = document.getElementById("hostel").value;
  const phone = document.getElementById("phone").value;

  const myNumber = "233551234567"; // CHANGE THIS
  const text = `*EGGMAN ORDER*%0A------------------%0A*Item:* ${selectedProduct}%0A*Cust:* ${name}%0A*Hostel:* ${hostel}%0A*Call:* ${phone}%0A------------------%0AConfirm?`;

  window.open(`https://wa.me/${myNumber}?text=${text}`, '_blank');
  closeModal();
});