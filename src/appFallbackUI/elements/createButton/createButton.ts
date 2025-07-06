import "./createButton.css";

export function createButton(
  text: string,
  className: string
): HTMLButtonElement {
  const button = document.createElement("button");

  button.textContent = text;

  button.className = className;

  button.addEventListener("click", () => location.reload());

  return button;
}
