// ===================================
// MINI PROJECT - FORM WORKSHOP
// ===================================

const form = document.getElementById("formWorkshop");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");

const jumlahKarakter = document.getElementById("jumlahKarakter");
const pesanForm = document.getElementById("pesanForm");
const infoSesi = document.getElementById("infoSesi");

const ringkasan = document.getElementById("ringkasan");


// PENGHITUNG KARAKTER
nama.addEventListener("input", function () {
    jumlahKarakter.textContent = nama.value.length;
});


// MENAMPILKAN SESI YANG DIPILIH
sesi.addEventListener("change", function () {
    if (sesi.value === "") {
        infoSesi.textContent = "Sesi belum dipilih.";
    } else {
        infoSesi.textContent = "Sesi yang dipilih: " + sesi.value;
    }
});


// VALIDASI FORM
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    pesanForm.className = "";
    ringkasan.hidden = true;

    if (namaValue.length < 3) {
        pesanForm.textContent =
            "Nama wajib diisi minimal 3 karakter.";
        pesanForm.classList.add("error");

    } else if (!polaEmail.test(emailValue)) {
        pesanForm.textContent =
            "Masukkan alamat email yang valid.";
        pesanForm.classList.add("error");

    } else if (sesi.value === "") {
        pesanForm.textContent =
            "Silakan pilih sesi workshop.";
        pesanForm.classList.add("error");

    } else {
        pesanForm.textContent =
            "Pendaftaran berhasil!";
        pesanForm.classList.add("sukses");

        document.getElementById("hasilNama").textContent = namaValue;
        document.getElementById("hasilEmail").textContent = emailValue;
        document.getElementById("hasilSesi").textContent = sesi.value;

        ringkasan.hidden = false;
    }
});


// TOMBOL RESET
form.addEventListener("reset", function () {
    pesanForm.textContent = "";
    pesanForm.className = "";

    ringkasan.hidden = true;

    jumlahKarakter.textContent = "0";
    infoSesi.textContent = "Sesi belum dipilih.";
});


// ===================================
// EKSPERIMEN 1 - TO-DO LIST
// MENAMBAH DAN MENGHAPUS TUGAS
// ===================================

const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {

    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");

    const tombolSelesai = document.createElement("button");
    const tombolHapus = document.createElement("button");

    label.textContent = teks + " ";

    // TOMBOL SELESAI
    tombolSelesai.type = "button";
    tombolSelesai.textContent = "Tandai selesai";

    tombolSelesai.addEventListener("click", function () {

        item.classList.toggle("selesai");

        tombolSelesai.textContent =
            item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    // TOMBOL HAPUS
    tombolHapus.type = "button";
    tombolHapus.textContent = "Hapus";

    tombolHapus.addEventListener("click", function () {
        item.remove();
    });

    item.append(label, tombolSelesai, tombolHapus);

    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas berhasil ditambahkan.";

    inputTugas.focus();
});


// ===================================
// EKSPERIMEN 4 - TOGGLE PARAGRAF
// ===================================

const tombolToggle = document.getElementById("tombolToggle");
const teksEksperimen = document.getElementById("teksEksperimen");

tombolToggle.addEventListener("click", function () {
    teksEksperimen.classList.toggle("sembunyi");
});