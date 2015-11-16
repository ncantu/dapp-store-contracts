"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var UserModel = (function (_Pudding) {
    _inherits(UserModel, _Pudding);

    function UserModel() {
      _classCallCheck(this, UserModel);

      _get(Object.getPrototypeOf(UserModel.prototype), "constructor", this).apply(this, arguments);
    }

    return UserModel;
  })(Pudding);

  ;

  // Set up specific data for this class.
  UserModel.abi = [{ "constant": true, "inputs": [], "name": "coordinator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "read_only", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_keys", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_read_only_keys", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "association_name", "type": "uint256" }, { "name": "association_id", "type": "uint256" }], "name": "add_to_association", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "db", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "get_associations", "outputs": [{ "name": "", "type": "uint256[2][]" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "has_owners", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "sender", "type": "address" }, { "name": "id", "type": "uint256" }, { "name": "attributes", "type": "uint256[101][]" }], "name": "validate", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_address", "type": "address" }], "name": "id_for_address", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "keys", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "get_default_keys", "outputs": [{ "name": "", "type": "uint256[2][4]" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }], "name": "destroy", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "owner", "type": "address" }], "name": "add_owner", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "attributes", "type": "uint256[101][]" }], "name": "create", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "replacement", "type": "address" }], "name": "replace", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "address_index", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "to_check", "type": "address" }], "name": "is_owner", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "is_destroyed", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_coordinator", "type": "address" }], "name": "set_coordinator", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "reference_name", "type": "uint256" }, { "name": "reference_id", "type": "uint256" }], "name": "set_reference", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_db", "type": "address" }], "name": "set_db", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "attributes", "type": "uint256[101][]" }], "name": "update", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "get_blocks_for", "outputs": [{ "name": "", "type": "uint256[2]" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "associations", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "_address_index", "type": "address" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "reason", "type": "string" }], "name": "Log", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Create", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Update", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }], "name": "Destroy", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "key", "type": "uint256" }, { "indexed": false, "name": "reason", "type": "string" }], "name": "ValidationError", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "reason", "type": "string" }], "name": "GeneralError", "type": "event" }];
  UserModel.binary = "6060604052604051602080611e1283395060806040525160048054600160a060020a0319163317905580600160a060020a03166000141561004b57608060fa806101fe8339906000f090505b60058054600160a060020a03191682179055600180548180558190819080158290116100ca5760008290526100ca90600202600080516020611df2833981519152017fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf85b8082111561017d5760008082556001919091019081556100af565b50505050666164647265737360016000506000815481101561000257818152600080516020611df2833981519152839055815481101561000257507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7919091556002805482825582908015829011610181576000839052610181908302600080516020611dd2833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad06100af565b5090565b50505050676c6963656e73657360026000506000815481101561000257818152600080516020611dd2833981519152929092558054666c6963656e73659290811015610002577f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf9290925550611ada915081906102f890396000f300606060405260018054600160a060020a0319163317905560d88060226000396000f3606060405260e060020a60003504630a874df6811460385780631ab06ee5146055578063f0350c04146089578063f851a4401460c7575b005b6004356000908152602081905260409020545b6060908152602090f35b603660043560243560015433600160a060020a039081169116141560855760008281526020819052604090208190555b5050565b603660043560015433600160a060020a039081169116141560c4576001805473ffffffffffffffffffffffffffffffffffffffff1916821790555b50565b604b600154600160a060020a03168156606060405236156101275760e060020a60003504630a00909781146101295780631e3dbb271461013b5780633fda12811461017a57806341d31feb146101fd57806349fb2dc5146102805780634d655aff146102ed578063582ca57b146102ff578063595da94d1461038257806367f12ecf146103f6578063743438ad1461046d5780638b935fb1146104d35780638ee21b8e146105125780639d11877014610628578063b56b262714610638578063c27d77211461064b578063cabfb934146106bb578063d528161814610795578063d716222c146107a7578063db6fcf01146108af578063de778edb1461092c578063e2deaa811461096c578063e7156dbe146109db578063eb121e2f14610a17578063ebd8337814610a89578063ffd1d50414610bc1575b005b610c18600454600160a060020a031681565b610c3560043560243560038054839081101561000257906000526020600020906002020160005081600281101561000257909001600091509150505481565b6040805160208181018352600080835283516001805480850283018501909652858252610c4795919390929084015b82821015610e935760008481526040805160209092208282019182905260028581029091019182845b8160005054815260200190600101908083116101d2575b5050505050815260200190600101906101a9565b6040805160208181018352600080835283516003805480850283018501909652858252610c4795919390929084015b82821015610e935760008481526040805160209092208282019182905260028581029091019182845b816000505481526020019060010190808311610255575b50505050508152602001906001019061022c565b610127600435602435604435600080546040805160e160020a636667bd470281526004810187905290518392600160a060020a03169163cccf7a8e916024828101926020929190829003018187876161da5a03f11561000257505060405151821415905061145f57611458565b610c18600054600160a060020a031681565b6040805160208181018352600080835283516002805480850283018501909652858252610c4795919390929084015b82821015610e935760008481526040805160209092208282019182905260028581029091019182845b816000505481526020019060010190808311610357575b50505050508152602001906001019061032e565b610c356004355b600080546040805160e160020a631280840b02815260048101859052656f776e65727360248201529051600160a060020a039290921691632501081691604481810192602092909190829003018187876161da5a03f115610002575050604051519091141590505b919050565b60408051604435600481810135602081810285018101909552808452610c35948235946024803595606494929391019190819060009085015b82821015610ca25760408051610ca081810190925290838102870190606590839083908082843782019150505050508152602001906001019061042f565b610c356004356040805160055460e160020a630543a6fb028252600160a060020a03848116600484015292516000939190911691630a874df6916024828101926020929190829003018187876161da5a03f1156100025750506040515191506103f19050565b610c3560043560243560018054839081101561000257906000526020600020906002020160005081600281101561000257909001600091509150505481565b610d92610100604051908101604052806004905b6040604051908101604052806002905b6000815260200190600190039081610536579050508152602001906001900390816105265750506040805161010081019091526004815b6040604051908101604052806002905b600081526020019060019003908161057d5790505081526020019060019003908161056d57505080516c637265617465645f626c6f636b9052805166696e746567657260209182018190528282018051716c6173745f757064617465645f626c6f636b905251820152604082018051656f776e6572739052516c696e74656765725f6172726179908201526060820180516864657374726f79656490525163626f6f6c910152919050565b61012760043561123681336107b1565b6101276004356024355b61115582610389565b604080516004803580820135602081810285018101909552808452610c35949293602493909284019190819060009085015b82821015610dd65760408051610ca081810190925290838102870190606590839083908082843782019150505050508152602001906001019061067d565b610127600435600454600160a060020a03908116339091161415610a14576040805160055460e260020a633c0d4301028252600160a060020a038481166004840152925192169163f0350c0491602481810192600092909190829003018183876161da5a03f11561000257505050610a1481600454600160a060020a03908116339091161415610a1457600080546040805160e260020a633c0d4301028152600160a060020a0385811660048301529151929091169263f0350c0492602483810193829003018183876161da5a03f1156100025750505050565b610c18600554600160a060020a031681565b610c356004356024355b600080805b600080546040805160e160020a631280840b02815260048101899052656f776e65727360248201529051600160a060020a03929092169263250108169260448381019360209390839003909101908290876161da5a03f1156100025750506040515160ff841610159050610e9c57604080516000805460e160020a632c72ce1902835260048301899052656f776e657273602484015260ff861660448401529251600160a060020a0393909316926358e59c329260648181019360209392839003909101908290876161da5a03f11561000257505060405151915050600160a060020a0381811690851614156111495760019250610ea1565b610c35600435600080546040805160e160020a632c72ce19028152600481018590526864657374726f7965646024820152604481018490529051600160a060020a0392909216916358e59c3291606481810192602092909190829003018187876161da5a03f1156100025750506040515160011491506103f19050565b610127600435600454600160a060020a03908116339091161415610a14576004805473ffffffffffffffffffffffffffffffffffffffff19168217905550565b610127600435602435604435600080546040805160e160020a636667bd47028152600481018790529051600160a060020a03929092169163cccf7a8e91602481810192602092909190829003018187876161da5a03f1156100025750506040515182141590506116f2576116ec565b61012760043560008054600160a060020a03161415610a14576000805473ffffffffffffffffffffffffffffffffffffffff1916821790555b50565b6040805160248035600481810135602081810286018101909652808552610c35958235959294604494019190819060009085015b82821015610e5e5760408051610ca0818101909252908381028701906065908390839080828437820191505050505081526020019060010190610a4b565b610e786004356040604051908101604052806002905b6000815260200190600190039081610a9f575050604080518082019091526002815b6000815260200190600190039081610ac1575050600080546040805160e160020a632c72ce19028152600481018790526c637265617465645f626c6f636b6024820152604481018490529051600160a060020a0392909216926358e59c329260648381019360209390839003909101908290876161da5a03f11561000257506040805151845260008054825160e160020a632c72ce1902815260048101899052716c6173745f757064617465645f626c6f636b6024820152604481018390529251600160a060020a0391909116945060648381019360209390839003909101908290876161da5a03f1156100025750506040515160208301525092915050565b610c3560043560243560028054839081101561000257600082815291027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0190508160028110156100025701600091509150505481565b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080516000925b81841015610c9157602084810284010151604080838184600060046015f1509050019260010192610c65565b925050509250505060405180910390f35b5093955050505050505b60008260001415611813576005548251600160a060020a039190911690630a874df6908490849081101561000257506040805160209283015183015160e160020a630543a6fb0282526004820152905160248281019392829003018187876161da5a03f115610002575050604051518214905061181e57604080516020808252600e908201527f6d75737420626520756e697175650000000000000000000000000000000000008183015290516661646472657373917f1aa3de82ed32b15e46e219f19efd6e4138a410853f46b8a761e6e7e91ccf3cfa919081900360600190a2611817565b6040516000826004835b81841015610dc65760208402830151604080838184600060046015f1509050019260010192610d9c565b9250505091505060405180910390f35b50939550505050505060006000600061177e84604080516020808252600e908201527f63726561746520737461727465640000000000000000000000000000000000008183015290516000918291829182917fcf34ef537ac33ee1ac626ca1587a0a7e8e51561e5514f8cb36afa1c5102b3bab9181900360600190a161182633600087610cac565b509395505050505050600060006000610ea9338686610cac565b60408051908190839080838184600060046015f15093505050f35b50505050905090565b600092505b505092915050565b60011415610e9c57600091505b6001548210156110325760005460018054600160a060020a0392909216916341ee903e91889186908110156100025760009182526002027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6019050600050546040518360e060020a02815260040180838152602001828152602001925050506000604051808303816000876161da5a03f11561000257505050600190505b83828151811015610002576020908102909101015151811161113d5760005460018054600160a060020a03929092169163505fb46c9188918690811015610002576000919091526002027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154875188908790811015610002579060200190602002015185606581101561000257909060200201516040518460e060020a0281526004018084815260200183815260200182815260200193505050506000604051808303816000876161da5a03f11561000257505050600101610f54565b600080546040805160e160020a6320f7481f02815260048101899052716c6173745f757064617465645f626c6f636b60248201529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018a9052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f1156100025750506040805187815290517f164f7b2ab803097dab5e39f06d2e4f3c3ddc5d4171abbdcc3e76443b8359c7f592509081900360200190a160019250610ea1565b60019190910190610eb6565b600191909101906107b6565b600014156111c257604080516000805460e260020a631417ed1b02835260048301869052656f776e6572736024840152600160a060020a038581166044850152935193169263505fb46c926064818101939291829003018183876161da5a03f11561000257505050611232565b6111cc82336107b1565b1561123257604080516000805460e260020a631417ed1b02835260048301869052656f776e6572736024840152600160a060020a038581166044850152935193169263505fb46c926064818101939291829003018183876161da5a03f115610002575050505b5050565b15610a1457600080546040805160e160020a6320f7481f028152600481018590526864657374726f79656460248201529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018690526864657374726f7965646024840152600160448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f1156100025750506040805183815290517fd3f5559c9fe2c1b988daa9f5520155e1a89d750e0a7b2ee17afcd4b76dd95bcd92509081900360200190a150565b600080546040805160e260020a631417ed1b0281526004810189905260248101889052604481018790529051600160a060020a03929092169263505fb46c92606483810193829003018183876161da5a03f115610002575050604080516000805460e160020a6320f7481f028352600483018a9052716c6173745f757064617465645f626c6f636b60248401529251600160a060020a039390931693506341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b028352600483018a9052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f115610002575050505b5050505050565b5060009050805b6002548110156114e357836002600050828154811015610002576000829052027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace015414156115665760028054829081101561000257027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf015491505b816000148061155c5750600460009054906101000a9004600160a060020a0316600160a060020a0316636a030ca9836040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f11561000257505060405151600160a060020a0390811633909116141590505b1561132f57611458565b600101611466565b600080546040805160e160020a6320f7481f02815260048101889052602481018790529051600160a060020a0392909216926341ee903e92604483810193829003018183876161da5a03f115610002575050604080516000805460e260020a631417ed1b0283526004830189905260248301889052604483018790529251600160a060020a0393909316935063505fb46c92606483810193829003018183876161da5a03f115610002575050604080516000805460e160020a6320f7481f02835260048301899052716c6173745f757064617465645f626c6f636b60248401529251600160a060020a039390931693506341ee903e92604483810193829003018183876161da5a03f115610002575050600080546040805160e260020a631417ed1b02815260048101899052716c6173745f757064617465645f626c6f636b60248201524360448201529051600160a060020a0392909216935063505fb46c926064828101939192829003018183876161da5a03f115610002575050505b50505050565b5060408051600480547f6a030ca90000000000000000000000000000000000000000000000000000000083526301000000860491830182905292519092600160a060020a031691636a030ca991602482810192602092919082900301816000876161da5a03f11561000257505060405151600160a060020a039081163390911614905061156e576116ec565b91506000821461180c5783600081518110156100025760408051602093840151909301516005547f1ab06ee500000000000000000000000000000000000000000000000000000000855260048501829052602485018790529151909450600160a060020a039190911692631ab06ee5926044828101939192829003018183876161da5a03f115610002575050505b5092915050565b5060005b9392505050565b506001611817565b60011415611abc57600060009054906101000a9004600160a060020a0316600160a060020a0316639c851ebc6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505060405151935060009250505b600154821015611ac4575060015b84828151811015610002575050602082810286010151518111611ace5760005460018054600160a060020a03929092169163505fb46c91869186908110156100025790600052602060002090600202016000506000505488868151811015610002579060200190602002015185606581101561000257909060200201516040518460e060020a0281526004018084815260200183815260200182815260200193505050506000604051808303816000876161da5a03f11561000257505050600101611897565b600080546040805160e260020a631417ed1b028152600481018790526864657374726f7965646024820152604481018490529051600160a060020a03929092169263505fb46c92606483810193829003018183876161da5a03f1156100025750604080516000805460e260020a631417ed1b028352600483018990526c637265617465645f626c6f636b60248401524360448401529251600160a060020a039390931694506064828101939192829003018183876161da5a03f1156100025750604080516000805460e260020a631417ed1b02835260048301899052716c6173745f757064617465645f626c6f636b60248401524360448401529251600160a060020a039390931694506064828101939192829003018183876161da5a03f1156100025750506040805185815290517f07eac9a0695a188fe9d6fd680bcbbbe39041fb114d5d7ac11252401391f7930792509081900360200190a18293505b505050919050565b61195d8333610642565b6001919091019061188956405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5aceb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6";

  if ("0xd853dbf029c2216f29481a7f90a05f2dba8ab738" != "") {
    UserModel.address = "0xd853dbf029c2216f29481a7f90a05f2dba8ab738";

    // Backward compatibility; Deprecated.
    UserModel.deployed_address = "0xd853dbf029c2216f29481a7f90a05f2dba8ab738";
  }

  UserModel.generated_with = "1.0.2";
  UserModel.contract_name = "UserModel";

  return UserModel;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.UserModel = factory;
}