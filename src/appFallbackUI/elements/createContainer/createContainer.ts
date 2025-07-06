import "./createContainer.css";

export function createContainer(className: string): HTMLDivElement {
  const container = document.createElement("div");

  container.className = className;

  return container;
}
