export const changeDirection = directionValue => {
  document.getElementsByTagName("html")[0].style.direction = directionValue;
 
  if (directionValue === "rtl") {
    const logo = document.getElementsByClassName("logo_img");
    if (logo[0]) {
      logo[0].style["float"] = "left";
    }
    document.getElementsByTagName("body")[0].style["background-image"] =
      "url(/image/background1.png)";
    document.getElementsByTagName("body")[0].style["background-position"] =
      "top left";
  } else if (directionValue === "ltr") {
    const logo = document.getElementsByClassName("logo_img");
    if (logo[0]) {
      logo[0].style["float"] = "right";
    }
    document.getElementsByTagName("body")[0].style["background-image"] =
      "url(/image/background.png)";
    document.getElementsByTagName("body")[0].style["background-position"] =
      "top right";
  }
};
