export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/(.*\\.(png|jpg|jpeg|bmp|gif|webp|svg).*|.*\\?q=.*)$",
      "i"
    );
    return pattern.test(url);
  }
};
