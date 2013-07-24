define(
        'module/sample',
        [
            'jquery',
            'app',
            'helper/string_utils'
        ],
        function($, app, string_utils) {

            var sample = {
                initialize: function() {
                    console.log(string_utils.string_to_array('abc'));
                    console.log('module sample is intialized');
                },
                ready: function() {
                    console.log('module sample is ready');
                }
            };

            return sample;
        });