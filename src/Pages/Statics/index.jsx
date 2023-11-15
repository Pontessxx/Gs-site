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
        <div>
            <h1>Home Page </h1>
            <p>Wellcome {localStorage.getItem('name')}</p>
            <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button>
        </div>
    );
}
export default Homelog;