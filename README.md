# Demo Creative Agency

A responsive, static business website built with HTML5, CSS3, and vanilla JavaScript. It has no build step, package manager, framework, or database requirement.

## Preview on Windows

1. Open this folder in File Explorer.
2. Double-click `index.html` to open it in your default browser.
3. For a local web-server preview, open PowerShell in this folder and run `py -m http.server 8000`. Visit [http://localhost:8000](http://localhost:8000), then press **Ctrl+C** in PowerShell when you are done.

The page also works when opened directly as a file. Google Fonts need an internet connection; local system fonts are used if they cannot load.

## Customize

- Edit the page content, title, description, navigation, and sample contact details in `index.html`.
- Adjust colors, spacing, breakpoints, and typography in `css/style.css` (the core colors are CSS variables near the top).
- Update the mobile menu, reveal animations, and contact form behavior in `js/script.js`.
- Replace the CSS-built portfolio mockups with your own appropriately licensed images if desired. Keep image files in `assets/` and update the matching markup and styles.
- Replace all demo project, testimonial, email, and social-link content before publishing. The displayed testimonial and projects are fictional examples.

## Contact form

The form validates the name, email, and message in the browser, then opens a prefilled email draft addressed to the example address. It does not submit to a server, send automatically, or store data. Before launch, configure a real email address and connect the form to a submission service or your own server endpoint; update the form's behavior and privacy notice to match that service.

## Upload to shared hosting or cPanel

1. Customize and preview the site locally.
2. In your hosting control panel, open **File Manager** and navigate to the domain's document root (often `public_html/`).
3. Upload `index.html`, `css/`, `js/`, and `assets/` while preserving the folder structure. If replacing a live site, keep a backup first.
4. Confirm `index.html` is in the document root and visit your domain over HTTPS.

You can also upload those same files with an FTP/SFTP client to the document root. No Node.js, build command, or database setup is required.
