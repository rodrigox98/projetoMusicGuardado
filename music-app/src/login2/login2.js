import React, {useState} from 'react'
import axios from 'axios'
import './login.css'
const login2 = () => {
   
    
    const login = () => {
        axios.post('http://localhost:3001/login', {
            
        }).then(response => {
            console.log(response)
        })}
    return(
      
      <main className="bgLogin">
          <div className="container">
            <div className="containerMenor">
              <h1>Bem vindo Ao</h1>
              <img id='imagemlogo' src="https://i.imgur.com/Xqu2wjI.png" alt="" />
              <h2>Mix Music</h2>
              <p>Estamos muito animados em ter você aqui!</p>
  
              <form onSubmit={login}>
                <div className="input-campo">
                  <input
                    id="email"
                    type="text"
                    placeholder="Digite seu email"
                    name="email"
                    required
                  />
                  <div className="underline"></div>
                </div>
  
                <div className="input-campo">
                  <input
                    id="senha"
                    type="password"
                    placeholder="Digite a senha"
                    name="senha"
                    required
                   
                  />
                  <div className="underline"></div>
                </div>
                <button className="botao" type="submit" value="Entrar">
                  Entrar
                </button>
                <p id="txt">{/*
                  Não tem conta?{' '}
                  <Link to="/cadastro" className="botao2">
                    {' '}
                    Cadastrar
                  </Link>{' '} */}
                </p>
              </form>
            </div>
          </div>
        </main>
    )
  }
  export default login2;