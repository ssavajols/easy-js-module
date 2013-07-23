define('helper/string_utils', ['jquery'], function($) {

    var string_utils = function() {
        // private

        //public
        return {
            string_to_array: function(string){
                return string.split('');
            }
        };
    };

    return new string_utils();
});