define('modules/sample', ['jquery', 'app'], function($, app) {

    var sample = {
        initialize: function() {
            console.log(app);
            app.set_userdata("tes", 1234);
            console.log(app.get_userdata('tes'));
            console.log(app.get_userdata('tes2'));
        }
    };

    return sample;
});