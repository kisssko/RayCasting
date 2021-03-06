var RC = (function(RC) {
    'use strict';

    RC.Player = function (x, y, dir) {
        return {
            x: function (val) {
                if (val !== undefined) {
                    x = val;
                    return this;
                }

                return x;
            },

            y: function (val) {
                if (val !== undefined) {
                    y = val;
                    return this;
                }

                return y;
            },

            dir: function (val) {
                if (val !== undefined) {
                    dir = val;
                    return this;
                }

                return dir;
            }
        }
    };

    return RC;
})(RC || {});