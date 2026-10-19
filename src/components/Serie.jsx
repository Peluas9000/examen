import React, { Component } from 'react'
import ServiceSerie from '../services/ServiceSerie';
import { NavLink } from 'react-router-dom';

export default class Serie extends Component {
    servicio =new ServiceSerie();

    state={
        serie:null ,
        id:this.props.id 
    }

   

    loadSerie=()=>{
        this.servicio.getSerieById(this.state.id).then((res)=>{
           
            this.setState({
               
                serie:res
            })
              console.log(res)
        })
    }

    componentDidMount(){
        this.loadSerie();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
          this.setState({ id: this.props.id }, () => {
            this.loadSerie();
          });
        }
        }

    

  render() {
    return (
      <div className="px-4 py-8">
               <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-md border border-gray-200">
                    <h1 className="mb-8 text-center text-xl font-bold text-gray-800">
                        Información de la serie
                    </h1>

                    <div className="space-y-6">
                        <div>
                            <label htmlFor="nombre" className="block mb-2 text-sm font-semibold text-gray-700">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={this.state.serie?.nombre || ''}
                                readOnly
                                className="block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 text-gray-800 shadow-sm focus:outline-none"
                            />
                        </div>

                        <div>
                           
                            <div className="flex flex-col items-center gap-4 rounded-md border border-gray-200 bg-gray-50 p-4 sm:flex-row">
                                {this.state.serie?.imagen && (
                                    <img
                                        src={this.state.serie.imagen}
                                        alt={`Escudo del ${this.state.serie.nombre || 'equipo'}`}
                                        className="h-24 w-24 object-contain"
                                    />
                                )}
                                <input
                                    type="text"
                                    id="imagen"
                                    name="imagen"
                                    value={this.state.serie?.imagen || ''}
                                    readOnly
                                    className="block min-w-0 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-600 shadow-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="champions" className="block mb-2 text-sm font-semibold text-gray-700">
                                IMDB
                            </label>
                            <input
                                type="text"
                                id="champions"
                                name="champions"
                                value={this.state.serie?.puntuacion || ''}
                                readOnly
                                className="block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 text-gray-800 shadow-sm focus:outline-none"
                            />
                        </div>

                        
                    </div>

                    <div className="flex gap-4 mt-6">
                        <NavLink
                            to={"/personajes/"+this.state.serie?.idSerie}
                            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Personajes
                        </NavLink>
                        
                    </div>
                </div>
                
            </div>

            
     
    )
  }
}
