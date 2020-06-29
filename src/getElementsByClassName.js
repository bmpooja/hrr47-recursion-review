
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className
) {
  // your code here
  var elementContainingClass = []
  // variable to store result
  var findElementContaingClass = function (element) {
    // check if the classList of the current element contains the className
    if (element.classList && element.classList.contains(className)) {
      elementContainingClass.push(element)
    }
    if (element.childNodes) {
      // If there are childNodes, loop through them, calling findElementContainingClass on each child
      for (var i = 0; i < element.childNodes.length; ++i) {
        findElementContaingClass(element.childNodes[i]);
      }
    }
  }
  findElementContaingClass(document.body);
  return elementContainingClass;
};
