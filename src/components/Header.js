import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container'>
                    <a className='navbar-brend' href='#'>
                        <i className='fa fa-calendar-check-o'></i>
                        Task
                    </a>
                </div>
            </nav>

            <h2>Tarefas
                <small>Cadastro</small>
            </h2>
            <hr/>
        </header>
            )
        }
        
export default Header;