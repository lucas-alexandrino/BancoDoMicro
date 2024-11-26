import axios from 'axios';

const apiService = {
  sacar: async (numeroConta: any, valor: any) => {
    const url = `http://localhost:8080/sacar/${numeroConta}/${valor}`;
    const response = await axios.post(url);
    return response.data;
  },

  depositar: async (numeroConta: any, valor: any) => {
    const url = `http://localhost:8080/depositar/${numeroConta}/${valor}`;
    const response = await axios.post(url);
    return response.data;
  },

  transferir: async (numeroOrigem: any, numeroDestino: any, valor: any) => {
    const url = `http://localhost:8080/transferir/${numeroOrigem}/${numeroDestino}/${valor}`;
    const response = await axios.post(url);
    return response.data;
  },

  contaCorrente: async (numeroConta: any, numeroAgencia: any, nomeTitular: any, saldo: any, limite: any) => {
    const url = `http://localhost:8080/usuarios/cadastrarcc/${numeroConta}/${numeroAgencia}/${nomeTitular}/${saldo}/${limite}`;
    const response = await axios.post(url);
    return response.data;
  },

  contaPoupanca: async (numeroConta: any, numeroAgencia: any, nomeTitular: any, saldo: any, aniversario: any) => {
    const url = `http://localhost:8080/usuarios/cadastrarcp/${numeroConta}/${numeroAgencia}/${nomeTitular}/${saldo}/${aniversario}`;
    const response = await axios.post(url);
    return response.data;
  },
  
  buscaConta: async (numeroConta: any) => {
    const url = `http://localhost:8080/usuarios/buscaconta/${numeroConta}`;
    const response = await axios.post(url);
    return response.data;
  },

  atualizar: async (numeroConta: any, saldo: any, limite: any) => {
    const url = `http://localhost:8080/usuarios/atualizar/${numeroConta}/${saldo}/${limite}`;
    const response = await axios.post(url);
    return response.data;
  },

  deletar: async (numeroConta: any) => {
    const url = `http://localhost:8080/usuarios/deletar/${numeroConta}`;
    const response = await axios.post(url);
    return response.data;
  },

  listaContas: async () => {
    const url = `http://localhost:8080/usuarios/contas`;
    const response = await axios.get(url);
    return response.data;
  },
};

export default apiService;
