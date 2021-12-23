import '../App.css';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import WatchModel from '../Models/WatchModel'

function AddForm (props) {
  const {onAdd} = props;
  const [form, setForm] = useState({
    name: '',
    offset: 0
  })

  function submitHandle (e) {
    e.preventDefault();
    const watch = new WatchModel(form.name, form.offset);
    onAdd(watch)
    setForm({
      name: '',
      offset: 0
    })
  }


  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setForm(prevState => {
      return { ...prevState, [name]: value }
    });
    //setForm(prevForm => {...prevForm, [name]: value});
  }

  return (
    <form className="add-form" onSubmit={submitHandle}>
      <p>
        <label>Название</label>
        <br/>
        <input id="name" name="name" value={form.name} type="text" onChange={handleChange}/>
      </p>
      <p>
        <label>Временная зона</label>
        <br/>
        <input id="offset" name="offset" value={form.offset} type="number" min ="-12" max="12" onChange={handleChange}/>
      </p>
      <button  className="add-button" type="submit">Добавить</button>
    </form>
  )
}

AddForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default AddForm;