define('modules/sample', ['jquery', 'app', 'helper/string_utils'], function($, app, string_utils) {

    var sample = {
        initialize: function() {
            console.log(app);
            app.set_userdata("tes", 1234);
            console.log(app.get_userdata('tes'));
            console.log(app.get_userdata('tes2'));
            console.log(string_utils.string_to_array('abc'));
        },
        ready: function() {
            console.log('module sample is ready');
        }
    };

    return sample;
});