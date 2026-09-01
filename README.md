# VERVE Fashion WebApp

Original frontend-first fashion commerce prototype. No Node.js/npm required.

## Run
Open `index.html` directly in a browser, or use VS Code Live Server.

## Architecture
- `index.html` — shell/semantic structure
- `css/style.css` — responsive UI
- `js/data.js` — mock catalog data
- `js/api.js` — backend seam/mock API
- `js/app.js` — state, rendering and interactions
- `assets/` — local assets

## Backend integration
Keep the UI and replace the methods in `js/api.js` with real API calls. Suggested endpoints:
- GET `/api/products`
- GET `/api/products/:id`
- POST `/api/auth/login`
- POST `/api/newsletter`
- POST `/api/orders`
- GET `/api/orders/:id`
- POST `/api/wishlist`
- GET `/api/stores?lat=&lng=`

The current frontend stores cart/wishlist locally so the complete shopping flow can be tested without a backend.
