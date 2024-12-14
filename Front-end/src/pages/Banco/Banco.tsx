import { useState } from "react";
import apiService from "../../service/Service";
import "./Banco.css"
import axios from "axios";

 

   /// SOBRE:
//// UML,ARQUITETURA ANTES E DEPOIS,EXPLICAÇÃO DETALHADA, ARQUITETURA CLOUD
    // CONHECIMENTOS APRENDIDOS
function Banco() {

const [metodo, setMetodo] = useState(''); // Método selecionado
  const [numeroAgencia, setNumeroAgencia] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');
  const [numeroConta, setNumeroConta] = useState(''); // Número da conta
  const [numeroDestino, setNumeroDestino] = useState(''); // Número da conta destino (para transferências)
  const [saldo, setSaldo] = useState('');
  const [valor, setValor] = useState(''); // Valor da operação
  const [limite, setLimite] = useState('');
  const [aniversario, setAniversario] = useState('');
  const [respostaAPI, setRespostaAPI] = useState<{ erro?: string } | any | null>(null);// Resposta da API


  // Função para chamar o método correto da service
 const chamarAPI = async () => {
  try {
    let dados;
    switch (metodo) {
        case 'contacorrente':
        dados = await apiService.contaCorrente(numeroConta, numeroAgencia, nomeTitular, saldo, limite);
        break;
       case 'contapoupanca':
        dados = await apiService.contaPoupanca(numeroConta, numeroAgencia, nomeTitular, saldo, aniversario);
        break;
       case 'buscaconta':
        dados = await apiService.buscaConta(numeroConta);
        break;
       case 'atualizar':
        dados = await apiService.atualizar(numeroConta, saldo, limite);
        break;
      case 'sacar':
        dados = await apiService.sacar(numeroConta, valor);
        break;
      case 'depositar':
        dados = await apiService.depositar(numeroConta, valor);
        break;
       case 'transferir':
        dados = await apiService.transferir(numeroConta, numeroDestino, valor);
        break;
       case 'deletar':
        dados = await apiService.deletar(numeroConta);
        break;
        case 'listacontas':
        dados = await apiService.listaContas();
        break;
      default:
        throw new Error('Método inválido');
    }
    setRespostaAPI(dados); // Define a resposta em caso de sucesso
  } catch (error) {
  if (axios.isAxiosError(error)) {
  console.error('Erro Axios:', error.response?.data || error.message);
  const mensagemErro = error.response?.data || 'Erro desconhecido';
  setRespostaAPI({ erro: mensagemErro });
} else {
      setRespostaAPI({ erro: 'Erro inesperado!' });
    }
  }
};

    return (
    <>
     <div className="container-body">
        {/* NavBar */}
        <div className="navbar">
          <h1>Minha NavBar</h1>
        </div>

        <div className="container">
          {/* Coluna direita */}
          <div className="side"></div>

          {/* Coluna central */}
          <div className="center">
            <div className="content">
              <p>Formulário Banco:</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  chamarAPI();
                }}
              >
                <label htmlFor="metodo">Selecione o método bancário:</label>
                <select
                  id="metodo"
                  value={metodo}
                  onChange={(e) => setMetodo(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="contacorrente">Criar ContaCorrente</option>
                  <option value="contapoupanca">Criar ContaPoupanca</option>
                  <option value="buscaconta">Consultar Conta</option>
                  <option value="atualizar">Atualizar Saldo/Limite</option>
                  <option value="sacar">Sacar</option>
                  <option value="depositar">Depositar</option>
                  <option value="transferir">Transferir</option>
                  <option value="deletar">Deletar Conta</option>
                  <option value="listacontas">Listar todas as Contas</option>
                </select>

                {metodo && (
  <>
    {metodo !== 'listacontas' && (
      <div>
        <label htmlFor="numeroConta">Número da Conta:</label>
        <input
          id="numeroConta"
          type="text"
          value={numeroConta}
          onChange={(e) => setNumeroConta(e.target.value)}
          required
        />
      </div>
    )}

    {metodo === 'transferir' && (
      <div>
        <label htmlFor="numeroDestino">Número da Conta Destino:</label>
        <input
          id="numeroDestino"
          type="text"
          value={numeroDestino}
          onChange={(e) => setNumeroDestino(e.target.value)}
          required
        />
      </div>
    )}

    {(metodo === 'contacorrente' || metodo === 'contapoupanca') && (
      <div>
        <label htmlFor="numeroagencia">Número da Agência:</label>
        <input
          id="numeroagencia"
          type="number"
          value={numeroAgencia}
          onChange={(e) => setNumeroAgencia(e.target.value)}
          required
        />
      </div>
    )}

    {(metodo === 'contacorrente' || metodo === 'contapoupanca') && (
      <div>
        <label htmlFor="nometitular">Nome Titular:</label>
        <input
          id="nometitular"
          type="text"
          value={nomeTitular}
          onChange={(e) => setNomeTitular(e.target.value)}
          required
        />
      </div>
    )}

    {(metodo === 'contacorrente' || metodo === 'contapoupanca' || metodo === 'atualizar') && (
      <div>
        <label htmlFor="saldo">Saldo da Conta:</label>
        <input
          id="saldo"
          type="number"
          value={saldo}
          onChange={(e) => setSaldo(e.target.value)}
          required
        />
      </div>
    )}

    {(metodo === 'contacorrente' || metodo === 'atualizar') && (
      <div>
        <label htmlFor="limite">Limite da Conta:</label>
        <input
          id="limite"
          type="number"
          value={limite}
          onChange={(e) => setLimite(e.target.value)}
          required
        />
      </div>
    )}

    {metodo === 'contapoupanca' && (
      <div>
        <label htmlFor="aniversario">Aniversário:</label>
        <input
          id="aniversario"
          type="number"
          value={aniversario}
          onChange={(e) => setAniversario(e.target.value)}
          required
        />
      </div>
    )}

    {(metodo === 'sacar' || metodo === 'depositar' || metodo === 'transferir') && (
      <div>
        <label htmlFor="valor">Valor:</label>
        <input
          id="valor"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>
    )}

    <button type="submit">Enviar</button>
  </>
)}

              </form>

             <div className="resultado">
              {respostaAPI ? (
                  respostaAPI.erro ? (
               <p style={{ color: 'red' }}>{respostaAPI.erro}</p> // Mostra o erro em vermelho
                ) : (
                <pre>{JSON.stringify(respostaAPI, null, 2)}</pre> // Mostra a resposta de sucesso
              )
            ) : (
              <p>Preencha os dados e envie para ver os resultados.</p>
            )}
          </div>

            </div>
          </div>

          {/* Coluna direita */}
          <div className="side"></div>
        </div>
      </div>
    </>
  );
}

export default Banco;