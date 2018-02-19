import _ from 'lodash';
import notifications from './notifications';

//import txt from 'raw-loader!./file.txt';
import txt from 'txt!./text.txt';

notifications.test();

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}


const point = new Point(3,2);
console.log(point);

function component() {
    var element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    setTimeout(() => {
        console.log('after sss time out!!! do it now');
    })

    return element;
}

document.body.appendChild(component());