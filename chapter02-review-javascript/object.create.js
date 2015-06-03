var objectCreate = function (org) {
	if( !org ){
		return {};
	} else {
		function obj(){};
		obj.prototype = org;
		return new obj;
	}
}

Object.create = Object.create || objectCreate;