import React, {useState} from 'react'
import './cadastraUsuario2.css'
import axios from 'axios'


const CadastraUsuario2 = () => {

    const [nomeReq, setNome] = useState('')
    const [emailReq, setEmail] = useState('')
    const [senhaReq, setSenha] = useState('')

    const register = () => {
        axios.post('http://localhost:3001/usuarios', {
            nome : nomeReq, 
            email: emailReq, 
            senha: senhaReq}).then(response => {
            console.log(response)
        })
}
return(
<main className="bgCadastro">
        <div className="container">
          <div className="containerMenor">
            <h1>Bem vindo</h1>
            <h2>Cadastre-se</h2>
            <form onSubmit={register}>
              <section>
                <div className="input-campo">
                  <label htmlFor="">Nome</label>
                  <input
                    value={nomeReq}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    placeholder="Digite seu Nome"
                    name="nome"
                    required
                  />
                  <div className="underline"></div>
                </div>
                <div className="input-campo">
                  <label htmlFor="">E-mail:</label>
                  <input
                    value={emailReq}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Digite seu E-mail"
                    name="email"
                    required
                  />
                  <div className="underline"></div>
                </div>
                <div className="input-campo">
                  <label htmlFor="">Senha:</label>
                  <input
                    value={senhaReq}
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                    placeholder="Digite sua Senha"
                    name="senha"
                    required
                  />
                  <div className="underline"></div>
                </div>
                {/*<div className="input-campo">
                                    <label htmlFor="">Confirmar Senha:</label>
                                    <input value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} type="password" placeholder='Confirme sua senha' name='confirmarSenha' required />
                                    <div className='underline'></div>
                                </div>*/}
              </section>
              <button className="botao" type="submit">
                Cadastrar
              </button>
             {/* <Link to="/">
                <button className="botao2" type="button">
                  Voltar
                </button>
              </Link> */}
            </form>
          </div>
        </div>
      </main>
    )
}

export default CadastraUsuario2;