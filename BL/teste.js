module.exports = (function() {
  'use strict';
  var teste = {
    devolveJSON : function(tipo){
      console.log(tipo);
      var obj = {}
      obj[tipo] = true;
      return obj;
    }
  };

  teste.outroMetodo = function(){
    return true;
  };

  return teste;
})();
