/*
 * APP FILE
 */
define(['jquery'], function($) {
    var app = function() {

// PRIVATE
        var userdata = {};
        // PUBLIC
        return {
            config: {
                debug: true,
                paths: {
                    module: "modules/"
                }
            },
            initialized: false,
            launch: function() {
                this.initialize();
                this.getDataController();
            },
            initialize: function() {
                this.initialized = true;
            },
            get_userdata: function(index) {
                index = index.toString();

                return userdata[index] ? userdata[index] : null;
            },
            set_userdata: function(index, value) {
                index = index.toString();
                userdata[index] = value;

                return userdata[index];
            },
            unset_userdata: function(index) {
                index = index.toString();
                if (userdata[index])
                    delete userdata[index];
            },
            getDataController: function() {

                var _this = this;
                $('[data-controller]').each(function() {
                    var controller_content = $(this).data('controller');
                    var modules = controller_content.split(" ");
                    $(modules).each(function(i, module_name) {
                        if (module_name !== '') {
                            require([_this.config.paths.module + module_name], function(module) {
                                if (!module.initialize && _this.config.debug) {
                                    throw(_this.config.paths.module + module_name + " has no method initialize !");
                                } else if (module.initialize) {
                                    module.initialize();
                                    if (_this.config.debug) {
                                        console.log('load module :: ' + _this.config.paths.module + module_name);
                                    }
                                }
                            });
                        }
                    });
                    $(this).removeAttr('data-controller');
                });
            }
        };
    };
    return new app();
});