import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class ServiceSerie {

    getSeries () {
        return new Promise(function(resolve){
            let request = "/api/Series";
            let url = Global.url + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        });   
}


     getSerieById(id) {
            return new Promise(function(resolve){
                let request = "/api/Series/"+id;
                let url = Global.url + request;
                axios.get(url).then(res => {
                    resolve(res.data);
                });
            });
        }



        getPersonajesBySerieId(id) {
            return new Promise(function(resolve){
                let request = "/api/Series/PersonajesSerie/"+id;
                let url = Global.url + request;
                axios.get(url).then(res => {
                    resolve(res.data);
                });
            });
        }

        //crear personaje 
        createPersonaje(personaje) {
            return new Promise(function(resolve){
                let request = "/api/Personajes";
                let url = Global.url + request;
                axios.post(url, personaje).then(res => {
                    resolve(res.data);
                });
            });
        }

}