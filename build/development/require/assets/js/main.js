require.config({
    // SET LIBS ALIAS/PATHS
    paths: {
        'jquery': 'vendor/jquery/jquery-1.10.2.min'
    }
});

// LAUNCH APPLICATION
define(['app'], function(app) {
    app.launch();
});