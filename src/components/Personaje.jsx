import React, { Component } from 'react'
import ServiceSerie from '../services/ServiceSerie';
import { Navigate, NavLink } from 'react-router-dom';

export default class Personaje extends Component {

    state = {
        personajes:[],
        status:false,
        id:this.props.id
    }

    servicio = new ServiceSerie();

    loadPersonajes = () => {
        this.servicio.getPersonajesBySerieId(this.props.id).then((res) => {
            this.setState({
                personajes: res
            })
            console.log(res)
        })
    }

    componentDidMount() {
        this.loadPersonajes();
    }

  render() {
    if (this.state.status) {
        return <Navigate to={"/series/" + this.state.id} />;
    }
    return (
       
      
      <div>
        <table className="table-auto border-collapse border border-slate-400 w-full mt-10">
            <thead className="bg-blue-500 text-white">
                <tr >
                 
                    <th>Nombre</th>
                    <th>Imagen</th>
                
                </tr>
            </thead>
            <tbody>
                {
                    this.state.personajes.map((personajes,index)=>{
                        return(
                            <tr key={index}>
                                <td>{personajes.nombre}</td>
                                <td><img src={personajes.imagen} alt={personajes.nombre} className="w-16 h-16 object-cover" /></td>

                            </tr>
                        )
                    }
                    )
                }
            </tbody>
        </table>
         <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-4" onClick={() => this.setState({ status: true })}>
                Volver a Serie
            </button>
      </div>
    
    )
  }
}
