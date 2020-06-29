// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (typeof obj === 'boolean') {
    return obj ? 'true' : 'false';
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'object') {
    if (_.isEmpty(obj) && !Array.isArray(obj)) {
      return '{}';
    } else if (Array.isArray(obj)) {
      var result = "["
      for (var i = 0; i < obj.length; ++i) {
        result += stringifyJSON(obj[i]);
        if (i < obj.length - 1) {
          result += ',';
        }
      }
      console.log(result)
      return result + ']';
    } else {
      var result = '{';
      for (var prop in obj) {
        if (typeof obj[prop] === 'function' || typeof obj[prop] === 'undefined') {
          continue;
        }
        result += stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]) + ',';
      }
      console.log('result:' + result);
      if (result[result.length - 1] === ',') {
        result = result.substring(0, result.length - 1);
      }

      return result + '}';
    }
  }
};
