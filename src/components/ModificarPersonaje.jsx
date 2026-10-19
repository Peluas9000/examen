import React, { Component } from 'react'
import ServiceSerie from '../services/ServiceSerie';

export default class ModificarPersonaje extends Component {
    cajaPersonaje=React.createRef();
    cajaSerie=React.createRef();
    
    servicio = new ServiceSerie();

    state={
        series:[],
        personajes:[],
        personajeSeleccionado:null,
        serieSeleccionada:null
    }

    loadSeries=()=>{
        this.servicio.getSeries().then((res)=>{
            this.setState({
                series: res
            });
        });
    }

    loadPersonajes=()=>{
        this.servicio.getPersonajes().then((res)=>{
            this.setState({
                personajes: res
            });
        });
    }

    loadSerieById=(event)=>{
        event.preventDefault();
        const idSerie = this.cajaSerie.current.value;
        this.servicio.getSerieById(idSerie).then((res)=>{
            this.setState({
                serieSeleccionada: res
            });
        });
    }
    loadPersonajesById=(event)=>{
        event.preventDefault();
        const idPersonaje = this.cajaPersonaje.current.value;
        const personaje = this.state.personajes.find(p => p.idPersonaje === parseInt(idPersonaje));
        this.setState({
            personajeSeleccionado: personaje
        });
    }
    
    update=()=>{
        
       this.servicio.updatePersonaje(this.state.personajeSeleccionado).then((res)=>{
            console.log("Personaje actualizado:", res);
            
        });
    }

    componentDidMount(){
        this.loadSeries();
        this.loadPersonajes();
    }
    
   componentDidUpdate(prevProps, prevState) {
        if (prevState.serieSeleccionada !== this.state.serieSeleccionada) {
            this.loadSerieById();
        }
        if (prevState.personajeSeleccionado !== this.state.personajeSeleccionado) {
            this.loadPersonajesById();
        }
    }

    


    



  render() {
    return (
      <div>
        <h1 className="text-2xl font-bold">Modificar Personaje</h1>
         <form className="flex flex-col gap-4" >

              <div className="flex flex-col gap-2">
                    <label className="font-bold">Serie:</label>
                    <select ref={this.cajaSerie} className="border border-gray-300 rounded-md p-2">
                        {
                            this.state.series.map((serie,index)=>{
                                return(
                                    <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                )
                            }
                            )
                        }
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Personaje:</label>
                    <select ref={this.cajaIdPersonaje} className="border border-gray-300 rounded-md p-2">
                        {
                            this.state.personajes.map((personaje,index)=>{
                                return(
                                    <option key={index} value={personaje.idPersonaje}>{personaje.nombre}</option>
                                )
                            }
                            )
                        }
                    </select>
                </div>
                
               
                <button type="submit" onClick={(event) => this.update(event)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Guardar Cambios
                </button>

               
            </form>

          <div>
            <h2>{this.state.serieSeleccionada?.nombre}</h2>
            <img src={this.state.serieSeleccionada?.imagen} alt={this.state.serieSeleccionada?.nombre} />
          </div>

          <div>
            <h2>{this.state.personajeSeleccionado?.nombre}</h2>
            <img src={this.state.personajeSeleccionado?.imagen} alt={this.state.personajeSeleccionado?.nombre} />
          </div>

      </div>
    )
  }
}
