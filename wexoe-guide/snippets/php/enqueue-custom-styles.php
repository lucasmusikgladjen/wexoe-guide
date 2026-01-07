<?php
/**
 * Enqueue Custom Styles & Scripts
 * 
 * Lägg detta i ditt child themes functions.php
 */

/**
 * Ladda custom CSS sist (efter Enfold)
 */
add_action('wp_enqueue_scripts', function() {
    
    // Custom CSS - laddas sist
    wp_enqueue_style(
        'custom-styles',
        get_stylesheet_directory_uri() . '/assets/css/custom.css',
        array(), // dependencies
        filemtime(get_stylesheet_directory() . '/assets/css/custom.css') // version = filens timestamp
    );
    
    // Custom JavaScript
    wp_enqueue_script(
        'custom-scripts',
        get_stylesheet_directory_uri() . '/assets/js/custom.js',
        array('jquery'), // dependencies
        filemtime(get_stylesheet_directory() . '/assets/js/custom.js'),
        true // i footer
    );
    
}, 9999); // Hög prioritet = körs sist


/**
 * Ladda olika CSS beroende på sidtyp
 */
add_action('wp_enqueue_scripts', function() {
    
    // Endast på specifika sidor
    if (is_page('landing-page')) {
        wp_enqueue_style(
            'landing-page-styles',
            get_stylesheet_directory_uri() . '/assets/css/landing-page.css',
            array(),
            filemtime(get_stylesheet_directory() . '/assets/css/landing-page.css')
        );
    }
    
    // Endast på Blank Canvas template
    if (is_page_template('blank-canvas.php')) {
        wp_enqueue_style(
            'blank-canvas-styles',
            get_stylesheet_directory_uri() . '/assets/css/blank.css',
            array(),
            filemtime(get_stylesheet_directory() . '/assets/css/blank.css')
        );
    }
    
}, 9999);


/**
 * Avregistrera Enfolds CSS på specifika templates
 */
add_action('wp_enqueue_scripts', function() {
    
    if (is_page_template('blank-canvas.php')) {
        // Vanliga Enfold style handles
        $enfold_handles = array(
            'avia-style',
            'avia-custom',
            'avia-merged-styles',
            'avia-head-scripts',
            'enfold-style'
        );
        
        foreach ($enfold_handles as $handle) {
            wp_dequeue_style($handle);
            wp_deregister_style($handle);
        }
    }
    
}, 9999);


/**
 * Lägg till inline CSS efter Enfold
 */
add_action('wp_head', function() {
    ?>
    <style id="custom-overrides">
        /* Kritiska overrides som måste komma sist */
        .custom-zone li::before {
            content: none !important;
            display: none !important;
        }
    </style>
    <?php
}, 9999);


/**
 * Lägg till JavaScript i footer
 */
add_action('wp_footer', function() {
    ?>
    <script>
        // Shadow DOM initializer
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.shadow-host').forEach(function(host) {
                var template = host.querySelector('template');
                if (template) {
                    var shadow = host.attachShadow({mode: 'open'});
                    shadow.innerHTML = template.innerHTML;
                }
            });
        });
    </script>
    <?php
}, 100);
