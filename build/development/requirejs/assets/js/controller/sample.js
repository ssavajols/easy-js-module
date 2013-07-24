define(
        'controller/sample',
        [
            'jquery',
            'module/sample',
            'module/sample_second'
        ],
        function($, module_sample, module_sample_second) {
            var sample = {
                initialize: function() {
                    module_sample.initialize();
                    module_sample_second.initialize();

                    module_sample.ready();
                    module_sample_second.ready();
                }
            };
            return sample;
        });