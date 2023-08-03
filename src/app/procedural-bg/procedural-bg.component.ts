// Animation by Marc Tannous: https://codepen.io/marctannous/pen/RNGjmz
// Adapted and integrated into this project

import { AfterViewInit, Component, ElementRef } from '@angular/core';

declare var THREE: any
declare var THREEx: any

@Component({
  selector: 'app-procedural-bg',
  templateUrl: './procedural-bg.component.html',
  styleUrls: ['./procedural-bg.component.css']
})
export class ProceduralBgComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit (): void {
    if (typeof THREEx !== 'undefined') {
      console.log('The threex library is working fine, the type is ', typeof THREEx)
      if (typeof THREE.Vector3 !== 'undefined') {
        console.log('YEST PLSSS')
      } else {
        console.log('BRUHHHHHHHHHHH')
      }
      this.initializeTerrain()
    }
    else {
      console.error("The THREEx library was not defined")
    }
  }

  private initializeTerrain (): void {
    const container = this.elementRef.nativeElement
    const renderer = new THREE.WebGLRenderer({
      antialias: true
    })
    // Full screen
    renderer.setSize(container.offsetWidth, container.offsetHeight)
    // console.log('The width', container.offsetWidth);

    // Append to html
    container.appendChild(renderer.domElement)

    const onRenderFcts: ((delta: number, now: number) => void)[] = []
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(25, container.offsetWidth / container.offsetHeight, 0.01, 1000)

    // play around with camera position
    camera.position.z = 15
    camera.position.y = 3

    // Fog provides depth
    scene.fog = new THREE.Fog(0x000, 0, 45)
    const light = new THREE.AmbientLight(0x202020)
    scene.add(light)
    const light2 = new THREE.DirectionalLight('white', 5)
    light2.position.set(0.5, 0.0, 2)
    scene.add(light2)
    const light3 = new THREE.DirectionalLight('white', 0.75 * 2)
    light3.position.set(-0.5, -0.5, -2)
    scene.add(light3)

    const heightMap = THREEx.Terrain.allocateHeightMap(128, 128)
    THREEx.Terrain.simplexHeightMap(heightMap)
    const geometry = THREEx.Terrain.heightMapToPlaneGeometry(heightMap)
    THREEx.Terrain.heightMapToVertexColor(heightMap, geometry)

    // Wireframe color
    const material = new THREE.MeshBasicMaterial({
      wireframe: true
    });
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    mesh.lookAt(new THREE.Vector3(0, 1, 0))

    // Wireframe scaling
    /* Play around with the scaling */
    mesh.scale.y = 6.5;
    mesh.scale.x = 6;
    mesh.scale.z = 0.20;
    mesh.scale.multiplyScalar(10);

    /* Play around with the camera */
    onRenderFcts.push(function (delta: number, now: number) {
      mesh.rotation.z += 0.1 * delta;
    })
    onRenderFcts.push(function () {
      renderer.render(scene, camera);
    })

    let lastTimeMsec: number | null = null
    function animate (nowMsec: number) {
      requestAnimationFrame(animate);
      lastTimeMsec = onRenderFcts.length === 0 ? null : (lastTimeMsec || nowMsec - 1000 / 60);
      const deltaMsec = Math.min(500, nowMsec - (lastTimeMsec as number));
      lastTimeMsec = nowMsec;

      onRenderFcts.forEach(function (onRenderFct) {
        onRenderFct(deltaMsec / 1000, nowMsec / 1000);
      });

    }
    requestAnimationFrame(animate)
  }
}