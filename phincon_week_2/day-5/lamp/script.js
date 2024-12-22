const onLamp = (params) => {
  let lamp = document.getElementById("lamp");
  if (params == "on") {
    lamp.src = "on.gif";
  }
  if (params == "off") {
    lamp.src = "off.gif";
  }
};
