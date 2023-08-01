// Animation by Robert Bue: https://codepen.io/robbue/pen/nearyy
// Adapted and integrated into this project

import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

@Component({
  selector: 'app-animface-bg',
  templateUrl: './animface-bg.component.html',
  styleUrls: ['./animface-bg.component.css']
})
export class AnimfaceBgComponent implements AfterViewInit, OnChanges {
  constructor(private elementRef: ElementRef) {

    this.windowHalfX = elementRef.nativeElement.offsetWidth / 2;
    this.windowHalfY = elementRef.nativeElement.offsetHeight / 2;
  }
  
  @Input() mouseCoordinate: { X: number, Y: number } = { X: 0, Y: 0 };

  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene
  private renderer!: THREE.WebGLRenderer
  private container!: any
  private mouseX = 0
  private mouseY = 0
  private windowHalfX: number
  private windowHalfY: number
  
  
  ngOnChanges (changes: SimpleChanges): void {
    if (changes['mouseCoordinate'] && !changes['mouseCoordinate'].firstChange) {
      this.onMouseMove();
    }
  }

  ngAfterViewInit (): void {
    this.container = this.elementRef.nativeElement;
    this.initCamScene();
    this.initObject();
    this.initRenderer();
    this.animate();
    window.addEventListener("resize", () => this.onWindowResize(), false)
  }

  private initCamScene (): void {
    this.camera = new THREE.PerspectiveCamera(50, this.container.offsetWidth / this.container.offsetHeight, 0.1, 2000);
    this.camera.position.z = 300;
    this.scene = new THREE.Scene();
  }

  private initObject (): void {
    const p_geom = new THREE.BufferGeometry();
    const positions: number[] = [];
    const normal: number[] = [];
    const uv: number[] = [];
    const p_material = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 1.5 });

    const loader = new OBJLoader();
    loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/40480/head.obj', (object) => {
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const scale = 8;

          for (let i = 0; i < child.geometry.attributes.position.array.length; i += 3) {
            const x = child.geometry.attributes.position.array[i] * scale;
            const y = child.geometry.attributes.position.array[i + 1] * scale;
            const z = child.geometry.attributes.position.array[i + 2] * scale;
            positions.push(x, y, z);
          }

          for (let k = 0; k < child.geometry.attributes.normal.array.length; k += 3) {
            const x = child.geometry.attributes.normal.array[k];
            const y = child.geometry.attributes.normal.array[k + 1];
            const z = child.geometry.attributes.normal.array[k + 2];
            normal.push(x, y, z);
          }

          for (let j = 0; j < child.geometry.attributes.uv.array.length; j += 3) {
            const x = child.geometry.attributes.normal.array[j];
            const y = child.geometry.attributes.normal.array[j + 1];
            const z = child.geometry.attributes.normal.array[j + 2];
            uv.push(x, y, z);
          }
        }
        //Set the points to the buffer
        p_geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        p_geom.setAttribute('normal', new THREE.Float32BufferAttribute(normal, 3));
        p_geom.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));

        const mesh = new THREE.Points(p_geom, p_material);
        this.scene.add(mesh);
      });
    });
  }

  private initRenderer (): void {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    this.renderer.setClearColor(0x000000, 0);
    this.elementRef.nativeElement.appendChild(this.renderer.domElement);
  }

  private onWindowResize (): void {
    this.windowHalfX = this.container.offsetWidth / 2;
    this.windowHalfY = this.container.offsetHeight / 2;
    this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
  }

  private onMouseMove () {
    this.mouseX = (this.mouseCoordinate.X - this.windowHalfX) / 2;
    this.mouseY = (this.mouseCoordinate.Y - this.windowHalfY) / 2;
    // console.log("The new mouse X for child: ", this.mouseX);
  }

  private animate (): void {
    requestAnimationFrame(() => this.animate());
    this.camera.position.x += (-(this.mouseX * 0.5) - this.camera.position.x) * 0.05;
    this.camera.position.y += ((this.mouseY * 0.5) - this.camera.position.y) * 0.05;

    this.camera.lookAt(this.scene.position);

    this.renderer.render(this.scene, this.camera);
  }
}