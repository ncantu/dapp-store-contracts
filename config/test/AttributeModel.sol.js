"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var AttributeModel = (function (_Pudding) {
    _inherits(AttributeModel, _Pudding);

    function AttributeModel() {
      _classCallCheck(this, AttributeModel);

      _get(Object.getPrototypeOf(AttributeModel.prototype), "constructor", this).apply(this, arguments);
    }

    return AttributeModel;
  })(Pudding);

  ;

  // Set up specific data for this class.
  AttributeModel.abi = [{ "constant": true, "inputs": [], "name": "coordinator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "read_only", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_keys", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_read_only_keys", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "association_name", "type": "uint256" }, { "name": "association_id", "type": "uint256" }], "name": "add_to_association", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "db", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_associations", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "has_owners", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "sender", "type": "address" }, { "name": "id", "type": "uint256" }, { "name": "attributes", "type": "uint256[101][]" }], "name": "validate", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "keys", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "get_default_keys", "outputs": [{ "name": "", "type": "uint256[2][4]" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }], "name": "destroy", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "owner", "type": "address" }], "name": "add_owner", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "attributes", "type": "uint256[101][]" }], "name": "create", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "replacement", "type": "address" }], "name": "replace", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "to_check", "type": "address" }], "name": "is_owner", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "is_destroyed", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_coordinator", "type": "address" }], "name": "set_coordinator", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "reference_name", "type": "uint256" }, { "name": "reference_id", "type": "uint256" }], "name": "set_reference", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_db", "type": "address" }], "name": "set_db", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "attributes", "type": "uint256[101][]" }], "name": "update", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "get_blocks_for", "outputs": [{ "name": "", "type": "uint256[2]" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "associations", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "reason", "type": "string" }], "name": "Log", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Create", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Update", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Destroy", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "key", "type": "uint256" }, { "indexed": false, "name": "reason", "type": "string" }], "name": "ValidationError", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "reason", "type": "string" }], "name": "GeneralError", "type": "event" }];
  AttributeModel.binary = "606060405260048054600160a060020a03191633179055600460016000508181548183558181151161005e5760020281600202836000526020600020918201910161005e91905b8082111561021f576000808255908501908155610046565b50508054626b65799250600090811015610002579081526000805160206120dc833981519152905055600180546476616c75659190819081101561000257506000805160206120bc833981519152919091558054676d6f64656c5f69649190600290811015610002575060008051602061209c833981519152919091558054696d6f64656c5f74797065919060039081101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfc91909155805465737472696e679190600090811015610002576000805160206120dc83398151915291505060019090016000508190555065737472696e6760016000506001815481101561000257506000805160206120bc833981519152905060005060019090016000508190555074706f6c796d6f72706869635f7265666572656e6365600160005060028154811015610002575060008051602061209c83398151915290506000506001909001600050819055506f706f6c796d6f72706869635f747970656001600050600381548110156100025750507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfd55611e78806102246000396000f35b50905600606060405236156101115760e060020a60003504630a00909781146101135780631e3dbb27146101255780633fda12811461016457806341d31feb146101e757806349fb2dc51461026a5780634d655aff146102d7578063582ca57b146102e9578063595da94d1461036c57806367f12ecf146103e05780638b935fb1146104575780638ee21b8e146104965780639d118770146105ac578063b56b2627146105bc578063c27d7721146105cf578063cabfb9341461063f578063d716222c146106c3578063db6fcf01146107cb578063de778edb14610848578063e2deaa8114610888578063e7156dbe146108f7578063eb121e2f14610933578063ebd83378146109a5578063ffd1d50414610add575b005b610b34600454600160a060020a031681565b610b5160043560243560038054839081101561000257906000526020600020906002020160005081600281101561000257909001600091509150505481565b6040805160208181018352600080835283516001805480850283018501909652858252610b6395919390929084015b82821015610d875760008481526040805160209092208282019182905260028581029091019182845b8160005054815260200190600101908083116101bc575b505050505081526020019060010190610193565b6040805160208181018352600080835283516003805480850283018501909652858252610b6395919390929084015b82821015610d875760008481526040805160209092208282019182905260028581029091019182845b81600050548152602001906001019080831161023f575b505050505081526020019060010190610216565b610111600435602435604435600080546040805160e160020a636667bd470281526004810187905290518392600160a060020a03169163cccf7a8e916024828101926020929190829003018187876161da5a03f11561000257505060405151821415905061132d57611326565b610b34600054600160a060020a031681565b6040805160208181018352600080835283516002805480850283018501909652858252610b6395919390929084015b82821015610d875760008481526040805160209092208282019182905260028581029091019182845b816000505481526020019060010190808311610341575b505050505081526020019060010190610318565b610b516004355b600080546040805160e160020a631280840b02815260048101859052656f776e65727360248201529051600160a060020a039290921691632501081691604481810192602092909190829003018187876161da5a03f115610002575050604051519091141590505b919050565b60408051604435600481810135602081810285018101909552808452610b51948235946024803595606494929391019190819060009085015b82821015610bbe5760408051610ca0818101909252908381028701906065908390839080828437820191505050505081526020019060010190610419565b610b5160043560243560018054839081101561000257906000526020600020906002020160005081600281101561000257909001600091509150505481565b610c82610100604051908101604052806004905b6040604051908101604052806002905b60008152602001906001900390816104ba579050508152602001906001900390816104aa5750506040805161010081019091526004815b6040604051908101604052806002905b6000815260200190600190039081610501579050508152602001906001900390816104f157505080516c637265617465645f626c6f636b9052805166696e746567657260209182018190528282018051716c6173745f757064617465645f626c6f636b905251820152604082018051656f776e6572739052516c696e74656765725f6172726179908201526060820180516864657374726f79656490525163626f6f6c910152919050565b61011160043561110481336106cd565b6101116004356024355b61102382610373565b604080516004803580820135602081810285018101909552808452610b51949293602493909284019190819060009085015b82821015610cc65760408051610ca0818101909252908381028701906065908390839080828437820191505050505081526020019060010190610601565b610111600435600454600160a060020a039081163390911614156109305760008054604080517ff0350c04000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301529151929091169263f0350c0492602483810193829003018183876161da5a03f1156100025750505050565b610b516004356024355b600080805b600080546040805160e160020a631280840b02815260048101899052656f776e65727360248201529051600160a060020a03929092169263250108169260448381019360209390839003909101908290876161da5a03f1156100025750506040515160ff841610159050610d9057604080516000805460e160020a632c72ce1902835260048301899052656f776e657273602484015260ff861660448401529251600160a060020a0393909316926358e59c329260648181019360209392839003909101908290876161da5a03f11561000257505060405151915050600160a060020a0384811690821614156110175760019250610d95565b610b51600435600080546040805160e160020a632c72ce19028152600481018590526864657374726f7965646024820152604481018490529051600160a060020a0392909216916358e59c3291606481810192602092909190829003018187876161da5a03f1156100025750506040515160011491506103db9050565b610111600435600454600160a060020a03908116339091161415610930576004805473ffffffffffffffffffffffffffffffffffffffff19168217905550565b610111600435602435604435600080546040805160e160020a636667bd47028152600481018790529051600160a060020a03929092169163cccf7a8e91602481810192602092909190829003018187876161da5a03f1156100025750506040515182141590506115c1576115bb565b61011160043560008054600160a060020a03161415610930576000805473ffffffffffffffffffffffffffffffffffffffff1916821790555b50565b6040805160248035600481810135602081810286018101909652808552610b51958235959294604494019190819060009085015b82821015610d525760408051610ca0818101909252908381028701906065908390839080828437820191505050505081526020019060010190610967565b610d6c6004356040604051908101604052806002905b60008152602001906001900390816109bb575050604080518082019091526002815b60008152602001906001900390816109dd575050600080546040805160e160020a632c72ce19028152600481018790526c637265617465645f626c6f636b6024820152604481018490529051600160a060020a0392909216926358e59c329260648381019360209390839003909101908290876161da5a03f11561000257506040805151845260008054825160e160020a632c72ce1902815260048101899052716c6173745f757064617465645f626c6f636b6024820152604481018390529251600160a060020a0391909116945060648381019360209390839003909101908290876161da5a03f1156100025750506040515160208301525092915050565b610b5160043560243560028054839081101561000257600082815291027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0190508160028110156100025701600091509150505481565b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080516000925b81841015610bad57602084810284010151604080838184600060046015f1509050019260010192610b81565b925050509250505060405180910390f35b5093955050505050505b6000808080805b60015484101561173857858481518110156100025760209081029091010151516000141561180c576001805485908110156100025760009190915260408051600292909202600080516020611e5883398151915201546020808452600f908401527f6d7573742062652070726573656e7400000000000000000000000000000000008383015290519091600080516020611e38833981519152919081900360600190a2600094505b505050509392505050565b6040516000826004835b81841015610cb65760208402830151604080838184600060046015f1509050019260010192610c8c565b9250505091505060405180910390f35b5093955050505050506000600060006000600061163786604080516020808252600e908201527f63726561746520737461727465640000000000000000000000000000000000008183015290516000918291829182917fcf34ef537ac33ee1ac626ca1587a0a7e8e51561e5514f8cb36afa1c5102b3bab9181900360600190a1611b7e33600087610bc8565b509395505050505050600060006000610d9d338686610bc8565b60408051908190839080838184600060046015f15093505050f35b50505050905090565b600092505b505092915050565b60011415610d9057600091505b600154821015610f005760005460018054600160a060020a0392909216916341ee903e9188918690811015610002576000918252600202600080516020611e5883398151915201546040805160e160020a6320f7481f0281526004810194909452602484019190915251604483810193829003018183876161da5a03f11561000257505050600190505b83828151811015610002576020908102909101015151811161100b5760005460018054600160a060020a03929092169163505fb46c918891869081101561000257600091909152600202600080516020611e588339815191520154875188908790811015610002579060200190602002015185606581101561000257909060200201516040518460e060020a0281526004018084815260200183815260200182815260200193505050506000604051808303816000876161da5a03f11561000257505050600101610e34565b600080546040805160e160020a6320f7481f02815260048101899052716c6173745f757064617465645f626c6f636b60248201529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018a9052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f1156100025750506040805187815290517f164f7b2ab803097dab5e39f06d2e4f3c3ddc5d4171abbdcc3e76443b8359c7f592509081900360200190a160019250610d95565b60019190910190610daa565b600191909101906106d2565b6000141561109057604080516000805460e260020a631417ed1b02835260048301869052656f776e6572736024840152600160a060020a038581166044850152935193169263505fb46c926064818101939291829003018183876161da5a03f11561000257505050611100565b61109a82336106cd565b1561110057600080546040805160e260020a631417ed1b02815260048101869052656f776e6572736024820152600160a060020a0385811660448301529151929091169263505fb46c92606483810193829003018183876161da5a03f115610002575050505b5050565b1561093057600080546040805160e160020a6320f7481f028152600481018590526864657374726f79656460248201529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018690526864657374726f7965646024840152600160448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f1156100025750506040805183815290517fd3f5559c9fe2c1b988daa9f5520155e1a89d750e0a7b2ee17afcd4b76dd95bcd92509081900360200190a150565b600080546040805160e260020a631417ed1b0281526004810189905260248101889052604481018790529051600160a060020a03929092169263505fb46c92606483810193829003018183876161da5a03f115610002575050604080516000805460e160020a6320f7481f028352600483018a9052716c6173745f757064617465645f626c6f636b60248401529251600160a060020a039390931693506341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018a9052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f115610002575050505b5050505050565b5060009050805b6002548110156113b257836002600050828154811015610002576000829052027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0154141561143557600280548290811015610002577f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf9102015491505b816000148061142b5750600460009054906101000a9004600160a060020a0316600160a060020a0316636a030ca9836040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f11561000257505060405151600160a060020a0390811633909116141590505b156111fd57611326565b600101611334565b600080546040805160e160020a6320f7481f02815260048101889052602481018790529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b0283526004830189905260248301889052604483018790529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f115610002575050604080516000805460e160020a6320f7481f02835260048301899052716c6173745f757064617465645f626c6f636b60248401529251600160a060020a039390931693506341ee903e92604483810193829003018183876161da5a03f115610002575050600080546040805160e260020a631417ed1b02815260048101899052716c6173745f757064617465645f626c6f636b60248201524360448201529051600160a060020a0392909216935063505fb46c926064828101939192829003018183876161da5a03f115610002575050505b50505050565b50604080516004805460e060020a636a030ca90283526301000000860491830182905292519092600160a060020a031691636a030ca991602482810192602092919082900301816000876161da5a03f11561000257505060405151600160a060020a039081163390911614905061143d576115bb565b93506000841461172e5785600281518110156100025750805160608201516020015194506003908110156100025750506080860151600150604080516020928301516004805460e060020a636a030ca90284529083018290529251909550600160a060020a039290921692636a030ca99260248381019382900301816000876161da5a03f1156100025750505060405180519060200150905080600160a060020a03166349fb2dc5846961747472696275746573876040518460e060020a0281526004018084815260200183815260200182815260200193505050506000604051808303816000876161da5a03f115610002575050505b5091949350505050565b63646170708660038151811015610002575060800151602001511480159061177d575068646576656c6f70657286600381518110156100025750608001516020015114155b15611907576040805160208082526030908201527f68617320756e6b6e6f776e2076616c75653b206d757374206265202764617070818301527f27206f722027646576656c6f706572270000000000000000000000000000000060608201529051696d6f64656c5f7479706591600080516020611e38833981519152919081900360800190a260009450610c77565b65737472696e676001600050858154811015610002576000919091526002027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7015414801590611872575085848151811015610002576020908102909101015151600114155b156118fb576001805485908110156100025760009190915260408051600292909202600080516020611e5883398151915201546020808452600a908401527f697320696e76616c6964000000000000000000000000000000000000000000008383015290519091600080516020611e38833981519152919081900360600190a260009450610c77565b60019390930192610bcf565b60008714611aae57600080546040805160e160020a632c72ce19028152600481018b9052676d6f64656c5f69646024820152604481018490529051600160a060020a0392909216926358e59c329260648381019360209390839003909101908290876161da5a03f11561000257506040805180516000805460e160020a632c72ce19028452600484018e9052696d6f64656c5f747970656024850152604484018290529351919850600160a060020a03939093169450606482810193602093839003909101908290876161da5a03f11561000257505060405151925060009150505b600154811015611aae57676d6f64656c5f6964600160005082815481101561000257600091909152600202600080516020611e588339815191520154148015611a4957508286828151811015610002576020908102909101810151015114155b15611ab757604080516020808252818101527f63616e6e6f74206265206368616e676564206166746572206372656174652829818301529051676d6f64656c5f696491600080516020611e38833981519152919081900360600190a260009450610c77565b60019450610c77565b696d6f64656c5f74797065600160005082815481101561000257600091909152600202600080516020611e588339815191520154148015611b0f57508186828151811015610002576020908102909101810151015114155b15611b7657604080516020808252818101527f63616e6e6f74206265206368616e676564206166746572206372656174652829818301529051696d6f64656c5f7479706591600080516020611e38833981519152919081900360600190a260009450610c77565b6001016119e9565b60011415611e1a57600060009054906101000a9004600160a060020a0316600160a060020a0316639c851ebc6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505060405151935060009250505b600154821015611e22575060015b848281518110156100025760209081029091010151518111611e2c5760005460018054600160a060020a03929092169163505fb46c918691869081101561000257600091909152600202600080516020611e588339815191520154885189908790811015610002579060200190602002015185606581101561000257909060200201516040518460e060020a0281526004018084815260200183815260200182815260200193505050506000604051808303816000876161da5a03f11561000257505050600101611bef565b600080546040805160e260020a631417ed1b028152600481018790526864657374726f7965646024820152604481018490529051600160a060020a03929092169263505fb46c92606483810193829003018183876161da5a03f1156100025750604080516000805460e260020a631417ed1b028352600483018990526c637265617465645f626c6f636b60248401524360448401529251600160a060020a039390931694506064828101939192829003018183876161da5a03f1156100025750604080516000805460e260020a631417ed1b02835260048301899052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a039390931694506064828101939192829003018183876161da5a03f1156100025750506040805185815290517f07eac9a0695a188fe9d6fd680bcbbbe39041fb114d5d7ac11252401391f7930792509081900360200190a18293505b505050919050565b611cbb83336105c6565b60019190910190611be1561aa3de82ed32b15e46e219f19efd6e4138a410853f46b8a761e6e7e91ccf3cfab10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfab10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf8b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6";

  if ("0x93bbb57590aad225b9697cd0833dfc8557340d37" != "") {
    AttributeModel.address = "0x93bbb57590aad225b9697cd0833dfc8557340d37";

    // Backward compatibility; Deprecated.
    AttributeModel.deployed_address = "0x93bbb57590aad225b9697cd0833dfc8557340d37";
  }

  AttributeModel.generated_with = "1.0.2";
  AttributeModel.contract_name = "AttributeModel";

  return AttributeModel;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.AttributeModel = factory;
}