"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var ReviewModel = (function (_Pudding) {
    _inherits(ReviewModel, _Pudding);

    function ReviewModel() {
      _classCallCheck(this, ReviewModel);

      _get(Object.getPrototypeOf(ReviewModel.prototype), "constructor", this).apply(this, arguments);
    }

    return ReviewModel;
  })(Pudding);

  ;

  // Set up specific data for this class.
  ReviewModel.abi = [{ "constant": true, "inputs": [], "name": "coordinator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "read_only", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_keys", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_read_only_keys", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "association_name", "type": "uint256" }, { "name": "association_id", "type": "uint256" }], "name": "add_to_association", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "db", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_associations", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "has_owners", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "sender", "type": "address" }, { "name": "id", "type": "uint256" }, { "name": "attributes", "type": "uint256[101][]" }], "name": "validate", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "keys", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "get_default_keys", "outputs": [{ "name": "", "type": "uint256[2][4]" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }], "name": "destroy", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "owner", "type": "address" }], "name": "add_owner", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "attributes", "type": "uint256[101][]" }], "name": "create", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "replacement", "type": "address" }], "name": "replace", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "to_check", "type": "address" }], "name": "is_owner", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "is_destroyed", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_coordinator", "type": "address" }], "name": "set_coordinator", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "reference_name", "type": "uint256" }, { "name": "reference_id", "type": "uint256" }], "name": "set_reference", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_db", "type": "address" }], "name": "set_db", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "attributes", "type": "uint256[101][]" }], "name": "update", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "get_blocks_for", "outputs": [{ "name": "", "type": "uint256[2]" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "associations", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "reason", "type": "string" }], "name": "Log", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Create", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Update", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Destroy", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "key", "type": "uint256" }, { "indexed": false, "name": "reason", "type": "string" }], "name": "ValidationError", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "reason", "type": "string" }], "name": "GeneralError", "type": "event" }];
  ReviewModel.binary = "606060405260048054600160a060020a03191633179055600660016000508181548183558181151161008457600083905261008490600202600080516020612421833981519152017fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0d025b808211156103a5576000808255600191909101908155610069565b50505050676d6f64656c5f696460016000506000815481101561000257819052600080516020612421833981519152919091558054696d6f64656c5f747970659190819081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf891909155805465726174696e67919060029081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfa9190915580546364617465919060039081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfc919091558054667375626a656374919060049081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfe9190915580546374657874919060059081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0d0091909155805474706f6c796d6f72706869635f7265666572656e6365919060009081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf79190915580546f706f6c796d6f72706869635f747970659190819081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf991909155805466696e7465676572919060029081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfb919091558054676461746574696d65919060039081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfd91909155805465737472696e67919060049081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cff829055805460059081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0d019190915560038054828255829080158290116103a95760008390526103a990600202600080516020612401833981519152017fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d610069565b5090565b505050506661646472657373600360005060008154811015610002578181526000805160206124018339815191528390558154811015610002577fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c9290925550611fe890819061041990396000f300606060405236156101115760e060020a60003504630a00909781146101135780631e3dbb27146101255780633fda12811461016457806341d31feb146101e757806349fb2dc51461026a5780634d655aff146102d7578063582ca57b146102e9578063595da94d1461036c57806367f12ecf146103e05780638b935fb1146104575780638ee21b8e146104965780639d118770146105ac578063b56b2627146105bc578063c27d7721146105cf578063cabfb9341461063f578063d716222c146106c3578063db6fcf01146107cb578063de778edb14610848578063e2deaa8114610888578063e7156dbe146108f7578063eb121e2f14610933578063ebd83378146109a5578063ffd1d50414610add575b005b610b34600454600160a060020a031681565b610b5160043560243560038054839081101561000257906000526020600020906002020160005081600281101561000257909001600091509150505481565b6040805160208181018352600080835283516001805480850283018501909652858252610b6395919390929084015b82821015610fee5760008481526040805160209092208282019182905260028581029091019182845b8160005054815260200190600101908083116101bc575b505050505081526020019060010190610193565b6040805160208181018352600080835283516003805480850283018501909652858252610b6395919390929084015b82821015610fee5760008481526040805160209092208282019182905260028581029091019182845b81600050548152602001906001019080831161023f575b505050505081526020019060010190610216565b610111600435602435604435600080546040805160e160020a636667bd470281526004810187905290518392600160a060020a03169163cccf7a8e916024828101926020929190829003018187876161da5a03f11561000257505060405151821415905061130d57611306565b610b34600054600160a060020a031681565b6040805160208181018352600080835283516002805480850283018501909652858252610b6395919390929084015b82821015610fee5760008481526040805160209092208282019182905260028581029091019182845b816000505481526020019060010190808311610341575b505050505081526020019060010190610318565b610b516004355b600080546040805160e160020a631280840b02815260048101859052656f776e65727360248201529051600160a060020a039290921691632501081691604481810192602092909190829003018187876161da5a03f115610002575050604051519091141590505b919050565b60408051604435600481810135602081810285018101909552808452610b51948235946024803595606494929391019190819060009085015b82821015610bbe5760408051610ca0818101909252908381028701906065908390839080828437820191505050505081526020019060010190610419565b610b5160043560243560018054839081101561000257906000526020600020906002020160005081600281101561000257909001600091509150505481565b610c3c610100604051908101604052806004905b6040604051908101604052806002905b60008152602001906001900390816104ba579050508152602001906001900390816104aa5750506040805161010081019091526004815b6040604051908101604052806002905b6000815260200190600190039081610501579050508152602001906001900390816104f157505080516c637265617465645f626c6f636b9052805166696e746567657260209182018190528282018051716c6173745f757064617465645f626c6f636b905251820152604082018051656f776e6572739052516c696e74656765725f6172726179908201526060820180516864657374726f79656490525163626f6f6c910152919050565b6101116004356110e481336106cd565b6101116004356024355b61100382610373565b604080516004803580820135602081810285018101909552808452610b51949293602493909284019190819060009085015b82821015610c805760408051610ca0818101909252908381028701906065908390839080828437820191505050505081526020019060010190610601565b610111600435600454600160a060020a039081163390911614156109305760008054604080517ff0350c04000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301529151929091169263f0350c0492602483810193829003018183876161da5a03f1156100025750505050565b610b516004356024355b600080805b600080546040805160e160020a631280840b02815260048101899052656f776e65727360248201529051600160a060020a03929092169263250108169260448381019360209390839003909101908290876161da5a03f1156100025750506040515160ff841610159050610d4357604080516000805460e160020a632c72ce1902835260048301899052656f776e657273602484015260ff861660448401529251600160a060020a0393909316926358e59c329260648181019360209392839003909101908290876161da5a03f11561000257505060405151915050600160a060020a038481169082161415610ff75760019250610d48565b610b51600435600080546040805160e160020a632c72ce19028152600481018590526864657374726f7965646024820152604481018490529051600160a060020a0392909216916358e59c3291606481810192602092909190829003018187876161da5a03f1156100025750506040515160011491506103db9050565b610111600435600454600160a060020a03908116339091161415610930576004805473ffffffffffffffffffffffffffffffffffffffff19168217905550565b610111600435602435604435600080546040805160e160020a636667bd47028152600481018790529051600160a060020a03929092169163cccf7a8e91602481810192602092909190829003018187876161da5a03f1156100025750506040515182141590506115a05761159a565b61011160043560008054600160a060020a03161415610930576000805473ffffffffffffffffffffffffffffffffffffffff1916821790555b50565b6040805160248035600481810135602081810286018101909652808552610b51958235959294604494019190819060009085015b82821015610d0e5760408051610ca0818101909252908381028701906065908390839080828437820191505050505081526020019060010190610967565b610d286004356040604051908101604052806002905b60008152602001906001900390816109bb575050604080518082019091526002815b60008152602001906001900390816109dd575050600080546040805160e160020a632c72ce19028152600481018790526c637265617465645f626c6f636b6024820152604481018490529051600160a060020a0392909216926358e59c329260648381019360209390839003909101908290876161da5a03f11561000257506040805151845260008054825160e160020a632c72ce1902815260048101899052716c6173745f757064617465645f626c6f636b6024820152604481018390529251600160a060020a0391909116945060648381019360209390839003909101908290876161da5a03f1156100025750506040515160208301525092915050565b610b5160043560243560028054839081101561000257600082815291027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0190508160028110156100025701600091509150505481565b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080516000925b81841015610bad57602084810284010151604080838184600060046015f1509050019260010192610b81565b925050509250505060405180910390f35b5093955050505050505b600060006000600084600081518110156100025750602001515160011461197d57604080516020808252600f90820152608a60020a6e1b5d5cdd081899481c1c995cd95b9d02818301529051676d6f64656c5f696491600080516020611fc8833981519152919081900360600190a2611973565b6040516000826004835b81841015610c705760208402830151604080838184600060046015f1509050019260010192610c46565b9250505091505060405180910390f35b50939550505050505060006000600060006000600061161687604080516020808252600e908201527f63726561746520737461727465640000000000000000000000000000000000008183015290516000918291829182917fcf34ef537ac33ee1ac626ca1587a0a7e8e51561e5514f8cb36afa1c5102b3bab9181900360600190a1611cfc33600087610bc8565b509395505050505050600060006000610d50338686610bc8565b60408051908190839080838184600060046015f15093505050f35b600092505b505092915050565b60011415610d4357600091505b600154821015610ed75760005460018054600160a060020a0392909216916341ee903e91889186908110156100025760009182526002027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601546040805160e160020a6320f7481f0281526004810194909452602484019190915251604483810193829003018183876161da5a03f11561000257505050600190505b838281518110156100025760209081029091010151518111610fe25760005460018054600160a060020a03929092169163505fb46c9188918690811015610002576000919091526002027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154875188908790811015610002579060200190602002015185606581101561000257909060200201516040518460e060020a0281526004018084815260200183815260200182815260200193505050506000604051808303816000876161da5a03f11561000257505050600101610df9565b600080546040805160e160020a6320f7481f02815260048101899052716c6173745f757064617465645f626c6f636b60248201529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018a9052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f1156100025750506040805187815290517f164f7b2ab803097dab5e39f06d2e4f3c3ddc5d4171abbdcc3e76443b8359c7f592509081900360200190a160019250610d48565b60019190910190610d5d565b50505050905090565b600191909101906106d2565b6000141561107057604080516000805460e260020a631417ed1b02835260048301869052656f776e6572736024840152600160a060020a038581166044850152935193169263505fb46c926064818101939291829003018183876161da5a03f115610002575050506110e0565b61107a82336106cd565b156110e057600080546040805160e260020a631417ed1b02815260048101869052656f776e6572736024820152600160a060020a0385811660448301529151929091169263505fb46c92606483810193829003018183876161da5a03f115610002575050505b5050565b1561093057600080546040805160e160020a6320f7481f028152600481018590526864657374726f79656460248201529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018690526864657374726f7965646024840152600160448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f1156100025750506040805183815290517fd3f5559c9fe2c1b988daa9f5520155e1a89d750e0a7b2ee17afcd4b76dd95bcd92509081900360200190a150565b600080546040805160e260020a631417ed1b0281526004810189905260248101889052604481018790529051600160a060020a03929092169263505fb46c92606483810193829003018183876161da5a03f115610002575050604080516000805460e160020a6320f7481f028352600483018a9052716c6173745f757064617465645f626c6f636b60248401529251600160a060020a039390931693506341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018a9052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f115610002575050505b5050505050565b5060009050805b60025481101561139157836002600050828154811015610002576000829052027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace015414156114145760028054829081101561000257027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf015491505b816000148061140a5750600460009054906101000a9004600160a060020a0316600160a060020a0316636a030ca9836040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f11561000257505060405151600160a060020a0390811633909116141590505b156111dd57611306565b600101611314565b600080546040805160e160020a6320f7481f02815260048101889052602481018790529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b0283526004830189905260248301889052604483018790529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f115610002575050604080516000805460e160020a6320f7481f02835260048301899052716c6173745f757064617465645f626c6f636b60248401529251600160a060020a039390931693506341ee903e92604483810193829003018183876161da5a03f115610002575050600080546040805160e260020a631417ed1b02815260048101899052716c6173745f757064617465645f626c6f636b60248201524360448201529051600160a060020a0392909216935063505fb46c926064828101939192829003018183876161da5a03f115610002575050505b50505050565b50604080516004805460e060020a636a030ca90283526301000000860491830182905292519092600160a060020a031691636a030ca991602482810192602092919082900301816000876161da5a03f11561000257505060405151600160a060020a039081163390911614905061141c5761159a565b9450600085146119635768646576656c6f70657287600181518110156100025750506040880151602001511415611791576004548751600160a060020a039190911690636a030ca9908990600190811015610002575050604080518a82015160209081015160e060020a636a030ca9028352600483015291516024828101939282900301816000876161da5a03f11561000257505060405151885190955088915060009081101561000257604080516020938401519093015160e060020a6349fb2dc50284526004840181905266726576696577736024850152604484018990529051909550600160a060020a038716926349fb2dc5926064828101939192829003018183876161da5a03f1156100025750505083600160a060020a031663bd11996784896002815181101561000257505060608a01516001909060200201516040518360e060020a02815260040180838152602001828152602001925050506000604051808303816000876161da5a03f115610002575050505b6676657273696f6e87600181518110156100025750506040880151602001511415611900576004548751600160a060020a039190911690636a030ca9908990600190811015610002575050604080518a82015160209081015160e060020a636a030ca9028352600483015291516024828101939282900301816000876161da5a03f11561000257505060405151885190935088915060009081101561000257604080516020938401519093015160e060020a6349fb2dc50284526004840181905266726576696577736024850152604484018990529051909350600160a060020a038516926349fb2dc5926064828101939192829003018183876161da5a03f1156100025750505081600160a060020a031663bd11996782896002815181101561000257505060608a01516001909060200201516040518360e060020a02815260040180838152602001828152602001925050506000604051808303816000876161da5a03f115610002575050505b600080546040805160e260020a631417ed1b028152600481018990526661646472657373602482015233600160a060020a0390811660448301529151929091169263505fb46c92606483810193829003018183876161da5a03f115610002575050505b509295945050505050565b600193505b5050509392505050565b8460018151811015610002576040919091015151146119ef57604080516020808252600f90820152608a60020a6e1b5d5cdd081899481c1c995cd95b9d02818301529051696d6f64656c5f7479706591600080516020611fc8833981519152919081900360600190a260009350611973565b68646576656c6f70657285600181518110156100025750604001516020015114801590611a3757506676657273696f6e85600181518110156100025750604001516020015114155b15611a8d5760408051602080825260079082015260ca60020a661a5b9d985b1a5902818301529051696d6f64656c5f7479706591600080516020611fc8833981519152919081900360600190a260009350611973565b8451600454600160a060020a031690636a030ca99087906001908110156100025750604080519181015160209081015160e060020a636a030ca90284526004840152905160248381019382900301816000876161da5a03f1156100025750505060405180519060200150925082600160a060020a0316634d655aff6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505060405151865190935086915060009081101561000257506020015160019090602002015190508082600160a060020a03166306661abd6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040515191909110159050611bf25760408051602080825260079082015260ca60020a661a5b9d985b1a5902818301529051676d6f64656c5f696491600080516020611fc8833981519152919081900360600190a260009350611973565b846002815181101561000257506060015151600114611c6057604080516020808252600f90820152608a60020a6e1b5d5cdd081899481c1c995cd95b9d0281830152905165726174696e6791600080516020611fc8833981519152919081900360600190a260009350611973565b60018560028151811015610002575060600151602001511080611c9757506005856002815181101561000257506060015160200151115b1561196e576040805160208082526017908201527f6d757374206265206265747765656e203120616e64203500000000000000000081830152905165726174696e6791600080516020611fc8833981519152919081900360600190a260009350611973565b60011415611faa57600060009054906101000a9004600160a060020a0316600160a060020a0316639c851ebc6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505060405151935060009250505b600154821015611fb2575060015b848281518110156100025760209081029091010151518111611fbc5760005460018054600160a060020a03929092169163505fb46c9186918690811015610002576000919091526002027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154885189908790811015610002579060200190602002015185606581101561000257909060200201516040518460e060020a0281526004018084815260200183815260200182815260200193505050506000604051808303816000876161da5a03f11561000257505050600101611d6d565b600080546040805160e260020a631417ed1b028152600481018790526864657374726f7965646024820152604481018490529051600160a060020a03929092169263505fb46c92606483810193829003018183876161da5a03f1156100025750604080516000805460e260020a631417ed1b028352600483018990526c637265617465645f626c6f636b60248401524360448401529251600160a060020a039390931694506064828101939192829003018183876161da5a03f1156100025750604080516000805460e260020a631417ed1b02835260048301899052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a039390931694506064828101939192829003018183876161da5a03f1156100025750506040805185815290517f07eac9a0695a188fe9d6fd680bcbbbe39041fb114d5d7ac11252401391f7930792509081900360200190a18293505b505050919050565b611e4b83336105c6565b60019190910190611d5f561aa3de82ed32b15e46e219f19efd6e4138a410853f46b8a761e6e7e91ccf3cfac2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85bb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6";

  if ("0xea4fd8428aad1a443b0fc7504d2a9bcd302a2deb" != "") {
    ReviewModel.address = "0xea4fd8428aad1a443b0fc7504d2a9bcd302a2deb";

    // Backward compatibility; Deprecated.
    ReviewModel.deployed_address = "0xea4fd8428aad1a443b0fc7504d2a9bcd302a2deb";
  }

  ReviewModel.generated_with = "1.0.2";
  ReviewModel.contract_name = "ReviewModel";

  return ReviewModel;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.ReviewModel = factory;
}