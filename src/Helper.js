export const shortenText = (string, length) => {
    //  {
    //    shortenText(results.description, 150);
    //  }
  if (string.length > length && string.length > 0) {
    let newString = string + "";
    newString = string.substr(0, length);
    newString = string.substr(0, newString.lastIndexOf(" "));
    newString = newString.length > 0 ? newString : string.substr(0, length);
    return newString + "... Read More";
  }
  return string;
};
