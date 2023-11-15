import React, { useState } from "react";
import "../Login/Login.scss";

function Homelog() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };

  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };

  const procuraNoDadosJson = async () => {
    try {
      const responsePacientes = await fetch("http://localhost:3001/pacientes");
      const responseExames = await fetch("http://localhost:3001/exames");

      const dadosJsonPacientes = await responsePacientes.json();
      const dadosJsonExames = await responseExames.json();

      console.log("Resposta da API Pacientes:", dadosJsonPacientes);
      console.log("Resposta da API Exames:", dadosJsonExames);

      if (dadosJsonPacientes && dadosJsonPacientes.length > 0) {
        const resultadosPesquisa = dadosJsonPacientes.filter((paciente) =>
          paciente.nome.toLowerCase().includes(searchInput.toLowerCase())
        );

        console.log("Resultados da pesquisa Pacientes:", resultadosPesquisa);

        if (resultadosPesquisa.length > 0) {
          const resultadosComExames = resultadosPesquisa.map((paciente) => {
            const examesDoPaciente = paciente.exames.map((exameId) =>
              dadosJsonExames.find((exame) => exame.id === exameId)
            );

            return {
              ...paciente,
              exames: examesDoPaciente,
            };
          });

          console.log("Resultados com Exames:", resultadosComExames);

          setSearchResults(resultadosComExames);
        } else {
          console.log("Nenhum paciente encontrado com base na pesquisa.");
        }
      } else {
        console.error("Dados inválidos ou não encontrados");
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <section className="Homelog-sec">
      <div className="credencial-log">
        <div className="text-log">
          <p>
            Usuário: <span>{localStorage.getItem("name")}</span>
          </p>
          <p>
            Cargo: <span>{localStorage.getItem("cargo")}</span>
          </p>
        </div>
        <div className="btn-log">
          <button onClick={logout} className="logout">
            LogOut
          </button>
          <button onClick={deleteAccount} className="delete">
            Delete
          </button>
        </div>
      </div>
      <div className="input_pesquisa">
        <input
          type="text"
          placeholder="Pesquise pelo paciente"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={procuraNoDadosJson}>Pesquisar</button>
      </div>
      <div className="resultados-pesquisa">
        <h2>Resultados da Pesquisa:</h2>
        <ul>
          {searchResults.map((paciente) => (
            <li key={paciente.id}>
              <p>Nome: {paciente.nome}</p>
              <p>Idade: {paciente.idade}</p>
              <p>Exames:</p>
              <ul>
                {paciente.exames.map((exame) => (
                  <li key={exame.id}>
                    <p>Tipo: {exame.tipo}</p>
                    <p>Resultado: {exame.resultado}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Homelog;
