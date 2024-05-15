function makeObject(key, value) {
    var object = {};
    object[key] = value;
    return object;
}
var userPreferance = makeObject("theme", "light");
console.log(userPreferance);
