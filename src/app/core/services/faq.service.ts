import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  obtenerFaqs(): PreguntaFrecuente[] {
    return this.faqs;
   }
   faqs: PreguntaFrecuente[] = [
     { pregunta: '¿Para qué sirve la magnetoterapia?', respuesta: 'Es una práctica dentro de la Fisioterapia que emplea campos magnéticos estáticos o permanentes sobre el cuerpo que se efectúa mediante imanes de alta o baja frecuencia según el tipo de patología a tratar. Es especialmente efectivo en el tratamiento de cuadros de dolor como consecuencia de inflamaciones.'},
     { pregunta: '¿Puedo renovar mi alquiler?', respuesta: 'Si, puede renovar su alquiler al vencimiento de su alquiler vigente. Debe comunicarse con nosotros, informarnos que quiere extender el plazo y aguardar a que confirmemos la renovación.'},
     { pregunta: '¿Tienen local físico?', respuesta: 'Si, nuestro negocio se ubica en 27 de febrero 1724. Nuestro horario de atención es 9:30 a 13:00 - 15:00 a 18:00.'},
     { pregunta: '¿Tienen equipo para hombro/cadera?', respuesta: 'Si, contamos con placas que se utilizan normalmente para hombro/ cadera'},
     { pregunta: '¿Qué dolencias se pueden tratar con magnetoterapia?', respuesta: `Ayuda a regenerar, desinflamar, unir huesos o disolver edemas óseos. Algunas de las dolencias que se pueden tratar son:

     🔸Artrosis
     🔸Fracturas de cualquier parte del cuerpo
     🔸Edemas óseos
     🔸Lesiones de ligamentos cruzados
     🔸Meniscos
     🔸Diabetes para cerrar heridas
     🔸Operaciones de juanetes
     🔸Desgarros
     🔸Tendinitis
     🔸Inflamaciones de todo tipo
     🔸Esguinces
     🔸Tendón De aquiles
     🔸Fascitis plantar`
    },
    { pregunta: 'Otros productos recomendados', respuesta: 'Para mas productos recomendados podes visitar nuestras redes sociales y contactarnos. Instagram: @gaussortopedia'}
    ,
 
   ];
 
   constructor() { }
 }
 export interface PreguntaFrecuente{
   pregunta: string;
   respuesta: string;
 
}
