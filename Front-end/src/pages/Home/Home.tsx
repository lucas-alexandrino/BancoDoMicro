import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container-body">
        {/* NavBar */}
        <div className="navbar">
          <h1>Banco do Micro</h1>
          <Link to="/banco">
            <button>Ir para Banco</button>
          </Link>
        </div>

        <div className="container">
          {/* Coluna direita */}
          <div className="side"></div>

          {/* Coluna central */}
          <div className="center">
            <div className="content">
              <p>
                Olá, esse projeto nasceu no momento em que eu estudava para a
                certificação CLF-C02 (AWS Cloud Practitioner), de transformar
                uma aplicação bancária desenvolvida em Java com Spring MVC de
                arquitetura monolítica, em uma aplicação bancária de micro
                serviços MVC com implantação na nuvem AWS.
              </p>

              <p>
                Para iniciar esse projeto eu tive que arquitetar como essa
                aplicação monolítica seria dividida e também como funcionaria a
                comunicação entre esses micro serviços, inicialmente cheguei a
                cogitar o uso do SQS (Simple Queue Service), e também serviços
                de filas e mensagens entre as aplicações, porém devido estar
                utilizando o Free-tier da AWS e ainda ter a complexidade da
                divisão da arquitetura monolítica para micro serviços MVC,
                acabei optando por não utilizar nesse projeto no momento.
              </p>

              <p>Abaixo segue o desenho da arquitetura anterior e atual</p>

              <img src="img/arquitetura_microbanco.png" alt="arquitetura" />
              <img src="img/Arquitetura_AWS.drawio.png" alt="Solução AWS" />

              <p></p>
              <i>
                <strong>
                  Lembrando que estou utilizando o Free-tier da AWS, então
                  algumas alternativas foram utilizadas devido questões
                  orçamentárias, para viabilizar o projeto.
                </strong>
              </i>

              <ul>
                <li>
                  Dividi a aplicação de acordo com os métodos bancários (Sacar,
                  Depositar, Transferir) e também criei um micro serviço (MS)
                  para gerenciamento das contas.
                </li>
                <li>
                  Irei utilizar Docker para containerização da aplicação devido
                  estar no Free-tier.
                </li>
              </ul>

              <p>
                Decidi utilizar apenas um banco de dados na aplicação, isso
                seria contrário a algumas arquiteturas de micro serviço, devido
                ter apenas um banco de dados ser contra-intuitivo em uma
                aplicação de MS já que o objetivo dos micro serviços é
                justamente maior independência, segurança e escalabilidade.
              </p>

              <p>
                Estou utilizando apenas um banco de dados para facilitar a
                transformação da minha aplicação bancária, porém para não perder
                independência, redundância e escalabilidade, estarei utilizando
                o banco de dados RDS (Relational Database Service) PostgreSQL da
                própria AWS, que fornece escalabilidade, proteção contra
                desastres e alta disponibilidade (Multi-AZ) com failover
                automático.
              </p>
            </div>
          </div>

          {/* Coluna direita */}
          <div className="side"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
