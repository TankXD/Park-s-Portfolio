<!-- works page -->

<?php get_header(); ?>


<!-- work -->
<div class="l-archive js-close-drawer">
    <div class="l-archive__inner">
        <div class="p-archive__title-wrap">
            <h2 class="p-archive__title">WORKS</h2>
            <p class="p-archive__sub-title">今までの制作実績をまとめました</p>
        </div>
        <div class="p-archive__body">
            <?php 
                    // custom post type 'works'を取得
                    $args = array(
                        'post_type' => 'works',
                        // 'posts_per_page' => 4,
                    );
                    $works = new WP_Query($args);
                    if($works->have_posts()):
                        while($works->have_posts()):
                            $works->the_post();
                 ?>
            <a href="<?php the_permalink();?>" class="p-archive__post-wrap">
                <div class="p-archive-post__tools">
                    <?php $tags = get_field("tool");
                                if($tags):
                                    $tagsArray = explode(', ',$tags);
                                    foreach($tagsArray as $tag):
                             ?>
                    <span class="p-archive-post__tool-tag c-tool-tag">
                        <?php echo $tag;?>
                    </span>
                    <?php endforeach; ?>
                    <?php endif; ?>
                </div>
                <div class="p-archive__post">
                    <div class="p-archive__post-img">
                        <img src="<?php the_field('thumbnail');?>" alt="<?php the_field("thumbnail-alt") ?>">
                    </div>
                    <div class="p-archive__post-content">
                        <h3 class="p-archive__post-title">
                            <?php the_title();?>
                        </h3>
                        <p class="p-archive__post-description">
                            WEB | <?php the_field('part');?>
                        </p>
                    </div>

                </div>
                <div class="p-archive__post-bg u-is-hidden-sp"></div>
            </a>
            <?php endwhile; endif;?>
        </div>
        <!-- <div class="p-archive__more-btn">
            <a href="#" class="c-btn-more">
                もっと見る
            </a>
        </div> -->
    </div>
    <div class="p-archive__bg"></div>
</div>
<!-- /work -->
<?php get_template_part('template-parts/contact')?>

<?php get_footer(); ?>