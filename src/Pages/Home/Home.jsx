import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom';
import Vantagens from '../../Components/Vantagens'
const Home = () => {
  return (
    <>
    <section className='home-sec'>
      <div className="max-home">
        <div className="home-div">
          {/* <h2>Global Soluction 2023 - Engenharia de Software</h2> */}
          <div className='card-imagem'>
            <img src="https://livecoins.com.br/wp-content/uploads/2021/08/blockchain-hospital.jpg" alt="imagem-home" />
          </div>
          <div className='box-baixo'>
            <h2>Health ID</h2>
            <p>Uma inovadora solução de acesso a registros médicos, integra criptografia e usabilidade para oferecer aos profissionais de saúde uma plataforma eficiente e segura, impulsionando a excelência clínica.</p>
          </div>
          <div className='box-btn-info'>
            <Link to ='/users'>Mais informações</Link>
          </div>
        </div>
        <div className='box-direito'>
          <div className="box-um">
            <h3>O que é a solução? </h3>
            <p>A solução é uma plataforma inteligente de gestão de registros médicos.</p>
          </div>
          <hr />
          <div className="box-dois">
            <h3>O que ela fará? </h3>
            <p>Ela simplificará o acesso, proporcionando uma interface amigável e segura.</p>
          </div>
          <hr />
          <div className="box-tres">
            <h3>Como funcionará? </h3>
            <p>Funcionará integrando criptografia e chaves únicas para garantir confidencialidade, eficiência e excelência clínica.</p>
          </div>
        </div>
      </div>
      <div className="max-vants">
        <h1>Vantagens</h1>
        <Vantagens/> 
      </div>
    </section>
  </>
  )
}

export default Home