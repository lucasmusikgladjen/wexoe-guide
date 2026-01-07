<?php
/**
 * Template Name: Blank Canvas
 * Template Post Type: page
 * 
 * En helt ren page template utan Enfolds CSS/JS.
 * Perfekt för landningssidor och custom-byggda sektioner.
 * 
 * Lägg denna fil i ditt child themes rotmapp.
 */

// Avregistrera Enfolds assets för denna template
add_action('wp_enqueue_scripts', function() {
    global $wp_styles, $wp_scripts;
    
    // Ta bort alla styles utom våra custom
    foreach ($wp_styles->registered as $handle => $style) {
        // Behåll styles som börjar med 'custom-'
        if (strpos($handle, 'custom-') !== 0) {
            wp_dequeue_style($handle);
            wp_deregister_style($handle);
        }
    }
    
    // Ta bort scripts, behåll jQuery och custom
    foreach ($wp_scripts->registered as $handle => $script) {
        if ($handle !== 'jquery' && $handle !== 'jquery-core' && $handle !== 'jquery-migrate') {
            if (strpos($handle, 'custom-') !== 0) {
                wp_dequeue_script($handle);
            }
        }
    }
    
    // Ladda vår CSS
    wp_enqueue_style(
        'custom-blank-canvas',
        get_stylesheet_directory_uri() . '/assets/css/blank-canvas.css',
        array(),
        filemtime(get_stylesheet_directory() . '/assets/css/blank-canvas.css')
    );
    
    // Ladda vår JS (om det finns)
    $js_file = get_stylesheet_directory() . '/assets/js/blank-canvas.js';
    if (file_exists($js_file)) {
        wp_enqueue_script(
            'custom-blank-canvas-js',
            get_stylesheet_directory_uri() . '/assets/js/blank-canvas.js',
            array('jquery'),
            filemtime($js_file),
            true
        );
    }
    
}, 9999);

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
    
    <?php wp_head(); ?>
</head>
<body <?php body_class('blank-canvas'); ?>>

<main class="blank-canvas-content">
    <?php 
    while (have_posts()) : the_post();
        the_content();
    endwhile; 
    ?>
</main>

<?php wp_footer(); ?>

</body>
</html>
