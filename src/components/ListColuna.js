import React from 'react'


const ListColuna = (props) => {

    const removerElemento = () => {
        props.removeElement(props.element.id);
    }

    const marcarTarefaFeita = () => {
        props.feito(props.element);
    }

    const marcarTarefaNaoFeita = () => {
        props.naoFeito(props.element);
    }

    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td className={props.element.feito ? 'markedDone' : ''}>{props.description}</td>
            <td className=''>{props.horaAtual}</td>
            <td>
                <button className="btn btn-success"
                    onClick={marcarTarefaFeita}                >
                    <i className="fa fa-check"></i>
                </button>
                <button className="btn btn-warning"
                    onClick={marcarTarefaNaoFeita}>
                    <i className="fa fa-undo"></i>
                </button>
                <button className="btn btn-danger"
                    onClick={removerElemento}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </td>
        </tr>
    )
}

export default ListColuna;