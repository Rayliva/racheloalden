# Rachel Alden Portfolio

A minimalist-playful personal portfolio for racheloalden.com. Built with vanilla HTML, CSS, and JavaScript—designed for easy deployment to Digital Ocean.

## Design

- **Aesthetic**: Minimalist-Playful, cute-but-stylish
- **Colors**: Warm neutrals with muted terracotta and sage accents
- **Typography**: Outfit (headings) + Plus Jakarta Sans (body)
- **Features**: Generous whitespace, soft rounded corners (12px+), subtle micro-interactions

## Local Development

```bash
npm install
npm run dev
```

Then visit `http://localhost:5173` (or the port Vite shows).

For a production build: `npm run build` → output in `dist/`

## Customization

### Projects / Games

Edit the `.portfolio-grid` section in `index.html`. For each project card:

1. **Thumbnail**: Add your image to `public/images/`, then replace the `.project-placeholder` div with:
   ```html
   <img src="/images/my-game.png" alt="My Game">
   ```

2. **Title, description, links**: Update the text and `href` values.

### Social Links

Update the footer links in `index.html`:
- GitHub: `https://github.com/racheloalden`
- LinkedIn: `https://linkedin.com/in/racheloalden`
- Email: `mailto:hello@racheloalden.com`

### About Me

Edit the `.about-narrative` paragraphs to tell your story.

## Deploy to Digital Ocean

1. Push this repo to GitHub.
2. Go to [Digital Ocean App Platform](https://cloud.digitalocean.com/apps).
3. Click **Create App** → **GitHub** → select your repo.
4. App Platform will detect it as a static site (no build step needed).
5. Set your custom domain to `racheloalden.com` in the app settings.
6. Deploy.

For custom domain setup, add a CNAME record pointing to your App Platform URL.
