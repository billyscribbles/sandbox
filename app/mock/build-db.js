var jsonConcat = require('json-concat');

jsonConcat(
    {
        src: './seeds',
        dest: './db.json'
    },

    function(json) {
        console.log('\x1b[36m%s\x1b[0m', 'Database created...');
    }
);
