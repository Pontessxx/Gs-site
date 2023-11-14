import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom';
import Vantagens from '../../Components/Vantagens'
const Home = () => {
  return (
    <>
    <section className='home-sec'>
      <div className="home-div">
        {/* <h2>Global Soluction 2023 - Engenharia de Software</h2> */}
        <div className='card-imagem'>
          <img src="../../public/bg.jpg" alt="imagem-home" />
        </div>
        <div className='box-baixo'>
          <h2>Título da situação criada</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga quo minima ducimus eveniet placeat explicabo obcaecati inventore assumenda eos?</p>
        </div>
        <div className='box-btn-info'>
          <Link to ='/users'>Mais informações</Link>
        </div>
      </div>
      <div className='box-direito'>
        <div className="box-um">
          <h3>Titulo do card</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, expedita.</p>
        </div>
        <hr />
        <div className="box-dois">
          <h3>Titulo do card</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, expedita.</p>
        </div>
        <hr />
        <div className="box-tres">
          <h3>Titulo do card</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, expedita.</p>
        </div>
      </div>
    </section>
    <h1>Vantagens</h1>
    <Vantagens/>
  </>
  )
}

export default Home