
angular.module('bookClubApp')
  .filter('nCSVs', function(){
    return function(list, n) {
      if (list.length > n) {
        list = list.slice(0, n);
        list.push('...');
      }
      return list.join(', ');
    };
  })

  .filter('trueKeys', function(){
    return function(dict) {
      var keys = [];
      angular.forEach(dict, function(value, key){
        if (value == true) {
          keys.push(key);
        }
      });
      return keys;
    };
  })

  .filter('isEmpty', function(){
    return function(obj) {
    	return Object.keys(obj).length == 0;
    };
  });
