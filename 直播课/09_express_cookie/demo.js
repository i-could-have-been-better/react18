function base64ImageSize(base64ImageStr) {
  const indexBase64 = base64ImageStr.indexOf('base64,');
  if (indexBase64 < 0) return -1;
  const str = base64ImageStr.substr(indexBase64 + 6);
  return (str.length * 0.75).toFixed(2);
}

console.log(base64ImageSize("123123"));