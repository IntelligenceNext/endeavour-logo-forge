
<?php
// Database configuration
$host = 'auth-db1873.hstgr.io';
$username = 'u206841868_endeavours';
$password = 'Nine@248688944';
$database = 'u206841868_endeavour';

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create users table if it doesn't exist
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
)";

if (!$conn->query($sql)) {
    echo "Error creating table: " . $conn->error;
}
?>
