# Rachel Alden Portfolio

A minimalist-playful personal portfolio for racheloalden.com. Built with vanilla HTML, CSS, and JavaScript.

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
   <img src="/public/images/my-game.png" alt="My Game">
   ```

2. **Title, description, links**: Update the text and `href` values.

### Social Links

Update the footer links in `index.html`:
- GitHub: `https://github.com/racheloalden`
- LinkedIn: `https://linkedin.com/in/racheloalden`
- Email: `mailto:hello@racheloalden.com`

### About Me

Edit the `.about-narrative` paragraphs to tell your story.

## Deployment (WinSCP / FTP)

Upload the entire project folder to your server's web root. The structure should have `index.html`, `src/`, and `public/` at the same level. Images are served from `public/images/`.
