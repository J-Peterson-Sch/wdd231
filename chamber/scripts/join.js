document.addEventListener("DOMContentLoaded", function() {
    var timestamp = new Date().toISOString();
    document.getElementById("timestamp").value = timestamp;
});

function openModal(type) {
    document.getElementById("modal-" + type).showModal();
}

function closeModal(type) {
    document.getElementById("modal-" + type).close();
}