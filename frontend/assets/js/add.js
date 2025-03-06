// add.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("addItemForm");
    const imageInput = document.getElementById("imageUpload");
    const previewImage = document.getElementById("previewImage");

    imageInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImage.src = e.target.result;
                previewImage.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
        const location = document.getElementById("location").value.trim();
        const date = document.getElementById("date").value.trim();

        if (!title || !description || !location || !date) {
            alert("กรุณากรอกข้อมูลให้ครบทุกช่อง!");
            return;
        }

        const formData = new FormData(form);
        fetch("backend/addItem.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("เพิ่มรายการสำเร็จ!");
                window.location.href = "home.html";
            } else {
                alert("เกิดข้อผิดพลาด: " + data.message);
            }
        })
        .catch(error => console.error("Error:", error));
    });
});