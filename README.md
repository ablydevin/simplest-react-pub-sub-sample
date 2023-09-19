# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Configure project
Ably client creation snippets in this project are by default configured to show using the `authUrl` parameter.  To run the samples you can change this to use a key configured as an enviuronment variable.

- Add a local environment variables file `.env.local`
- Create an environment variabled named `VITE_ABLY_AUTH_KEY`
- Set the value of this environment variable to your ably key
- Comment out the existing client creation line:

`const client = new Realtime({'authUrl':'[YOUR_ABLY_AUTH_URL]'});`

and replace with this line:

`const client = new Realtime({'key':import.meta.env.VITE_ABLY_AUTH_KEY});`
