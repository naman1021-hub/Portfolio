# Naman Gupta Portfolio

A React portfolio built with JavaScript, JSX, Vite, and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

The development server listens on port `5173`. On the same Wi-Fi, open `http://<computer-LAN-IP>:5173` from the other device. Router port forwarding is not needed for this.

## Production build

```sh
npm run build
npm run preview
```

The preview server listens on port `4173`. To temporarily share the production build over the internet, forward TCP port `4173` on your router to port `4173` on this computer's LAN IP, and allow inbound TCP `4173` through Windows Firewall on the private network profile. Use your router's public IP from outside your Wi-Fi and test from a cellular connection. Never forward the development port `5173`.

Port forwarding will not work if your ISP uses carrier-grade NAT (CGNAT); in that case, deploy the site to a hosting provider or use a secure tunnel. For a permanent public site, use static hosting rather than the Vite preview server.
