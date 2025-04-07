
<?php
// Set headers for cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Include database connection
require_once '../db.php';

// Get input data
$data = json_decode(file_get_contents("php://input"));

// Check if required fields are provided
if (!isset($data->name) || !isset($data->email) || !isset($data->password)) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit();
}

// Sanitize input
$name = $conn->real_escape_string(trim($data->name));
$email = $conn->real_escape_string(trim($data->email));
$password = password_hash($data->password, PASSWORD_DEFAULT); // Hash the password

// Check if email already exists
$check_email = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($check_email);

if ($result->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Email already exists"]);
    exit();
}

// Insert user
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

if ($conn->query($sql)) {
    echo json_encode(["success" => true, "message" => "User registered successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

$conn->close();
?>
