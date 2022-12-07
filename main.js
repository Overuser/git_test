/****************************
 * Global declarations
*****************************/

var bar = document.getElementsByClassName("bar");
const [bar1, bar2, bar3, bar4, bar5, bar6] = bar;

/****************************
 * Class changing function
*****************************/

window.onload = () => {
    setTimeout(() => {
        bar1.className = "one";
        bar2.className = "two";
        bar3.className = "three";
        bar4.className = "four";
        bar5.className = "five";
        bar6.className = "six";
    }, 300);
}

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






