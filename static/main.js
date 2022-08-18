conectarBtn = document.getElementById('conectar');
enviarBtn = document.getElementById('enviar');
const usdtAddress = '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95';
const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
const busdTestAddress = '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee';

const web3 = new Web3(Web3.givenProvider);
var billetera = document.getElementById('billetera'); 
var account = "";

if (typeof window.ethereum != 'undefined') {
  console.log('MetaMask is installed!');
  console.log(ethereum.networkVersion);
  //console.log(ethereum.selectedAddress);
}

conectarBtn.addEventListener('click', async function() {
	console.log('entro en la funcion conectar');
	var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	account = accounts[0];
	billetera.innerHTML = account;
	console.log(accounts);
});

console.log(web3);

enviarBtn.addEventListener('click', async function transferToken() {
	console.log('apreto enviar');
	var destino = '0xD7a531eBFe8ED031475D21030e49D37F01cF7d41'
	var contrato = new web3.eth.Contract(busdTestAbi, busdTestAddress);
	var balance = await contrato.methods.balanceOf(account).call();
	console.log({balance});
	const bn = 100000000000000000;
	try {
		resultado = await contrato.methods.transfer(destino, bn.toString()).send({from: account});
		console.log(resultado['status']);
	}catch (err) {
		console.log(err['code']);
	};
});

