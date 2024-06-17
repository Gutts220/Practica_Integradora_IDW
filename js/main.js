document.addEventListener('DOMContentLoaded', function () {
    const marcaBtn = document.querySelector('.marca-btn');
    const containerItems = document.querySelector('.container-items');

    marcaBtn.addEventListener('click', function () {
        containerItems.classList.toggle('active');
    });
});