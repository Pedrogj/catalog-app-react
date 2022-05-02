export const cleanSearchText = (data) => {
  return !data
    ? ""
    : typeof data === "string"
    ? data
        .replace("á", "a")
        .replace("é", "e")
        .replace("í", "i")
        .replace("ó", "o")
        .replace("ú", "u")
        .replace("ê", "e")
        .replace("è", "e")
        .replace("ü", "u")
    : data;
};
