/****************************
 * Global declarations
*****************************/


/****************************
 * original snippet
*****************************/

/*
function getCSS(element) {
    var css_data = '';
    var css_obj = getComputedStyle(element);
    for (var i = 0; i < css_obj.length; i++) {
        css_data +=
            css_obj[i] + ':' + css_obj
                .getPropertyValue(css_obj[i])
                + '\n';
    }
    console.log(css_data);
    return;
}*/

const addNum = (a, b) => {
    return parseInt(a) + parseInt(b);
};



