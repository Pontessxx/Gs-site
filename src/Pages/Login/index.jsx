import React, { useEffect, useRef, useState } from "react";
import Statics from '../Statics';
import { SHA256 } from 'crypto-js';
import './Login.scss';

function SignInSignupWithLocalStorage() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        const response = await fetch("http://localhost:3001/usuarios");
        const dados = await response.json();
        setDados(dados);
        console.log('Código do usuário funcionou');
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }

    carregarDados();
  }, []);

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const especialidade = useRef(); // Adicionado para a especialidade
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, [localSignUp, localEmail]);

  const generateHash = (data) => {
    return SHA256(data).toString();
  };

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value && especialidade.current.value) {
      // Verificar se já existe um médico com o mesmo nome e especialidade
      const medicoExistente = dados && dados.usuarios && dados.usuarios.find(
        (user) => user.nome === name.current.value && user.especialidade === especialidade.current.value
      );
  
      if (medicoExistente) {
        alert("Já existe um médico com o mesmo nome e especialidade");
        return;
      }
  
      const hashedPassword = generateHash(password.current.value);
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", hashedPassword);
      localStorage.setItem("signUp", email.current.value);
      // Adicionar especialidade ao localStorage
      localStorage.setItem("especialidade", especialidade.current.value);
  
      alert("Account created successfully!!");
      window.location.reload();
    } else {
      alert("Preencha todos os campos obrigatórios");
    }
  };

  const handleSignIn = () => {
    const hashedInputPassword = generateHash(password.current.value);

    if (
      email.current.value === localEmail &&
      hashedInputPassword === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);

      if (dados) {
        const usuario = dados.usuarios.find(
          (user) => user.email === localEmail
        );

        if (usuario) {
          const papel = usuario.papel;

          if (papel === "medico") {
            // Carregar dados específicos para médicos
            const medicoData = usuario;

            // Aqui você pode fazer algo com os dados do médico
            console.log("Dados do Médico:", medicoData);

            alert("Login bem-sucedido como médico");
          } else if (papel === "recepcionista") {
            // Carregar dados específicos para recepcionistas
            const recepcionistaData = {
              nome: usuario.nome,
              idade: usuario.idade,
              exames: usuario.pacientes.map((paciente) => {
                const pacienteData = dados.pacientes.find((p) => p.id === paciente);
                return pacienteData.exames;
              }).flat(),
            };

            // Aqui você pode fazer algo com os dados do recepcionista
            console.log("Dados do Recepcionista:", recepcionistaData);

            alert("Login bem-sucedido como recepcionista");
          } else {
            alert("Login bem-sucedido");
          }
          window.location.reload();
        } else {
          alert("Usuário não encontrado");
        }
      } else {
        alert("Erro ao carregar dados");
      }
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div>
      {showHome ? (
        <Statics />
      ) : (
        show ? (
          <div className="container">
            <h1>Hello {localName}</h1>
            <div className="input_space">
              <input placeholder="Email" type="text" ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        ) : (
          <div className="container">
            <h1>Login</h1>
            <label htmlFor="Nome completo">Nome:</label>
            <div className="input_space">
              <input placeholder="Nome completo" type="text" ref={name} />
            </div>
            <label htmlFor="E-mail">Email corporativo:</label>
            <div className="input_space">
              <input placeholder="E-mail" type="text" ref={email} />
            </div>
            <label htmlFor="Especialidade">Especialidade:</label>
            <div className="input_space">
              <input placeholder="Especialidade" type="text" ref={especialidade} />
            </div>
            <label htmlFor="Password">Senha:</label>
            <div className="input_space">
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <button onClick={handleClick}>Sign Up</button>
          </div>
        )
      )}
    </div>
  );
}

export default SignInSignupWithLocalStorage;
