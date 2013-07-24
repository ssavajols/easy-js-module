define(
        'module/sample_second',
        [
            'jquery'
        ],
        function() {

            var sample_second = {
                initialize: function() {
                    console.log('module sample_second is initialized');
                },
                ready: function() {
                    console.log('module sample_second is ready');
                }
            };

            return sample_second;
        });