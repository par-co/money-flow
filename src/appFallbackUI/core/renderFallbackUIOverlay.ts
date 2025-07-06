import { mountAppFallbackUI } from "../utilities/mountAppFallbackUI";

export function renderFallbackUIOverlay(
  UIErrorMessage: string,
  overlayClassName: string
): void {
  if (document.querySelector(`.${overlayClassName}`)) return;

  mountAppFallbackUI(UIErrorMessage, overlayClassName);
}
