function clearForm() {
    var formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = '<p>Terima kasih telah mengirim formulir!</p>';
}

function validateform(event) {
    let status = document.getElementById('status').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let birthdate = document.getElementById('birthdate').value;
    let alamat = document.getElementById('alamat').value;

    if (status === ""){
        alert("Status Harus Diisi.");
        return false;
    }


    if (name.trim() === "") {
        alert('Nama harus diisi.');
        return false; 
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Format email tidak valid.")
        return false;
    }

    let phonePattern = /^\d{12}$/;
    if (!phonePattern.test(phone)) {
        alert("Format nomor telepon harus 12 digit angka.");
        return false;
    }

    if (birthdate === "") {
        alert("Tanggal lahir harus diisi.");
        return false;
    }

    if (alamat.trim() === "") {
        alert('Alamat harus diisi.');
        return false;
    }

    alert("Form berhasil disubmit!");


    clearForm();

    event.preventDefault();

    return false;
}
