export function getErrorMessage(error: unknown): string {
  if (error instanceof Error && typeof error.message === "string") {
    return error.message;
  } else {
    return "An unexpected error occurred.";
  }
}
