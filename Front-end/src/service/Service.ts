import axios from 'axios';

const apiUsuariosMS = axios.create({
  baseURL: 'https://usuariosms.onrender.com',
});

const apiSacarMS = axios.create({
  baseURL: 'https://sacarms.onrender.com',
});

const apiDepositarMS = axios.create({
  baseURL: 'https://depositarms.onrender.com',
});

const apiTransferirMS = axios.create({
  baseURL: 'https://transferirms.onrender.com',
});


// Funções do serviço
const apiService = {
  sacar: async (numeroConta: any, valor: any) => {
    const url = `/sacar/${numeroConta}/${valor}`;
    const response = await apiSacarMS.post(url);
    return response.data;
  },

  depositar: async (numeroConta: any, valor: any) => {
    const url = `/deposito/${numeroConta}/${valor}`;
    const response = await apiDepositarMS.post(url);
    return response.data;
  },

  transferir: async (numeroOrigem: any, numeroDestino: any, valor: any) => {
    const url = `/transferir/${numeroOrigem}/${numeroDestino}/${valor}`;
    const response = await apiTransferirMS.post(url);
    return response.data;
  },

  contaCorrente: async (numeroConta: any, numeroAgencia: any, nomeTitular: any, saldo: any, limite: any) => {
    const url = `/usuarios/cadastrarcc/${numeroConta}/${numeroAgencia}/${nomeTitular}/${saldo}/${limite}`;
    const response = await apiUsuariosMS.post(url);
    return response.data;
  },

  contaPoupanca: async (numeroConta: any, numeroAgencia: any, nomeTitular: any, saldo: any, aniversario: any) => {
    const url = `/usuarios/cadastrarcp/${numeroConta}/${numeroAgencia}/${nomeTitular}/${saldo}/${aniversario}`;
    const response = await apiUsuariosMS.post(url);
    return response.data;
  },

  buscaConta: async (numeroConta: any) => {
    const url = `/usuarios/buscaconta/${numeroConta}`;
    const response = await apiUsuariosMS.post(url);
    return response.data;
  },

  atualizar: async (numeroConta: any, saldo: any, limite: any) => {
    const url = `/usuarios/atualizar/${numeroConta}/${saldo}/${limite}`;
    const response = await apiUsuariosMS.post(url);
    return response.data;
  },

  deletar: async (numeroConta: any) => {
    const url = `/usuarios/deletar/${numeroConta}`;
    const response = await apiUsuariosMS.post(url);
    return response.data;
  },

  listaContas: async () => {
    const url = `/usuarios/contas`;
    const response = await apiUsuariosMS.get(url);
    return response.data;
  },
};

export default apiService;