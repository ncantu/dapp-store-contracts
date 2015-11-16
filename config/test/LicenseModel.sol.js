"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var LicenseModel = (function (_Pudding) {
    _inherits(LicenseModel, _Pudding);

    function LicenseModel() {
      _classCallCheck(this, LicenseModel);

      _get(Object.getPrototypeOf(LicenseModel.prototype), "constructor", this).apply(this, arguments);
    }

    return LicenseModel;
  })(Pudding);

  ;

  // Set up specific data for this class.
  LicenseModel.abi = [{ "constant": true, "inputs": [], "name": "coordinator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "read_only", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "user_version_index", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_keys", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_read_only_keys", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "association_name", "type": "uint256" }, { "name": "association_id", "type": "uint256" }], "name": "add_to_association", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "db", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_associations", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "has_owners", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "sender", "type": "address" }, { "name": "id", "type": "uint256" }, { "name": "attributes", "type": "uint256[101][]" }], "name": "validate", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "keys", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "get_default_keys", "outputs": [{ "name": "", "type": "uint256[2][4]" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }], "name": "destroy", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "owner", "type": "address" }], "name": "add_owner", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "attributes", "type": "uint256[101][]" }], "name": "create", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "replacement", "type": "address" }], "name": "replace", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "to_check", "type": "address" }], "name": "is_owner", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "is_destroyed", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_coordinator", "type": "address" }], "name": "set_coordinator", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "reference_name", "type": "uint256" }, { "name": "reference_id", "type": "uint256" }], "name": "set_reference", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_db", "type": "address" }], "name": "set_db", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "attributes", "type": "uint256[101][]" }], "name": "update", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "get_blocks_for", "outputs": [{ "name": "", "type": "uint256[2]" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user_id", "type": "uint256" }, { "name": "version_id", "type": "uint256" }], "name": "id_for_user_version", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "associations", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "_user_version_index", "type": "address" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "reason", "type": "string" }], "name": "Log", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Create", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Update", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Destroy", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "key", "type": "uint256" }, { "indexed": false, "name": "reason", "type": "string" }], "name": "ValidationError", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "reason", "type": "string" }], "name": "GeneralError", "type": "event" }];
  LicenseModel.binary = "60606040526040516020806124ff83395060806040525160048054600160a060020a0319163317905580600160a060020a03166000141561004c576080610113806102118339906000f090505b60058054600160a060020a03191682179055600180548180558190819080158290116100cb5760008290526100cb906002026000805160206124df833981519152017fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf85b8082111561018f5760008082556001919091019081556100b0565b505050506976657273696f6e5f6964600160005060008154811015610002578181526000805160206124df833981519152929092558054687265666572656e6365929081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7919091556003805482825582908015829011610193576000839052610193906002026000805160206124bf833981519152017fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d6100b0565b5090565b5050505066757365725f6964600360005060008154811015610002578181526000805160206124bf833981519152929092558054687265666572656e63659290811015610002577fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c929092555061219b9150819061032490396000f300606060405260018054600160a060020a0319163317905560f0806100236000396000f3606060405260e060020a600035046343b0e8df81146038578063b4b9d1f1146079578063f0350c041460a1578063f851a4401460df575b005b603660043560243560443560015433600160a060020a039081169116141560745760008381526020818152604080832085845290915290208190555b505050565b60043560009081526020818152604080832060243584529091529020545b6060908152602090f35b603660043560015433600160a060020a039081169116141560dc576001805473ffffffffffffffffffffffffffffffffffffffff1916821790555b50565b6097600154600160a060020a03168156606060405236156101275760e060020a60003504630a00909781146101295780631e3dbb271461013b5780632b69a10d1461017a5780633fda12811461018c57806341d31feb1461020f57806349fb2dc5146102925780634d655aff146102ff578063582ca57b14610311578063595da94d1461039457806367f12ecf146104085780638b935fb11461047f5780638ee21b8e146104be5780639d118770146105d4578063b56b2627146105e4578063c27d7721146105f7578063cabfb93414610667578063d716222c14610741578063db6fcf0114610849578063de778edb146108c6578063e2deaa8114610906578063e7156dbe14610975578063eb121e2f146109b1578063ebd8337814610a23578063f739ed4c14610b5d578063ffd1d50414610bdf575b005b610c36600454600160a060020a031681565b610c5360043560243560038054839081101561000257906000526020600020906002020160005081600281101561000257909001600091509150505481565b610c36600554600160a060020a031681565b6040805160208181018352600080835283516001805480850283018501909652858252610c6595919390929084015b82821015610e5a5760008481526040805160209092208282019182905260028581029091019182845b8160005054815260200190600101908083116101e4575b5050505050815260200190600101906101bb565b6040805160208181018352600080835283516003805480850283018501909652858252610c6595919390929084015b82821015610e5a5760008481526040805160209092208282019182905260028581029091019182845b816000505481526020019060010190808311610267575b50505050508152602001906001019061023e565b610127600435602435604435600080546040805160e160020a636667bd470281526004810187905290518392600160a060020a03169163cccf7a8e916024828101926020929190829003018187876161da5a03f1156100025750506040515182141590506114265761141f565b610c36600054600160a060020a031681565b6040805160208181018352600080835283516002805480850283018501909652858252610c6595919390929084015b82821015610e5a5760008481526040805160209092208282019182905260028581029091019182845b816000505481526020019060010190808311610369575b505050505081526020019060010190610340565b610c536004355b600080546040805160e160020a631280840b02815260048101859052656f776e65727360248201529051600160a060020a039290921691632501081691604481810192602092909190829003018187876161da5a03f115610002575050604051519091141590505b919050565b60408051604435600481810135602081810285018101909552808452610c53948235946024803595606494929391019190819060009085015b82821015610cc05760408051610ca0818101909252908381028701906065908390839080828437820191505050505081526020019060010190610441565b610c5360043560243560018054839081101561000257906000526020600020906002020160005081600281101561000257909001600091509150505481565b610d53610100604051908101604052806004905b6040604051908101604052806002905b60008152602001906001900390816104e2579050508152602001906001900390816104d25750506040805161010081019091526004815b6040604051908101604052806002905b60008152602001906001900390816105295790505081526020019060019003908161051957505080516c637265617465645f626c6f636b9052805166696e746567657260209182018190528282018051716c6173745f757064617465645f626c6f636b905251820152604082018051656f776e6572739052516c696e74656765725f6172726179908201526060820180516864657374726f79656490525163626f6f6c910152919050565b6101276004356111fd813361074b565b6101276004356024355b61111c8261039b565b604080516004803580820135602081810285018101909552808452610c53949293602493909284019190819060009085015b82821015610d975760408051610ca0818101909252908381028701906065908390839080828437820191505050505081526020019060010190610629565b610127600435600454600160a060020a039081163390911614156109ae576040805160055460e260020a633c0d4301028252600160a060020a038481166004840152925192169163f0350c0491602481810192600092909190829003018183876161da5a03f115610002575050506109ae81600454600160a060020a039081163390911614156109ae57600080546040805160e260020a633c0d4301028152600160a060020a0385811660048301529151929091169263f0350c0492602483810193829003018183876161da5a03f1156100025750505050565b610c536004356024355b600080805b600080546040805160e160020a631280840b02815260048101899052656f776e65727360248201529051600160a060020a03929092169263250108169260448381019360209390839003909101908290876161da5a03f1156100025750506040515160ff841610159050610e6357604080516000805460e160020a632c72ce1902835260048301899052656f776e657273602484015260ff861660448401529251600160a060020a0393909316926358e59c329260648181019360209392839003909101908290876161da5a03f11561000257505060405151915050600160a060020a0384811690821614156111105760019250610e68565b610c53600435600080546040805160e160020a632c72ce19028152600481018590526864657374726f7965646024820152604481018490529051600160a060020a0392909216916358e59c3291606481810192602092909190829003018187876161da5a03f1156100025750506040515160011491506104039050565b610127600435600454600160a060020a039081163390911614156109ae576004805473ffffffffffffffffffffffffffffffffffffffff19168217905550565b610127600435602435604435600080546040805160e160020a636667bd47028152600481018790529051600160a060020a03929092169163cccf7a8e91602481810192602092909190829003018187876161da5a03f1156100025750506040515182141590506116b9576116b3565b61012760043560008054600160a060020a031614156109ae576000805473ffffffffffffffffffffffffffffffffffffffff1916821790555b50565b6040805160248035600481810135602081810286018101909652808552610c53958235959294604494019190819060009085015b82821015610e255760408051610ca08181019092529083810287019060659083908390808284378201915050505050815260200190600101906109e5565b610e3f6004356040604051908101604052806002905b6000815260200190600190039081610a39575050604080518082019091526002815b6000815260200190600190039081610a5b575050604080516000805460e160020a632c72ce19028352600483018790526c637265617465645f626c6f636b6024840152604483018290529251600160a060020a0393909316926358e59c329260648181019360209392839003909101908290876161da5a03f11561000257506040805151845280516000805460e160020a632c72ce1902835260048301899052716c6173745f757064617465645f626c6f636b6024840152604483018290529251600160a060020a03939093169450606482810193602093909290839003909101908290876161da5a03f1156100025750506040515160208301525092915050565b610c536004356024355b604080516005547fb4b9d1f100000000000000000000000000000000000000000000000000000000825260048201859052602482018490529151600092600160a060020a03169163b4b9d1f1916044828101926020929190829003018187876161da5a03f11561000257505060405151949350505050565b610c5360043560243560028054839081101561000257600082815291027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0190508160028110156100025701600091509150505481565b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080516000925b81841015610caf57602084810284010151604080838184600060046015f1509050019260010192610c83565b925050509250505060405180910390f35b5093955050505050505b60006000600060006000600060006000886000815181101561000257506020015151600114611a3057604080516020808252600f908201527f6d7573742062652070726573656e7400000000000000000000000000000000008183015290516976657273696f6e5f69649160008051602061217b833981519152919081900360600190a2611a22565b6040516000826004835b81841015610d875760208402830151604080838184600060046015f1509050019260010192610d5d565b9250505091505060405180910390f35b50939550505050505060006000600060006000600061174587604080516020808252600e908201527f63726561746520737461727465640000000000000000000000000000000000008183015290516000918291829182917fcf34ef537ac33ee1ac626ca1587a0a7e8e51561e5514f8cb36afa1c5102b3bab9181900360600190a1611ec733600087610cca565b509395505050505050600060006000610e70338686610cca565b60408051908190839080838184600060046015f15093505050f35b50505050905090565b600092505b505092915050565b60011415610e6357600091505b600154821015610ff95760005460018054600160a060020a0392909216916341ee903e91889186908110156100025760009182526002027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6019050600050546040518360e060020a02815260040180838152602001828152602001925050506000604051808303816000876161da5a03f11561000257505050600190505b8382815181101561000257602090810290910101515181116111045760005460018054600160a060020a03929092169163505fb46c9188918690811015610002576000919091526002027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154875188908790811015610002579060200190602002015185606581101561000257909060200201516040518460e060020a0281526004018084815260200183815260200182815260200193505050506000604051808303816000876161da5a03f11561000257505050600101610f1b565b600080546040805160e160020a6320f7481f02815260048101899052716c6173745f757064617465645f626c6f636b60248201529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018a9052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f1156100025750506040805187815290517f164f7b2ab803097dab5e39f06d2e4f3c3ddc5d4171abbdcc3e76443b8359c7f592509081900360200190a160019250610e68565b60019190910190610e7d565b60019190910190610750565b6000141561118957600080546040805160e260020a631417ed1b02815260048101869052656f776e6572736024820152600160a060020a0385811660448301529151929091169263505fb46c92606483810193829003018183876161da5a03f115610002575050506111f9565b611193823361074b565b156111f957604080516000805460e260020a631417ed1b02835260048301869052656f776e6572736024840152600160a060020a038581166044850152935193169263505fb46c926064818101939291829003018183876161da5a03f115610002575050505b5050565b156109ae57600080546040805160e160020a6320f7481f028152600481018590526864657374726f79656460248201529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018690526864657374726f7965646024840152600160448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f1156100025750506040805183815290517fd3f5559c9fe2c1b988daa9f5520155e1a89d750e0a7b2ee17afcd4b76dd95bcd92509081900360200190a150565b600080546040805160e260020a631417ed1b0281526004810189905260248101889052604481018790529051600160a060020a03929092169263505fb46c92606483810193829003018183876161da5a03f115610002575050604080516000805460e160020a6320f7481f028352600483018a9052716c6173745f757064617465645f626c6f636b60248401529251600160a060020a039390931693506341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018a9052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f115610002575050505b5050505050565b5060009050805b6002548110156114aa57836002600050828154811015610002576000829052027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0154141561152d5760028054829081101561000257027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf015491505b81600014806115235750600460009054906101000a9004600160a060020a0316600160a060020a0316636a030ca9836040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f11561000257505060405151600160a060020a0390811633909116141590505b156112f65761141f565b60010161142d565b600080546040805160e160020a6320f7481f02815260048101889052602481018790529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b0283526004830189905260248301889052604483018790529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f115610002575050604080516000805460e160020a6320f7481f02835260048301899052716c6173745f757064617465645f626c6f636b60248401529251600160a060020a039390931693506341ee903e92604483810193829003018183876161da5a03f115610002575050600080546040805160e260020a631417ed1b02815260048101899052716c6173745f757064617465645f626c6f636b60248201524360448201529051600160a060020a0392909216935063505fb46c926064828101939192829003018183876161da5a03f115610002575050505b50505050565b5060408051600480547f6a030ca90000000000000000000000000000000000000000000000000000000083526301000000860491830182905292519092600160a060020a031691636a030ca991602482810192602092919082900301816000876161da5a03f11561000257505060405151600160a060020a0390811633909116149050611535576116b3565b945060008514611a1257600460009054906101000a9004600160a060020a0316600160a060020a0316636a030ca96676657273696f6e6040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f11561000257505060405151885190955088915060009081101561000257604080516020938401519093015160e060020a6349fb2dc502845260048401819052676c6963656e7365736024850152604484018990529051909550600160a060020a038716926349fb2dc5926064828101939192829003018183876161da5a03f11561000257505050600460009054906101000a9004600160a060020a0316600160a060020a0316636a030ca963757365726040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f1156100025750505060405180519060200150915081600160a060020a031663743438ad336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f11561000257505060408051805160e060020a6349fb2dc502825260048201819052676c6963656e73657360248301526044820189905291519193506349fb2dc5916064828101926000929190829003018183876161da5a03f11561000257505050600060009054906101000a9004600160a060020a0316600160a060020a031663505fb46c8666757365725f6964846040518460e060020a0281526004018084815260200183815260200182815260200193505050506000604051808303816000876161da5a03f11561000257505050600560009054906101000a9004600160a060020a0316600160a060020a03166343b0e8df8285886040518460e060020a0281526004018084815260200183815260200182815260200193505050506000604051808303816000876161da5a03f115610002575050505b509295945050505050565b600197505b505050505050509392505050565b600460009054906101000a9004600160a060020a0316600160a060020a0316636a030ca96676657273696f6e6040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f1156100025750505060405180519060200150965086600160a060020a0316634d655aff6040518160e060020a0281526004018090506020604051808303816000876161da5a03f115610002575050604051518a519097508a915060009081101561000257506020015160019090602002015194508486600160a060020a03166306661abd6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040515191909110159050611ba9576040805160208082526007908201527f696e76616c6964000000000000000000000000000000000000000000000000008183015290516976657273696f6e5f69649160008051602061217b833981519152919081900360600190a260009750611a22565b600460009054906101000a9004600160a060020a0316600160a060020a0316636a030ca963757365726040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f1156100025750505060405180519060200150935083600160a060020a0316634d655aff6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040805180517f743438ad000000000000000000000000000000000000000000000000000000008252600160a060020a038f811660048401529251909650918716925063743438ad91602482810192602092919082900301816000876161da5a03f115610002575050604051519250506000821415611d4b576040805160208082526024908201527f646f65736e277420657869737420666f72207468652073656e64657220616464818301527f72657373000000000000000000000000000000000000000000000000000000006060820152905166757365725f69649160008051602061217b833981519152919081900360800190a260009750611a22565b8960001415611dec57611d5e8286610b67565b600014611dec576040805160208082526022908201527f616c7265616479206861732061206c6963656e736520666f7220746869732061818301527f70700000000000000000000000000000000000000000000000000000000000006060820152905166757365725f69649160008051602061217b833981519152919081900360800190a260009750611a22565b60008a14611a1d5782600160a060020a03166358e59c3283666164647265737360006040518460e060020a0281526004018084815260200183815260200182815260200193505050506020604051808303816000876161da5a03f11561000257505060405151915050600160a060020a038b811690821614611a1d57604080516020808252818101527f6973206e6f7420746865206f776e6572206f662074686973206c6963656e736581830152905166757365725f69649160008051602061217b833981519152919081900360600190a260009750611a22565b6001141561215d57600060009054906101000a9004600160a060020a0316600160a060020a0316639c851ebc6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505060405151935060009250505b600154821015612165575060015b8482815181101561000257505060208281028601015151811161216f5760005460018054600160a060020a03929092169163505fb46c91869186908110156100025790600052602060002090600202016000506000505488868151811015610002579060200190602002015185606581101561000257909060200201516040518460e060020a0281526004018084815260200183815260200182815260200193505050506000604051808303816000876161da5a03f11561000257505050600101611f38565b600080546040805160e260020a631417ed1b028152600481018790526864657374726f7965646024820152604481018490529051600160a060020a03929092169263505fb46c92606483810193829003018183876161da5a03f1156100025750604080516000805460e260020a631417ed1b028352600483018990526c637265617465645f626c6f636b60248401524360448401529251600160a060020a039390931694506064828101939192829003018183876161da5a03f1156100025750604080516000805460e260020a631417ed1b02835260048301899052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a039390931694506064828101939192829003018183876161da5a03f1156100025750506040805185815290517f07eac9a0695a188fe9d6fd680bcbbbe39041fb114d5d7ac11252401391f7930792509081900360200190a18293505b505050919050565b611ffe83336105ee565b60019190910190611f2a561aa3de82ed32b15e46e219f19efd6e4138a410853f46b8a761e6e7e91ccf3cfac2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85bb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6";

  if ("0x549cf649e21d540e4b6895c91a83acd5dc8cdc74" != "") {
    LicenseModel.address = "0x549cf649e21d540e4b6895c91a83acd5dc8cdc74";

    // Backward compatibility; Deprecated.
    LicenseModel.deployed_address = "0x549cf649e21d540e4b6895c91a83acd5dc8cdc74";
  }

  LicenseModel.generated_with = "1.0.2";
  LicenseModel.contract_name = "LicenseModel";

  return LicenseModel;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.LicenseModel = factory;
}