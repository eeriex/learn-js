// Check if variable is a string
// https://stackoverflow.com/a/24941988
function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]"
}

module.exports = (source, target) => {
  if (source != null && target != null && isString(source) && isString(target)) {
    if (source === "") {
      return 0;
    }

    var res = source.split(" ");
    var x = res.length;
    var counter = 0;
    for (i = 0; i < res.length; i++) {
      if (target === res[i]) {
        counter++;
      }
    }

    return counter;
  }
  return -1;
}
