# Food Saver

A React frontend for the Food Saver app that supports login, registration, and a dashboard experience for restaurants and NGOs.

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Backend configuration

The frontend is configured to call the backend at:

```txt
http://localhost:8080
```

If you want to use a different backend URL, set the environment variable:

```bash
VITE_API_BASE_URL=https://your-backend-url
```

## Deploy to Netlify

1. Push the project to GitHub.
2. Open Netlify and create a new site from Git.
3. Select this repository.
4. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy the site.

> Note: the frontend can be deployed to Netlify, but login and registration requests will only work if the backend is reachable from the browser. For local development, the app uses `http://localhost:8080`.
