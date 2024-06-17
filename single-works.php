<?php get_header(); ?>

<main class="l-main js-close-drawer">
    <div class="l-post">
        <div class="l-post__inner">
            <div class="p-post__content">
                <small class="p-post__tip">画像はスクロールしてご覧いただけます <span>&#8594;</span></small>
                <!-- ポスト情報を取得して表示する -->
                <?php 
                    if(have_posts()):
                        while(have_posts()):
                            the_post();
                ?>
                <div class="p-post__img">
                    <?php the_post_thumbnail();?>
                </div>
                <div class="p-post__body">
                    <div class="p-post__title-wrap">
                        <strong class="p-post__label">WORK DETAIL</strong>
                        <h2 class="p-post__title">
                            <?php the_title();?>
                        </h2>
                        <p class="p-post__part">
                            <?php the_field('part');?>
                        </p>
                    </div>
                    <div class="p-post__text-wrap">
                        <div class="p-post__description"><?php the_content();?></div>
                        <div class="p-post-info__wrap">
                            <div class="p-post-info__item">
                                <h3>TOOLS</h3>
                                <p>
                                    <?php the_field('tool')?>
                                </p>
                            </div>
                            <div class="p-post-info__item">
                                <h3>制作期間</h3>
                                <p>
                                    <?php the_field('period')?>
                                </p>
                            </div>
                            <!-- フィールドに内容がある場合に表示 -->
                            <?php 
                                if(get_field('id')):
                            ?>
                            <div class="p-post-info__item">
                                <h3>ID</h3>
                                <p>
                                    <?php the_field('id')?>
                                </p>
                            </div>
                            <?php endif;?>
                            <?php 
                                if(get_field('password')):
                                    ?>
                            <div class="p-post-info__item">
                                <h3>PASSWORD</h3>
                                <p>
                                    <?php the_field('password')?>
                                </p>
                            </div>
                            <?php endif;?>
                        </div>
                    </div>
                </div>
                <div class="p-post__btn">
                    <a href="<?php the_field('url') ?>" class="c-btn-more" target="_blank">
                        サイトを見る
                    </a>
                </div>
                <?php 
                    endwhile;endif;
                ?>
            </div>
        </div>
    </div>


</main>
<?php get_template_part('template-parts/contact')?>


<?php get_footer(); ?>