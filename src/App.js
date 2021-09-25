import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

function App() {

  const dataEmpleados = [
    {clave: 1,fotografia: 'data:image/jpeg;base64,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', nombre: "Ana", edad: 33,  sexo: 'F', salario:3500},

  ]

  const [data, setData] = useState(dataEmpleados);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsetar] = useState(false);


  const [empleadoSelecionado, setEmpleadoSelecionado] = useState({
    clave:'',
    fotografia:'',
    nombre:'',
    edad:'',
    sexo:'',
    salario:''
  })

  const seleccionarEmpleado = (elemento, caso)=>{
      setEmpleadoSelecionado(elemento);
      (caso === 'Editar'?setModalEditar(true):setModalEliminar(true))
  } 

  const handleChange = e => {
      const {name, value} = e.target;
      console.log(value.target);
      setEmpleadoSelecionado((prevState) =>({
        ...prevState,
        [name]:value
      }))
      console.log(empleadoSelecionado);
  }

  const handleChangeImg = () => {
    let name = "fotografia"
    let value = document.getElementById(name).files[0];
    setEmpleadoSelecionado((prevState) =>({
      ...prevState,
      [name]:URL.createObjectURL(value)
    }))
    console.log(empleadoSelecionado);
  }



  const editar = () =>{
    var dataNueva = data;
    dataNueva.map(empleado => {
      if(empleado.clave === empleadoSelecionado.clave){
        empleado.fotografia = empleadoSelecionado.fotografia;
        empleado.nombre = empleadoSelecionado.nombre;
        empleado.edad = empleadoSelecionado.edad;
        empleado.sexo = empleadoSelecionado.sexo;
        empleado.salario = empleadoSelecionado.salario;
      }
    });
     setData(dataNueva);
     setModalEditar(false)
  }

  const eliminar = () =>{
    setData(data.filter(empleado => empleado.clave !== empleadoSelecionado.clave));
    setModalEliminar(false)
  }

  const abrirModalInsertar = () =>{
    setEmpleadoSelecionado(null);
    setModalInsetar(true)
  }

  const insertar = () =>{
    var valorInsertar = empleadoSelecionado;
    valorInsertar.clave = data[data.length-1].clave+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsetar(false);
  }

  

  return (
    <div className="App container-fluid">
      <h2>Lista de empleados</h2>
      <br/>
      <button className= "btn btn-success" onClick= {() => abrirModalInsertar()}>Insertar</button>
      <br/><br/>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Clave</th>
            <th>Fotografia</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Sexo</th>
            <th>Salario</th>
            <th>Accionse</th>
          </tr>
        </thead>
        <tbody>

          {
          data.map((elemento) =>{
              return (<tr>
                <td>{elemento.clave}</td>
                <td><img src = {elemento.fotografia}/></td>
                <td>{elemento.nombre}</td>
                <td>{elemento.edad}</td>
                <td>{elemento.sexo}</td>
                <td>{elemento.salario}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => seleccionarEmpleado(elemento, 'Editar')}>Editar</button>{"   "}
                  <button className="btn btn-danger" onClick={() => seleccionarEmpleado(elemento, 'Eliminar')}>Eliminar</button>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>

      {/*      Modal */}

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar empleado</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Clave</label>
            <input
            className="form-control"
            readOnly
            type="text"
            name="clave"
            value={empleadoSelecionado && empleadoSelecionado.clave}/>
            <br/>
            <label>Fotografia</label> 
            <input type="file" 
            class="form-control" 
            id="fotografia" 
            onChange={handleChangeImg}></input>
            <br/>
            <label>Nombre</label>
            <input
            className="form-control"
            type="text"
            name="nombre"
            value={empleadoSelecionado && empleadoSelecionado.nombre}
            onChange={handleChange}/>
            <br/>
            <label>Edad</label>
            <input
            className="form-control"
            type="number"
            name="edad"
            value={empleadoSelecionado && empleadoSelecionado.edad}
            onChange={handleChange}/>
            <br/>
            <label>Sexo</label>
            <br/>
            <label>F</label>
            <input
            className="form-check-input mx-3"
            type="radio" 
            name="sexo"
            value='F'
            checked= {empleadoSelecionado && empleadoSelecionado.sexo === "F"}
            onChange={handleChange}/>
            <label>M</label>
            <input
            className="form-check-input mx-3"
            type="radio" 
            name="sexo"
            checked= {empleadoSelecionado && empleadoSelecionado.sexo === "M"}
            value='M'
            onChange={handleChange}/>
            <br/><br/>
            <label>Salario</label>
            <input
            className="form-control"
            type="number"
            name="salario"
            value={empleadoSelecionado && empleadoSelecionado.salario}
            onChange={handleChange}/>
            <br/>
            
            
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick = {() => editar()}>Editar</button>
          <button className="btn btn-danger" onClick={() => setModalEditar(false)}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen = {modalEliminar}>
        <ModalBody>
          Estas seguro de deseas eliminar al empleado {empleadoSelecionado && empleadoSelecionado.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick= {() => eliminar(  )}>Si</button>
          <button className="btn btn-secondary" onClick= {() => setModalEliminar(false)}>No</button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Añadir empleado</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Clave</label>
            <input
            className="form-control"
            readOnly
            type="text"
            name="clave"
            value={data[data.length-1].clave+1}/>
            <br/>
            <label>Fotografia</label> 
            <input type="file" 
            class="form-control" 
            id="fotografia" 

            onChange={handleChangeImg}></input>
            <br/>
            <label>Nombre</label>
            <input
            className="form-control"
            type="text"
            name="nombre"
            value={empleadoSelecionado ? empleadoSelecionado.nombre: ''}
            onChange={handleChange}/>
            <br/>
            <label>Edad</label>
            <input
            className="form-control"
            type="number"
            name="edad"
            value={empleadoSelecionado ? empleadoSelecionado.edad: ''}
            onChange={handleChange}/>
            <br/>
            <label>Sexo</label>
            <br/>
            <label>F</label>
            <input
            className="form-check-input mx-3"
            type="radio" 
            name="sexo"
            value='F'
            onChange={handleChange}/>
            <label>M</label>
            <input
            className="form-check-input mx-3"
            type="radio" 
            name="sexo"
            value='M'
            onChange={handleChange}/>
            <br/><br/>
            <label>Salario</label>
            <input
            className="form-control"
            type="number"
            name="salario"
            value={empleadoSelecionado ? empleadoSelecionado.salario: ''}
            onChange={handleChange}/>
            <br/>
            
            
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick = {() => insertar()}>Añadir</button>
          <button className="btn btn-danger" onClick={() => setModalInsetar(false)}>Cancelar</button>
        </ModalFooter>
      </Modal>


      
    </div>
  );
}

export default App;
