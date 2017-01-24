import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  Input
} from '@angular/core';
import { AppState } from './app.service';
const THREE = require('three');

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
<canvas id="main-map" (click)="rotate()"></canvas>
<cube [scene]="scene" [rotx]="x" [roty]="y"></cube>
`
})
export class AppComponent implements OnInit{
  constructor(
    public appState: AppState
  ) {}

  @Input() x = 0;
  @Input() y = 0;
  public scene = new THREE.Scene();
  public renderer;
  public camera;

  public ngOnInit() {
    this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('main-map')});
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    this.camera.position.z = 5;
    this.render();
  }

  public rotate(){
    this.x += 0.2;
    this.y += 0.2;
  }
  public render = () => {
    requestAnimationFrame( this.render );
    this.renderer.render( this.scene, this.camera );
  }
}
