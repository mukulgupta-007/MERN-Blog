import {useContext, useState} from "react";
export default function LoginPage() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
          method: 'POST',
          body: JSON.stringify({username, password}),
          headers: {'Content-Type':'application/json'},
          credentials: 'include',
        });
    }    
    return(
        <form className="login">
            <h1>Login</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>Login</button>
        </form>
    );
}