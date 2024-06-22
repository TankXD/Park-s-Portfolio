<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PARK's Web Portfolio</title>
    <!-- meta -->
    <meta name="description" content="パクのウェブポートフォリオサイト || Wordpressで制作">
    <meta name="keywords" content="ポートフォリオ,ポートフォリオサイト,ウェブ制作,コーダー,フロントエンド,ウェブデザイン">
    <!-- OGP -->
    <meta property="og:title" content="PARK's Web Portfolio">
    <meta property="og:description" content="パクのウェブポートフォリオサイト, Wordpressで制作">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://park-xd.com/">
    <meta property="og:locale" content="ja_JP">
    <meta property="og:site_name" content="PARK's Web Portfolio">
    <meta property="og:image" content="<?php echo get_template_directory_uri() .'/img/ogp/ogp.png'?>">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">



    <meta name="author" content="PARK SUNG CHAN">
    <link rel="apple-touch-icon" sizes="180x180"
        href="<?php echo get_template_directory_uri() .'/img/favicon/apple-touch-icon.png'?>">
    <link rel="icon" type="image/png" sizes="32x32"
        href="<?php echo get_template_directory_uri() .'/img/favicon/favicon-32x32.png'?>">
    <link rel="icon" type="image/png" sizes="16x16"
        href="<?php echo get_template_directory_uri() .'/img/favicon/favicon-16x16.png'?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+JP:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rampart+One&display=swap"
        as="style" onload="this.onload=null;this.rel='stylesheet'">

    <?php wp_head();?>
</head>

<body>

    <div class="p-cursor"></div>

    <header class="l-header js-header">
        <div class="l-header__inner">
            <h1 class="p-header__logo js-header-logo">
                <a href="<?php
                    if(is_home()){
                        echo '#';
                    }
                    else{
                        echo home_url('/');
                    } ?>">
                    <span>P</span><span>A</span><span>R</span><span>K</span>
                </a>
            </h1>
            <nav class="p-header__nav">
                <ul class="p-header__list">
                    <li class="p-header__item">
                        <a href="<?php echo home_url('/about'); ?>">ABOUT</a>
                    </li>
                    <li class="p-header__item">
                        <a href="<?php echo home_url('/works'); ?>">WORKS</a>
                    </li>
                    <li class="p-header__item">
                        <?php if( is_home() ) : ?>
                        <!-- ホーム画面には横スクロールがあるのでスムーズスクロール防止 -->
                        <a href="<?php echo home_url('#contact') ?>">CONTACT</a>
                        <?php else:?>
                        <a href="#contact">CONTACT</a>
                        <?php endif;?>
                    </li>
                </ul>
            </nav>
            <button class="p-header__drawer__btn js-drawer-btn" aria-label="open nav">
                <span></span>
                <span></span>
            </button>
            <nav class="p-header__drawer js-drawer">
                <ul class="p-drawer__list">
                    <li class="p-darwer__item">
                        <a data-text="ABOUT" href="<?php echo home_url('/about'); ?>">ABOUT</a>
                    </li>
                    <li class="p-darwer__item">
                        <a data-text="WORKS" href="<?php echo home_url('/works'); ?>">WORKS</a>
                    </li>
                    <li class="p-darwer__item">
                        <?php if( is_home() ) : ?>
                        <!-- ホーム画面には横スクロールがあるのでスムーズスクロール防止 -->
                        <a data-text="CONTACT" href="<?php echo home_url('#contact') ?>">CONTACT</a>
                        <?php else:?>
                        <a data-text="CONTACT" href="#contact">CONTACT</a>
                        <?php endif;?>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- loading -->
    <div class="p-loading" id="loading">

    </div>
    <!-- /loading -->