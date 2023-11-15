import React from 'react'
import './Vantagens.scss'
const index = () => {
  return (
    <div className='box-vants'>
        <div className="box-um">
            <div className='card-imagem'>
            <img src="https://www.athenium.com/wp-content/uploads/2020/05/BLOG_teamthink_Scalability-for-Growth_1219_featured-img-compressor.png" alt="imagem-home" />
            </div>
            <div className="text">
                <h3>Eficiência Operacional</h3>
                <p>Acesso rápido e seguro a registros médicos, otimizando o fluxo de trabalho.</p>
            </div>
        </div>
        <div className="box-um">
            <div className='card-imagem'>
            <img src="https://th.bing.com/th/id/OIP.hRLjMvG0oZH9O00tiaV7UgHaHa?pid=ImgDet&rs=1" alt="imagem-home" />
            </div>
            <div className="text">
                <h3>Confidencialidade Reforçada</h3>
                <p>Criptografia avançada e chaves únicas asseguram a proteção integral dos dados.</p>
            </div>
        </div>
        <div className="box-um">
            <div className='card-imagem'>
            <img src="https://png.pngtree.com/png-clipart/20221007/original/pngtree-user-experience-png-image_8663882.png" alt="imagem-home" />
            </div>
            <div className="text">
                <h3>Experiência do Usuário Aprimorada</h3>
                <p>Interface intuitiva para profissionais de saúde, facilitando a utilização eficaz.</p>
            </div>
        </div>
    </div>
  )
}

export default index