# WM2 Distribution Marketing Website Template

This is a modern, responsive 3-page static website template built with simple HTML, JavaScript, and Tailwind CSS. It's designed for distribution marketing companies and includes a Home page, an About Us page, and an FAQ section.

This project is set up to run directly in the browser without any build steps, making it extremely easy to edit and host on static hosting services like GitHub Pages.

## Table of Contents

1.  [How It Works](#how-it-works)
2.  [Live Demo](#live-demo)
3.  [Customizing Your Website](#customizing-your-website)
    *   [Changing Text Content](#changing-text-content)
    *   [Changing Images](#changing-images)
    *   [Updating Navigation Links](#updating-navigation-links)
    *   [Adding or Modifying FAQ](#adding-or-modifying-faq)
4.  [Deploying to GitHub Pages](#deploying-to-github-pages)

## How It Works

This project uses a "no-build" setup:
*   **HTML**: The structure is defined across three files: `index.html` (Homepage), `about.html`, and `faq.html`.
*   **CSS**: Styling is handled by **Tailwind CSS**, which is loaded directly in the browser via its Play CDN.
*   **JavaScript**: Interactivity (like the mobile menu and accordion) is managed by `index.js`.

This means you can edit the `.html` and `.js` files directly and see changes instantly by refreshing your browser.

## Live Demo

After deploying to GitHub Pages, your live site will be available at a URL like: `https://<your-github-username>.github.io/<your-repository-name>/`

## Customizing Your Website

All the content and structure of the website can be modified by editing the `.html` files.

### Changing Text Content

To change any text on the website, open the corresponding HTML file (`index.html`, `about.html`, or `faq.html`) in a text editor and find the text you want to change. For example, to edit the main headline on the homepage, open `index.html` and modify the content inside the `<h1>` tag.

### Changing Images

The images currently use a placeholder service (`https://picsum.photos`). To use your own images:

1.  Create a new folder named `assets` in the root of your project.
2.  Place your image files (e.g., `hero-background.jpg`, `team-member-1.png`) inside the `assets` folder.
3.  In the `.html` files, find the `<img>` tag you want to update and change its `src` attribute to point to your new image file.
    *   **Example**: Change `src="https://picsum.photos/1600/900"` to `src="./assets/hero-background.jpg"`.

### Updating Navigation Links

You can easily add, remove, or edit the links in the main navigation bar. The navigation bar appears on **all three HTML pages**, so you will need to make the change in `index.html`, `about.html`, and `faq.html` to ensure consistency.

1.  Open one of the `.html` files.
2.  Find the `<header>` section. Inside, you'll see the navigation links as `<a>` tags.
    ```html
    <a href="./index.html" class="...">Home</a>
    <a href="./about.html" class="...">About Us</a>
    <a href="./faq.html" class="...">FAQ</a>
    ```
3.  To add a new link, simply add a new `<a>` tag.
4.  To create an **external link** that opens in a new tab, add `target="_blank"` and `rel="noopener noreferrer"`.
    ```html
    <a href="https://your-external-link.com" target="_blank" rel="noopener noreferrer" class="...">Visit Our Blog</a>
    ```
5.  **Important**: Repeat this change in all three `.html` files to keep the navigation consistent.

### Adding or Modifying FAQ

1.  Open the file `faq.html`.
2.  Find the `id="accordion-container"` div. Inside, each FAQ is an `accordion-item`.
3.  To modify an existing FAQ, simply change the text within the `<span>` for the question and the `<div>` for the answer.
4.  To add a new FAQ, copy an entire `<div class="accordion-item">...</div>` block, paste it below the last one, and edit its content. The JavaScript will automatically handle the new item.

## Deploying to GitHub Pages

Follow these steps to publish your website for free using GitHub Pages. This process is very straightforward for this type of project.

1.  **Create a GitHub Repository**: If you haven't already, create a new repository on [GitHub](https://github.com/new).
2.  **Push Your Code**: Upload all the project files (`index.html`, `about.html`, `faq.html`, `index.js`, `README.md`, and your `assets` folder) to your new repository. If you're using Git, you would run the following commands in your terminal:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/<your-username>/<your-repo-name>.git
    git push -u origin main
    ```
3.  **Enable GitHub Pages**:
    *   In your GitHub repository, go to the **Settings** tab.
    *   In the left sidebar, click on **Pages**.
    *   Under the "Build and deployment" section, for the **Source**, select **Deploy from a branch**.
    *   Under **Branch**, select `main` and keep the folder as `/ (root)`.
    *   Click **Save**.

4.  **Wait for Deployment**: GitHub will now start deploying your site. It can take a few minutes. Once it's done, a green checkmark will appear, and the URL for your live site will be displayed at the top of the GitHub Pages settings page.

That's it! Your website is now live. Any changes you push to the `main` branch will automatically be reflected on your live site.
