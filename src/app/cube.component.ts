import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';
import { AppState } from './app.service';
const THREE = require('three');

@Component({
  selector: 'cube',
  template: `
  `
})
export class CubeComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() rotx = 0;
  @Input() roty = 0;
  @Input() scene : any;
  static geometry = new THREE.BoxGeometry( 1, 1, 1 );
  static material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  public cube = new THREE.Mesh( CubeComponent.geometry, CubeComponent.material );

  public ngOnInit() {
[   this.scene.add(this.cube);
  }

  public ngOnChanges(changes: SimpleChanges){
    this.cube.rotation.x = this.rotx;
    this.cube.rotation.y = this.roty;
    console.log(this.rotx, this.roty);
  }
}
