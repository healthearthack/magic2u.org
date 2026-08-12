src/
├── components/      # Reusable UI components
├── features/        # Feature-level modules (dashboard, enterprise, etc.)
├── hooks/           # Custom React hooks (metrics, telemetry)
├── pages/           # Route-level pages
├── styles/          # Global CSS + design-system styling
├── telemetry/       # Analytics + event logging
├── LandingPage.tsx  # Analytics + event logging. Landing page with the cloud title plus Fairy.
├── App.tsx          # Root application component. It loads your LandingPage and nothing else.
└── main.tsx         # React entrypoint. This mounts your App into the DOM.
