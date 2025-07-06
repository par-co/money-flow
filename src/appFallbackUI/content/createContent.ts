import { createButton, createHeading, createParagraph } from "../elements";

export function createContent(UIErrorMessage: string): HTMLDivElement {
  const innerContainer = document.createElement("div");

  const heading = createHeading(
    "Something went wrong.",
    "app-fallback-ui-heading"
  );

  const paragraph1 = createParagraph(UIErrorMessage, "app-fallback-ui-p");

  const paragraph2 = createParagraph(
    "Please try again later.",
    "app-fallback-ui-p"
  );

  const refreshButton = createButton("Try again", "app-fallback-ui-button");

  innerContainer.append(heading, paragraph1, paragraph2, refreshButton);

  return innerContainer;
}
