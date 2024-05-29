import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  constructor() { }
  setZoom(zoomLevel: number): void {
    document.body.style.transform = `scale(${zoomLevel})`;
  }
}
