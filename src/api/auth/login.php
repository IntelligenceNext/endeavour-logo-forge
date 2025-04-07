
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
if (!isset($data->email) || !isset($data->password)) {
    echo json_encode(["success" => false, "message" => "Missing email or password"]);
    exit();
}

// Sanitize input
$email = $conn->real_escape_string(trim($data->email));

// Check if user exists
$sql = "SELECT * FROM users WHERE user_email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    // Verify password
    if (password_verify($data->password, $user['user_pass'])) {
        // Generate a simple token
        $token = bin2hex(random_bytes(32));
        
        // Remove password from user data
        unset($user['user_pass']);
        
        echo json_encode([
            "success" => true,
            "message" => "Login successful",
            "token" => $token,
            "user" => [
                "id" => $user['ID'],
                "name" => $user['display_name'],
                "email" => $user['user_email'],
                "username" => $user['user_login']
            ]
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid password"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "User not found"]);
}

$conn->close();
?>
