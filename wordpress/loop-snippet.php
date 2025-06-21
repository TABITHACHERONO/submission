<?php
$args = array('numberposts' => 5);
$latest_posts = wp_get_recent_posts($args);
foreach($latest_posts as $post) {
  echo '<h2>' . esc_html($post['post_title']) . '</h2>';
}
?>
