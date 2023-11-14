import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section className='home-sec'>
      <h2>Global Soluction 2023 - Engenharia de Software</h2>
      <div className='card-imagem'>
        <img src="../../public/bg.jpg" alt="imagem-home" />
      </div>
      <div className='box-baixo'>
        <h2>Título da situação criada</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga quo minima ducimus eveniet placeat explicabo obcaecati inventore assumenda eos?</p>
      </div>
      <div className='box-btn-info'>
        <Link to ='/statistics'>Mais informações</Link>
      </div>
    </section>
  )
}

export default Home