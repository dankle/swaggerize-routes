'use strict';

var test = require('tape'),
    makereply = require('../lib/makereply');

test('makereply', function (t) {

    t.test('make', function (t) {
        t.plan(8);

        var res = {
            send: function () {
                t.pass('called send.');
            },
            redirect: function () {
                t.pass('called redirect.');
            }
        };
        var next = function (e) {
            if (!e) {
                t.pass('called next.');
                return;
            }
            t.ok(e instanceof Error, 'is an error.');
        };

        var reply = makereply(res, next, []);

        t.ok(reply, 'reply made');

        reply.skip();
        reply.error(new Error('error1'));
        reply.error('error2');
        reply.redirect();
        reply();

        t.ok(reply._raw, '_raw is an object.');
        t.ok(reply._raw.hasOwnProperty('send'), '_raw is the response.');
    });

});