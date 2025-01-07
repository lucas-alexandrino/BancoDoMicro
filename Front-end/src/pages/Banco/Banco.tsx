import { useState } from "react";
import apiService from "../../service/Service";
import "./Banco.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function Banco() {
  const [metodo, setMetodo] = useState("");
  const [numeroAgencia, setNumeroAgencia] = useState("");
  const [nomeTitular, setNomeTitular] = useState("");
  const [numeroConta, setNumeroConta] = useState("");
  const [numeroDestino, setNumeroDestino] = useState("");
  const [saldo, setSaldo] = useState("");
  const [valor, setValor] = useState("");
  const [limite, setLimite] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [respostaAPI, setRespostaAPI] = useState<
    { erro?: string } | any | null
  >(null);

  const chamarAPI = async () => {
    try {
      let dados;
      switch (metodo) {
        case "contacorrente":
          dados = await apiService.contaCorrente(
            numeroConta,
            numeroAgencia,
            nomeTitular,
            saldo,
            limite
          );
          break;
        case "contapoupanca":
          dados = await apiService.contaPoupanca(
            numeroConta,
            numeroAgencia,
            nomeTitular,
            saldo,
            aniversario
          );
          break;
        case "buscaconta":
          dados = await apiService.buscaConta(numeroConta);
          break;
        case "atualizar":
          dados = await apiService.atualizar(numeroConta, saldo, limite);
          break;
        case "sacar":
          dados = await apiService.sacar(numeroConta, valor);
          break;
        case "depositar":
          dados = await apiService.depositar(numeroConta, valor);
          break;
        case "transferir":
          dados = await apiService.transferir(
            numeroConta,
            numeroDestino,
            valor
          );
          break;
        case "deletar":
          dados = await apiService.deletar(numeroConta);
          break;
        case "listacontas":
          dados = await apiService.listaContas();
          break;
        default:
          throw new Error("Método inválido");
      }
      setRespostaAPI(dados);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro Axios:", error.response?.data || error.message);
        const mensagemErro = error.response?.data || "Erro desconhecido";
        setRespostaAPI({ erro: mensagemErro });
      } else {
        setRespostaAPI({ erro: "Erro inesperado!" });
      }
    }
  };

  return (
    <>
      <div className="container-body">
        <div className="navbar">
          <Link to={"/"}>
            <h1>Início</h1>
          </Link>
          <h1 id="icones">
            <a
              href="https://www.linkedin.com/in/lucasalexandrino"
              target="_blank"
            >
              <CiLinkedin />
            </a>
            <a href="https://github.com/lucas-alexandrino" target="_blank">
              <FaGithub />
            </a>
          </h1>
        </div>

        <div className="container">
          {/* Coluna direita */}
          <div className="side"></div>

          {/* Coluna central */}
          <div className="center_banco">
            <div className="content_banco">
              <h1 id="titulo">Formulário Banco:</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  chamarAPI();
                }}
              >
                <label htmlFor="metodo" id="paragrafo">
                  Selecione o método bancário:
                </label>
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
                    {metodo !== "listacontas" && (
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

                    {metodo === "transferir" && (
                      <div>
                        <label htmlFor="numeroDestino">
                          Número da Conta Destino:
                        </label>
                        <input
                          id="numeroDestino"
                          type="text"
                          value={numeroDestino}
                          onChange={(e) => setNumeroDestino(e.target.value)}
                          required
                        />
                      </div>
                    )}

                    {(metodo === "contacorrente" ||
                      metodo === "contapoupanca") && (
                      <div>
                        <label htmlFor="numeroagencia">
                          Número da Agência:
                        </label>
                        <input
                          id="numeroagencia"
                          type="number"
                          value={numeroAgencia}
                          onChange={(e) => setNumeroAgencia(e.target.value)}
                          required
                        />
                      </div>
                    )}

                    {(metodo === "contacorrente" ||
                      metodo === "contapoupanca") && (
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

                    {(metodo === "contacorrente" ||
                      metodo === "contapoupanca" ||
                      metodo === "atualizar") && (
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

                    {(metodo === "contacorrente" || metodo === "atualizar") && (
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

                    {metodo === "contapoupanca" && (
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

                    {(metodo === "sacar" ||
                      metodo === "depositar" ||
                      metodo === "transferir") && (
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
                    <p style={{ color: "red" }}>{respostaAPI.erro}</p>
                  ) : (
                    <pre>{JSON.stringify(respostaAPI, null, 2)}</pre>
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
