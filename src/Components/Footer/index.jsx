import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
const index = () => {
  return (
    <>
        <footer>
            <div id="footer_content">
                <div id="footer_contacts">
                    <h1>Logo</h1>
                    <p>Slogam vem bem aq</p>

                   {/*  <div id="footer_social_media">
                        <Link to="#" class="footer-link" id="instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </Link>

                        <Link class="footer-link" id="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                        </Link>

                        <Link to="#" class="footer-link" id="whatsapp">
                            <i class="fa-brands fa-whatsapp"></i>
                        </Link>
                    </div> */}
                </div>
                
            

                <ul class="footer-list">
                    <li>
                        <h3>Desenvolvedores</h3>
                    </li>
                    <li>
                        <Link to="https://github.com/Pontessxx" className="footer-link">Henrique Pontes Oliveira</Link>
                    </li>
                    <li>
                        <Link to="#" className="footer-link">Guilherme Brazioli</Link>
                    </li>
                    
                </ul>
            </div>

            <div id="footer_copyright">
                &#xa9; Pontes 2023 all 
                Todos os direitos reservados

            </div>
        </footer>
    </>
  )
}

export default index