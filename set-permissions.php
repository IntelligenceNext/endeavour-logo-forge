
<?php
// This script sets the correct file permissions for the web server

// Function to recursively set permissions
function set_permissions($path, $dir_permissions = 0755, $file_permissions = 0644) {
    $items = scandir($path);
    
    foreach ($items as $item) {
        // Skip . and .. directories
        if ($item == '.' || $item == '..') {
            continue;
        }
        
        $full_path = $path . '/' . $item;
        
        if (is_dir($full_path)) {
            // Set directory permissions
            chmod($full_path, $dir_permissions);
            echo "Set directory permissions (755) for: " . $full_path . "<br>";
            
            // Recursively process subdirectories
            set_permissions($full_path, $dir_permissions, $file_permissions);
        } else {
            // Set file permissions
            chmod($full_path, $file_permissions);
            echo "Set file permissions (644) for: " . $full_path . "<br>";
        }
    }
}

// Set permissions for public_html directory
if (is_dir('public_html')) {
    chmod('public_html', 0755);
    echo "Set directory permissions (755) for: public_html<br>";
    set_permissions('public_html');
} else {
    echo "public_html directory not found!<br>";
}

// Set permissions for src directory (API files)
if (is_dir('src')) {
    chmod('src', 0755);
    echo "Set directory permissions (755) for: src<br>";
    set_permissions('src');
} else {
    echo "src directory not found!<br>";
}

echo "<br>Permission setting complete!";
?>
