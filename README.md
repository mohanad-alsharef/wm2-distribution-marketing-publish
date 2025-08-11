# WM2 Distribution Marketing Website Template

This is a modern, responsive 3-page static website template built with React and Tailwind CSS. It's designed for distribution marketing companies and includes a Home page, an About Us page, and an FAQ section.

This project is set up to run directly in the browser without a build step, making it easy to host on static hosting services like GitHub Pages.

## Table of Contents

1.  [How It Works](#how-it-works)
2.  [Live Demo](#live-demo)
3.  [Customizing Your Website](#customizing-your-website)
    *   [Changing Text and Images](#changing-text-and-images)
    *   [Updating Navigation Links](#updating-navigation-links)
    *   [Adding or Modifying FAQ](#adding-or-modifying-faq)
4.  [Deploying to GitHub Pages](#deploying-to-github-pages)

## How It Works

This project uses a "no-build" setup:
*   **React** is loaded from a CDN (`esm.sh`).
*   **Tailwind CSS** is loaded via its Play CDN.
*   **TypeScript (TSX)** files are transpiled live in the browser by **Babel Standalone**.

This means you can edit the `.tsx` files directly and see changes without needing to run a build command.

## Live Demo

After deploying to GitHub Pages, your live site will be available at a URL like: `https://<your-github-username>.github.io/<your-repository-name>/`

## Customizing Your Website

All the content and structure of the website can be modified by editing the files in the `pages/` and `components/` directories.

### Changing Text and Images

-   **Homepage Content**: Open `pages/HomePage.tsx`. You can edit the text in the `HeroSection`, `WhyJoinSection`, etc., directly.
-   **About Page Content**: Open `pages/AboutPage.tsx` to change the mission statement and team member details.
-   **Images**: The images currently use a placeholder service (`https://picsum.photos`). To use your own images:
    1.  Create a new folder named `assets` in the root of your project.
    2.  Place your image files (e.g., `hero-background.jpg`, `team-member-1.png`) inside the `assets` folder.
    3.  In the `.tsx` files, change the `src` attribute of the `<img>` tags to point to your new images. For example, change `src="https://picsum.photos/1600/900"` to `src="./assets/hero-background.jpg"`.

### Updating Navigation Links

You can easily add, remove, or edit the links in the main navigation bar (header).

1.  Open the file `components/Header.tsx`.
2.  Find the `navItems` array at the top of the file.
    ```javascript
    const navItems = [
      { name: 'Home', path: '/', external: false },
      { name: 'About Us', path: '/about', external: false },
      { name: 'FAQ', path: '/faq', external: false },
      { name: 'Company Blog', path: '#', external: true },
    ];
    ```
3.  To add a new link:
    *   **Internal Link (to another page on your site):** Add a new object with `external: false`. The `path` should start with a `/`.
      ```javascript
      { name: 'Products', path: '/products', external: false }
      ```
    *   **External Link (to another website):** Add a new object with `external: true`. The `path` should be the full URL. These links will automatically open in a new browser tab.
      ```javascript
      { name: 'Our Partner', path: 'https://partner-website.com', external: true }
      ```
4.  Edit or remove existing objects in the array to change the navigation.

### Adding or Modifying FAQ

1.  Open the file `pages/FaqPage.tsx`.
2.  Find the `faqData` array.
    ```javascript
    const faqData: FaqItem[] = [
      {
        question: 'What is WM2 distribution marketing?',
        answer: 'WM2 is a distribution marketing company...',
      },
      // ... more questions
    ];
    ```
3.  To add a new FAQ, simply add a new object with a `question` and `answer` to the array.
4.  Edit the text inside the existing objects to modify the current FAQs.

## Deploying to GitHub Pages

Follow these steps to publish your website for free using GitHub Pages.

1.  **Create a GitHub Repository**: If you haven't already, create a new repository on [GitHub](https://github.com/new).
2.  **Push Your Code**: Upload all the project files (`index.html`, `README.md`, `App.tsx`, etc.) to your new repository. If you're using Git, you would run the following commands in your terminal:
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
