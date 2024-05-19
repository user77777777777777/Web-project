document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "8c2b761d0aa563feff1a42cbcd9d9d1f";
    const apiUrlBase = "https://api.themoviedb.org/3/search/tv?api_key=" + apiKey + "&query=";

    // HTML elementlerine referans alıyoruz
    const filmBaslik = document.getElementById("film-baslik");
    const filmAciklama = document.getElementById("film-aciklama");
    const filmAraBtn = document.getElementById("film-ara-btn");
    const filmAraInput = document.getElementById("film-ara-input");

    // Film arama butonuna tıklandığında
    filmAraBtn.addEventListener("click", function() {
        // Kullanıcının girdiği film adını al
        const filmAdi = filmAraInput.value.trim();

        // Film adı boşsa işlem yapma
        if (filmAdi === "") {
            alert("Lütfen bir film adı girin.");
            return;
        }

        // API sorgusu için URL oluştur
        const apiUrl = apiUrlBase + filmAdi;

        // API'den film bilgilerini al
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // İlk dizi sonucunu kullanacağız
                const film = data.results[0];

                // Eğer sonuç yoksa hata mesajı göster
                if (!film) {
                    alert("Aradığınız film bulunamadı.");
                    return;
                }

                // Film bilgilerini HTML'e yerleştir
                filmBaslik.textContent = film.name;
                filmAciklama.textContent = film.overview;
            })
            .catch(error => console.error("Hata:", error));
    });
});
