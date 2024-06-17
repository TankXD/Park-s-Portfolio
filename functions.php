<?php 
    function my_script_init(){
        wp_enqueue_style('mystyle', get_template_directory_uri() . '/css/style.css', array(), filemtime(get_theme_file_path('css/style.css')), 'all');
        
        
        wp_enqueue_script('commonscript', get_template_directory_uri() . '/js/common.js', array('jquery'), filemtime(get_theme_file_path('js/common.js')), true);

        // front-pageのみ読み込む
        if(is_front_page()){
            wp_enqueue_script('loadingscript', get_template_directory_uri() . '/js/loading.js', array('jquery'), filemtime(get_theme_file_path('js/loading.js')), true);
            wp_enqueue_script('scrollscript', get_template_directory_uri() . '/js/scroll.js' , array('jquery'), filemtime(get_theme_file_path('js/scroll.js')), true);
        }
        
        
        
    }
    add_action("wp_enqueue_scripts","my_script_init");
?>