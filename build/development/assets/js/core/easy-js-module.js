/*
 * APP STRUCTURE
 */
var CONFIG;

(function(_super, $){
	// DEFAULT CONFIG
	var DEFAULT = {
		NAMESPACE:"APP",
		DIR_MODULES:"assets/js/modules/",
		DIR_CORE:"assets/js/core/",
		DIR_APP:"assets/js/"
	}
	
	// GET CONFIG
	$.ajax({
		url:"./config.json",
		success:function(result){
			CONFIG = result;
		},
		complete:function(){
			
			// GET USER DEFINED CONFIG
			if( typeof CONFIG == "object" ){
				for( attr in DEFAULT )
					if( CONFIG[attr] )
						DEFAULT[attr] = CONFIG[attr];
		
				CONFIG = null; // UNSET USER DEFINED CONFIG
			}

			// SET DEFAULT GLOBAL OBJECT
			_super[DEFAULT.NAMESPACE] = {
				config: DEFAULT,
				userdata:{},
				modules : {
					_INSTANCES:{}
			},
			// MODULE MANAGEMENT
			executeDataController : function(){
			
				var _this = this;
				var jsPath = "./"+this.getConfig("DIR_MODULES")+this.getConfig("NAMESPACE")+".";
				var node, $modulesNodes;
				var modules = {}, module;
			
				$modulesNodes = $("*[data-controller]");
			
				$modulesNodes.each(function(i,el){
					var $el = $(el);
					var controller = $el.data("controller").split(" ");
				
					$(controller).each(function(i,ctrl){
						modules[ctrl] = true;
					});
					
					$el.removeAttr("data-controller");
				});
			
				for( module in modules){
					if( !_this.getModuleConstructor(module) ){
						$("head").append("<script type='text/javascript' src='"+jsPath+module+".js'></script>");
						_this.modules._INSTANCES[module] = new _this.modules[module];
					}
				}
			
				return true;
			},
			// MODULE MANAGEMENT
			getModuleConstructor:function(constructor){
				constructor = constructor.toString();
			
				return !!this.modules[constructor];
			},
			getModuleInstance : function(instance){
				instance = instance.toString();
				if( !this.modules._INSTANCES[instance] )
					return null;
			
				return this.modules._INSTANCES[instance];
			},
			// USER DATA MANAGEMENT
			deleteData:function(index){
				index = index.toString();
		
				if( this.userdata[index] )
					delete this.userdata[index];
			},
			getData:function(index){
				index = index.toString();
		
				return this.userdata[index] ? this.userdata[index] : null;
			},
			setData:function(index, value){
				index = index.toString();
		
				this.userdata[index] = value;
				return this.userdata[index];
			},
			// CONFIG MANAGEMENT
			getConfig:function(index){
				index = index.toString();
		
				return this.config[index] ? this.config[index] : null;
			}
		}
			
		// LOAD APP FILE
		$("head").append("<script type='text/javascript' src='"+DEFAULT.DIR_APP+DEFAULT.NAMESPACE+".js'></script>");
	}
	})
	
})(window, jQuery);