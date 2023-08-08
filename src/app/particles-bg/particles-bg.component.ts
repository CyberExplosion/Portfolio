import { Component } from '@angular/core';
import { NgParticlesComponent } from 'ng-particles';
import {
  Engine,
} from 'tsparticles-engine';
import type { ISourceOptions } from "tsparticles-engine";
import { loadLinksPreset } from 'tsparticles-preset-links';
@Component({
  selector: 'app-particles-bg',
  templateUrl: './particles-bg.component.html',
  styleUrls: ['./particles-bg.component.css']
})

  
// Triangle options: https://github.com/tsparticles/presets/blob/main/presets/triangles/src/options.ts
export class ParticlesBgComponent {
  particlesOptions: ISourceOptions = {
    backgroundMode: ,
    particles: {
    },
    shape: {
      type: "square", // starting from v2, this require the square shape script
    },
    interactivity: {
      events: {
        onClick: {
          detectsOn: "window",
          enable: true,
          mode: "grab"
        }
      }
    },
    fpsLimit: 120,
    preset: "links",
  };

  particlesInit = async (engine: Engine): Promise<void> => {
    console.log(engine);

    await loadLinksPreset(engine);
  }
}