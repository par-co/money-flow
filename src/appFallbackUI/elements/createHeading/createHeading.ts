import "./createHeading.css";

export function createHeading(
  text: string,
  className: string
): HTMLHeadingElement {
  const heading = document.createElement("h2");

  heading.textContent = text;

  heading.className = className;

  return heading;
}
