// css
import "./main.css";

// functions
import { getErrorMessage } from "./utilities/functions/getErrorMessage";

// App
import App from "./App";

// appFallbackUI
import { renderFallbackUIOverlay, renderFallbackUIBody } from "./appFallbackUI";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//--------------------------------------------------------------------------------------------------//

function getRootElement(): HTMLElement {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw new Error("Could not find root element with ID 'root'.");
  }

  return rootElement;
}

function startApplication(): void {
  const rootElement = getRootElement();

  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

function handleStartupFailure(error: unknown): void {
  if (!error) return;

  const message = getErrorMessage(error);

  console.error("App startup failed:", message);

  if (document.body) {
    renderFallbackUIOverlay(
      "The app failed to start properly.",
      "app-fallback-ui app-fallback-ui-overlay"
    );
  } else {
    renderFallbackUIBody("Unable to launch the app.", "app-fallback-ui");
  }
}

try {
  startApplication();
} catch (error) {
  handleStartupFailure(error);
}
