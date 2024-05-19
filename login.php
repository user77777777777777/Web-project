<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["name"]) && isset($_POST["password"])) {
        $name = $_POST["name"];
        $password = $_POST["password"];

        // Kullanıcı adı ve şifre kontrolü
        $valid_names = ["b231210584@sakarya.edu.tr", "B231210584@sakarya.edu.tr"];
        $valid_password = "b231210584";

        // Kullanıcı adını küçük harfe dönüştürerek büyük/küçük harf duyarlılığını ortadan kaldır
        $name = strtolower($name);

        if (in_array($name, $valid_names) && $password === $valid_password) {
            // Başarılı giriş
            echo "Hoşgeldin " . $name . "<br>Girişin Onaylandı.";
        } else {
            // Hatalı giriş
            echo "Kullanıcı adı veya şifre hatalı";
        }
    } else {
        // Kullanıcı adı veya şifre yoksa
        echo "Kullanıcı adı veya şifre eksik";
    }
} else {
    // POST metodu kullanılmadıysa
    echo "Giriş sayfasından giriş yapınız.";
}
?>
