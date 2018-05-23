import React, { Component } from 'react'
import ListColuna from './ListColuna'

class List extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     list: [{ id: 1, description: "teste" },
        //     { id: 2, description: "teste2" },
        //     { id: 3, description: "teste3" }
        //     ]
        // }
    }

    colunaLista = () => {
        // return <ListColuna id={1} description="teste"/>
        // let list ={id:1, description:"teste"}
        // return <ListColuna {...list}/>
        // let list2= [{id:1, description:"teste"},{id:2, description:"teste2"},{id:3, description:"teste3"}]
        // return list2.map(elemento=><ListColuna key={elemento.id} {...elemento}/>)

        //return this.state.list.map(elemento=><ListColuna key={elemento.id} {...elemento}/>) 
        return this.props.list.map(elemento => <ListColuna
            key={elemento.id}
            {...elemento}
            element={elemento}
            removeElement={this.props.remove}
            feito={this.props.feito}
            naoFeito={this.props.naoFeito} />)

    }

    render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">HORA</th>
                        <th scope="col">AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {this.colunaLista()}
                </tbody>
            </table>

        )
    }
}

export default List;