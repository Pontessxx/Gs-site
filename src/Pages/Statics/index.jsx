import React from "react";
import '../Login/Login.scss';
// Esta pagina aparece após realizar o cadastro, seria a homepage do site com a conta do usuário
function Homelog(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <section className="Homelog-sec">
            <div className="credencial-log">
                <div className="text-log">
                    <p>Usuário: <span>{localStorage.getItem('name')}</span></p>
                    <p>Cargo: <span>{localStorage.getItem('cargo')}</span></p>
                </div>
                <div className="btn-log">
                    <button onClick={logout} className="logout">LogOut</button>
                    <button onClick={deleteAccount} className="delete">Delete</button>
                </div>
            </div>
            <div className="input_pesquisa">
                <input type="text" placeholder="Pesquise pelo paciente"/>
            </div>
        </section>
    );
}
export default Homelog;