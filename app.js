var values = document.getElementById("values");
var hexInput = document.getElementById("hexInput");
var rgbInput = document.getElementById("rgbInput");
var input = document.querySelectorAll("input");

var colorPicker = new iro.ColorPicker("#picker", {
  width: 200,
  borderWidth: 2,
  padding: 4,
  borderColor: "#fff",
  // margin: 16,
  // layoutDirection: "horizontal",
  layout: [
    {
      component: iro.ui.Wheel,
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "hue",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "value",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "saturation",
      },
    },

    {
      component: iro.ui.Slider,
      options: {
        sliderType: "red",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "green",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "blue",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "kelvin",
      },
    },
  ],
});

colorPicker.on(["color:init", "color:change"], function (color) {
  // values.innerHTML = [
  //   `<span>hex:</span> ${color.hexString}`,
  //   `<span>rgb:</span> ${color.rgbString}`,
  //   `<span>hsl:</span> ${color.hslString}`,
  //   `<span>CMYK:</span> cmyk(0%, 0%, 0%, ${color.value}%)`,
  // ].join("<br>");

  hexInput.value = color.hexString;

  hexInput.style.backgroundColor = color.hexString;

  if (color.value > 50) {
    hexInput.style.color = "#000";
  } else {
    hexInput.style.color = "#fff";
  }
});

hexInput.addEventListener("change", function () {
  colorPicker.color.hexString = this.value;
});
