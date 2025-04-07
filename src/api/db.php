
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

// Create users table if it doesn't exist based on the provided schema
$sql = "CREATE TABLE IF NOT EXISTS users (
    ID bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    user_login varchar(60) NOT NULL DEFAULT '',
    user_pass varchar(255) NOT NULL DEFAULT '',
    user_nicename varchar(50) NOT NULL DEFAULT '',
    user_email varchar(100) NOT NULL DEFAULT '',
    user_url varchar(100) NOT NULL DEFAULT '',
    user_registered datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_activation_key varchar(255) NOT NULL DEFAULT '',
    user_status int(11) NOT NULL DEFAULT 0,
    display_name varchar(250) NOT NULL DEFAULT '',
    PRIMARY KEY (ID),
    KEY user_login_key (user_login),
    KEY user_email (user_email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

if (!$conn->query($sql)) {
    echo "Error creating table: " . $conn->error;
}
?>
