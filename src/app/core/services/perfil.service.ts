import { NgModel } from "@angular/forms";
import { Perfil } from "../interfaces/perfil";
import { Injectable, WritableSignal, booleanAttribute, numberAttribute } from "@angular/core";
import { Tab1Page } from "src/app/tab1/tab1.page";

@Injectable({
    providedIn: `root`
})

export class PerfilService{

    constructor() {
       }

    perfil:Perfil = {
        nombre: "",
        telefono: "",
        domicilio: "",
        fechaEquipo: "",
        dias: 0
    }

    generarMensaje(){
        const primeraParte = "https://wa.me/+5493415641488?text="
        const ultimaParte = `Hola! Me gustaria alquilar el equipo de magnetoterapia. Mis datos son los siguientes: 
        Nombre: ${this.perfil.nombre}
        Domicilio: ${this.perfil.domicilio}
        Telefono: ${this.perfil.telefono}
        La fecha en que necesito el equipo: 
        ${this.perfil.fechaEquipo}
        Lo necesito por: ${this.perfil.dias} dias
        `
        return encodeURI(primeraParte+ultimaParte);
    }

    cambiarDias(dias:number): void{
        this.perfil.dias = dias;
    }
        


}