<?php
$servername = "mysql-projected.alwaysdata.net";
$username = "projected_user";
$password = "MYP455!!BD";
$dbname = "projected_messages";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        echo "Message envoyé correctement!";
    } else {
        echo "Erreur : " . $stmt->error;
    }

    $stmt->close();
}
?>