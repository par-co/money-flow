import "./createParagraph.css";

export function createParagraph(
  text: string,
  className: string
): HTMLParagraphElement {
  const paragraph = document.createElement("p");

  paragraph.textContent = text;

  paragraph.className = className;

  return paragraph;
}
