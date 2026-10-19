import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServiceSerie from '../services/ServiceSerie';

export default class Menu extends Component {

    servicio =new ServiceSerie();
    state={
        series:[]
    }
    loadSeries=()=>{
        this.servicio.getSeries().then(res=>{
            this.setState({
                series:res
            })
        })
    }

    componentDidMount(){
        this.loadSeries();
    }




  render() {
    return (
      <nav className="border-b border-slate-800/80 bg-slate-950 text-white shadow-xl shadow-slate-950/10">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-10">
          <NavLink
            to="/"
            className="group flex min-w-0 items-center gap-3 rounded-xl outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-lg shadow-cyan-950/30 ring-1 ring-white/20">
              <img
                className="h-full w-full object-contain"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6DfyZ1a0_OJ0Dt3bPawJo6vveMz5oj9vV3dPJ9JmDw&s"
                alt="Logo de Series"
              />
            </span>
            <span className="truncate text-lg font-bold tracking-tight sm:text-xl">
              Series<span className="text-cyan-400">Hub</span>
            </span>
          </NavLink>

          <ul className="flex items-center gap-1 text-sm font-semibold sm:gap-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:px-4 ${
                    isActive
                      ? 'bg-white/10 text-cyan-300'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                Inicio
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/crearpersonaje"
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:px-4 ${
                    isActive
                      ? 'bg-white/10 text-cyan-300'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                Crear Personaje
              </NavLink>
            </li>


            <li className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:px-4"
              >
                Series
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <ul className="invisible absolute right-0 top-full z-20 mt-3 w-60 origin-top-right rounded-xl border border-slate-200 bg-white p-2 text-slate-700 opacity-0 shadow-2xl shadow-slate-950/20 transition-all duration-200 group-hover:visible group-hover:mt-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:mt-2 group-focus-within:opacity-100">
                {this.state.series.map((serie) => (
                  <li key={serie.idSerie}>
                    <NavLink
                      to={"/series/" + serie.idSerie}
                      className="block truncate rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-cyan-50 hover:text-cyan-700 focus-visible:bg-cyan-50 focus-visible:outline-none"
                    >
                      {serie.nombre}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
