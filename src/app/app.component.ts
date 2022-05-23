import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoAngular';

  //array de productos
  informacion = new Array();

  data = new FormGroup({
    nombreProducto: new FormControl('')
  });

  submit(){
    this.informacion.push(this.data.value.nombreProducto)
  }

  //eliminar productos
  eliminarProducto(indice: any){
    this.informacion.splice(indice.target.id, 1)
  }

  //modificar productos
  modificarProducto(indice: any){
    (document.getElementsByClassName("contenidoValues")[indice.target.id] as HTMLSpanElement).classList.add("añadirDisplayNone");
    (document.getElementsByClassName("formularioModificarProducto")[indice.target.id] as HTMLDivElement).classList.remove("añadirDisplayNone");

    if((document.getElementsByClassName("modificandoProducto")[indice.target.id] as HTMLInputElement).value.length > 0) {
      this.informacion.splice(indice.target.id, 1, (document.getElementsByClassName("modificandoProducto")[indice.target.id] as HTMLInputElement).value);
      (document.getElementsByClassName("contenidoValues")[indice.target.id] as HTMLSpanElement).classList.remove("añadirDisplayNone");
      (document.getElementsByClassName("formularioModificarProducto")[indice.target.id] as HTMLDivElement).classList.add("añadirDisplayNone");
    }
  }

}
