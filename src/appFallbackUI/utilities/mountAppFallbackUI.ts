import { createContent } from "../content/createContent";
import { createContainer } from "../elements";

export function mountAppFallbackUI(
  UIErrorMessage: string,
  containerClassName: string
): void {
  const container = createContainer(containerClassName);

  const content = createContent(UIErrorMessage);

  container.appendChild(content);

  document.body.appendChild(container);
}
