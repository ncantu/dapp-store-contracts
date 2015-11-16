"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var EternalDB = (function (_Pudding) {
    _inherits(EternalDB, _Pudding);

    function EternalDB() {
      _classCallCheck(this, EternalDB);

      _get(Object.getPrototypeOf(EternalDB.prototype), "constructor", this).apply(this, arguments);
    }

    return EternalDB;
  })(Pudding);

  ;

  // Set up specific data for this class.
  EternalDB.abi = [{ "constant": true, "inputs": [], "name": "count", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "key", "type": "uint256" }, { "name": "index", "type": "uint256" }], "name": "delete_entry", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "key", "type": "uint256" }], "name": "get_length", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "key", "type": "uint256" }], "name": "clear", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "key", "type": "uint256" }, { "name": "value", "type": "uint256" }], "name": "add", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "key", "type": "uint256" }, { "name": "index", "type": "uint256" }], "name": "get_entry", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "key", "type": "uint256" }], "name": "get_all", "outputs": [{ "name": "", "type": "uint256[]" }], "type": "function" }, { "constant": false, "inputs": [], "name": "new_entry", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "has", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_admin", "type": "address" }], "name": "transfer_ownership", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "admin", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  EternalDB.binary = "606060405260008054600160a060020a0319163317905560018054818055819081908015829011603a57818360005260206000209182019101505b5050505061052a8061004c6000396000f36060604052361561008d5760e060020a600035046306661abd811461008f5780631a10cfc31461009e578063250108161461013857806341ee903e14610177578063505fb46c146101ef57806358e59c321461028257806389029d8c146102d65780639c851ebc1461036f578063cccf7a8e146103c0578063f0350c04146103d0578063f851a44014610411575b005b6104235b600154600019015b90565b61008d600435602435604435600080548190600160a060020a039081163390911614156104d6576001805486908110156100025750505082815260008051602061050a833981519152840160205260409020815b81546001820110156104dd5781816001018154811015610002579060005260206000209001600050548282815481101561000257505060206000208201556001016100f2565b6104236004356024356000600160005083815481101561000257505081815260008051602061050a833981519152830160205260409020545b92915050565b61008d600435602435600054600160a060020a039081163390911614156104cd576000600160005083815481101561000257505081815260008051602061050a8339815191528301602052604081208054828255829080158290116104c8578183600052602060002091820191016104c8919061026e565b61008d60043560243560443560008054600160a060020a039081163390911614156104be57600180548590811015610002575083825260008051602061050a8339815191528501602052604090912080549182018082559091839183919082908280158290116104a5578183600052602060002091820191016104a591905b808211156104c4576000815560010161026e565b6104236004356024356044356000600160005084815481101561000257505082815260008051602061050a833981519152840160205260408120805483908110156100025750815260209020015492915050565b610435600435602435604080516020810190915260008152600180548490811015610002575050600082815260008051602061050a833981519152840160209081526040918290208054835181840281018401909452808452909183018282801561036357602002820191906000526020600020905b81600050548152602001906001019080831161034c575b50505050509050610171565b61042360008054600160a060020a0390811633909116141561009b57600180548082018083559091908280158290116103b65782855260008051602061050a833981519152015b505050905061009b565b610423600435600061049c610093565b61008d600435600054600160a060020a0390811633909116141561040e576000805473ffffffffffffffffffffffffffffffffffffffff1916821790555b50565b61047f600054600160a060020a031681565b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b90911115919050565b5050508154811015610002576000918252602090912001555b50505050565b5090565b505050505b5050565b505050505b5050505050565b8154600019810180845583908280158290116104d1576000838152602090206104d191810190830161026e56b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6";

  if ("0xc2b29db38d5f83681940422ee36f06021ea5d3a9" != "") {
    EternalDB.address = "0xc2b29db38d5f83681940422ee36f06021ea5d3a9";

    // Backward compatibility; Deprecated.
    EternalDB.deployed_address = "0xc2b29db38d5f83681940422ee36f06021ea5d3a9";
  }

  EternalDB.generated_with = "1.0.2";
  EternalDB.contract_name = "EternalDB";

  return EternalDB;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.EternalDB = factory;
}