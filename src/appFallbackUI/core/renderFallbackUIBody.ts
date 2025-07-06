import { mountAppFallbackUI } from "../utilities/mountAppFallbackUI";

export function renderFallbackUIBody(
  UIErrorMessage: string,
  wrapperClassName: string
): void {
  document.body.innerHTML = "";

  mountAppFallbackUI(UIErrorMessage, wrapperClassName);
}
