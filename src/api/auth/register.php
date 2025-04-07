
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
$username = strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $name)); // Generate a username from name

// Add a number to make username unique if needed
$counter = 1;
$original_username = $username;
while (true) {
    $check_username = "SELECT * FROM users WHERE user_login = '$username'";
    $result = $conn->query($check_username);
    if ($result->num_rows == 0) {
        break;
    }
    $username = $original_username . $counter;
    $counter++;
}

// Check if email already exists
$check_email = "SELECT * FROM users WHERE user_email = '$email'";
$result = $conn->query($check_email);

if ($result->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Email already exists"]);
    exit();
}

// Generate nicename from name (URL-friendly version of the name)
$nicename = strtolower(preg_replace('/[^a-zA-Z0-9\-]/', '', str_replace(' ', '-', $name)));

// Current date time in MySQL format
$registered_date = date('Y-m-d H:i:s');

// Insert user using the new schema
$sql = "INSERT INTO users (
    user_login, 
    user_pass, 
    user_nicename, 
    user_email, 
    user_url, 
    user_registered, 
    user_activation_key, 
    user_status, 
    display_name
) VALUES (
    '$username', 
    '$password', 
    '$nicename', 
    '$email', 
    '', 
    '$registered_date', 
    '', 
    0, 
    '$name'
)";

if ($conn->query($sql)) {
    echo json_encode(["success" => true, "message" => "User registered successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

$conn->close();
?>
