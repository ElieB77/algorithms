function abbrevName(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join(".")
    .toUpperCase();
}
