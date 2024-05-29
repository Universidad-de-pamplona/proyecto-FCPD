import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.css']
})
export class ToDoCardComponent {
[x: string]: any;
@ViewChild('tasks') contenedor!: ElementRef;
codigo:string ="hola";
constructor(private cdr: ChangeDetectorRef) {}

addTask(task:string){

const divHtml = document.createElement('div');
const p = document.createElement('p');
divHtml.classList.add("task");
p.classList.add("task-title");
p.innerHTML=task;
divHtml.appendChild(p);


this.contenedor.nativeElement.appendChild(divHtml);
this.recargarEstilos();
}


recargarEstilos() {
  // Forzar a Angular a volver a cargar estilos
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(''));
  head.appendChild(style);
}

ngAfterViewInit() {
  // Llamar a la función para recargar estilos después de que la vista se haya inicializado
  this.recargarEstilos();
  this.cdr.detectChanges();
}


}
