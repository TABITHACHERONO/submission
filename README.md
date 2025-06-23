## 1. Django + PostgreSQL (Backend)

📂 `submission/django/`

  ## `models.py`
- Defines a `BlogPost` model with the following fields:
  - `title` (CharField, max 100 characters)
  - `slug` (SlugField, unique, auto-generated from title)
  - `content` (TextField)
  - `created_at` (DateTimeField, auto_now_add)
  - `author_email` (EmailField)
- The `save()` method is overridden to automatically generate the `slug` using Django's `slugify()` function.

## `views.py`
- Contains a class-based view using Django REST Framework (DRF).
- `BlogPostListView` returns a JSON response of all blog posts.
- A `BlogPostSerializer` class is used to serialize the blog post data.

## 2. Vue.js (Frontend)

 `submission/vue/`

###  `UserCard.vue`
- A Vue component named `UserCard`.
- Accepts a prop named `user` with `{ name, email }`.
- Renders the user's name and a `mailto:` link using dynamic binding.

###  `axios-snippet.js`
- Contains a Vue `mounted()` lifecycle method.
- Uses `axios` to fetch blog posts from `https://api.example.com/posts`.
- The fetched data is stored in `this.posts`.

---

## 3. Next.js (Web Development)

📂 `submission/nextjs/pages/`

###  `index.js`
- A static homepage for the Next.js app.
- Displays “Welcome to My Portfolio”.
- Uses the `<Head>` component to set a custom page `<title>` and `<meta description>` tag.

###  `posts/[id].js`
- Implements a dynamic route using `[id].js`.
- Uses `getServerSideProps()` to fetch a post from `https://api.example.com/posts/:id`.
- Renders the post's `title` and `body`.



## 4. WordPress (Conceptual)

📂 `submission/wordpress/`

###  `wp-answers.txt`
Answers to WordPress theory questions:
1. The file that controls the homepage in a custom WordPress theme is `index.php` or `front-page.php`.
2. To enqueue a custom JS file, use `wp_enqueue_script()` inside `functions.php`.
3. The function used to get the site’s base URL is `get_site_url()`.

###  `loop-snippet.php`
- A WordPress loop snippet using `wp_get_recent_posts()` to retrieve the latest 5 posts.
- Uses `esc_html()` to safely display each post title in an `<h2>` tag.
- Includes `wp_reset_postdata()` to clean up after the loop.



## 5. IT Support Basics

`submission/it-support/`

###  `commands.txt`
Short explanations of common terminal commands:
- `sudo systemctl restart nginx`: Restarts the Nginx server with admin rights.
- `psql -U postgres`: Opens PostgreSQL shell as the `postgres` user.
- `ping google.com`: Sends ICMP packets to test internet connectivity.
- `df -h`: Displays disk usage in human-readable format.

### ✅ `ssh-troubleshooting.txt`
Fixes for the SSH error `Permission denied (publickey)`:
1. Check if the public key is added to the server’s `~/.ssh/authorized_keys`.
2. Ensure the private key is added to the SSH agent using `ssh-add`.



##  How to Navigate

- Open the `submission/` folder and explore each subfolder by section.
- All code follows best practices for clarity and maintainability.

