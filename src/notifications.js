/**
 * Created by Paulius on 16/02/2018.
 */
define([], function () {
    console.log('notification AMD module loaded');

    function test() {
        console.log('run function inside AMD')
    }

    return {
        test: test
    }
});