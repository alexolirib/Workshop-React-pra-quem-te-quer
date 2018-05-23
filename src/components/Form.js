import React from 'react'

const Form = (props) => {

    const handleChangeDescription = (event) => {
        //console.log(event.target.value);
        props.handleChange(event.target.value.toUpperCase())
    }

    const submitForm = (event) => {
        event.preventDefault();
        props.submit();

    }

    const removeList = () => {
        props.removeList();
    }

    return (
        <form className="form-inline">
            <input type="text"
                className="form-control col-xs-12 col-sm-9 col-md-10"
                placeholder="Adicione tarefa"
                value={props.description}
                onChange={handleChangeDescription}
            />
            <div className="btnForm">
                <button className="btn btn-primary" type="submit" onClick={submitForm}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            <div className="btnForm">
                <button className="btn btn-danger"
                    onClick={removeList}>
                    <i className="fa fa-times"></i>
                </button>
            </div>
        </form>
    )
}

export default Form;