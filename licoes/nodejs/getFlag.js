module.exports = function (array, flag) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === flag) {
            return array[i+1];
        }
    }
};