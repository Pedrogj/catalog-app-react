export const cleanSearchText = (data) => {
  return !data
    ? ""
    : typeof data === "string"
    ? data
        .replace("á", "a")
        .replace("é", "e")
        .replace("i", "í")
        .replace("ó", "o")
        .replace("u", "ú")
    : data;
};
