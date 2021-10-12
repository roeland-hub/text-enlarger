function changeFontSize(target) {
    var demo = document.getElementById("demo");
    var computedStyle = window.getComputedStyle
           ? getComputedStyle(demo) // Standards
           : demo.currentStyle;     // Old IE
    var fontSize;
  
    if (computedStyle) { // This will be true on nearly all browsers
        fontSize = parseFloat(computedStyle && computedStyle.fontSize);
  
        if (target == document.getElementById("button1")) {
          fontSize += 5;
        } else if (target == document.getElementById("button2")) {
          fontSize -= 5;
        }
        demo.style.fontSize = fontSize + "px";
    }
}

// The Window.getComputedStyle() method returns an object containing
//  the values of all CSS properties of an element

// ? The optional chaining operator (?.) enables you to read the value of a property 
// located deep within a chain of connected objects without having to check that each 
// reference in the chain is valid.