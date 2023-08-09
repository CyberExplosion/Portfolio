import { Component } from '@angular/core';
import { NgParticlesComponent } from 'ng-particles';
import {
  ClickMode,
  Engine,
  HoverMode,
} from 'tsparticles-engine';
import type { IModes, ISourceOptions } from "tsparticles-engine";
import { loadLinksPreset } from 'tsparticles-preset-links';
@Component({
  selector: 'app-particles-bg',
  templateUrl: './particles-bg.component.html',
  styleUrls: ['./particles-bg.component.css']
})


// Triangle options: https://github.com/tsparticles/presets/blob/main/presets/triangles/src/options.ts
export class ParticlesBgComponent {
  particlesOptions: ISourceOptions = {
    fullScreen: false,
    background: {
      color: "#000000",
    },
    particles: {
      number: {
        value: 100,
      },
      links: {
        distance: 125,
        enable: true,
        triangles: {
          enable: true,
          opacity: 0.1,
        },
      },
      move: {
        enable: true,
        speed: 2,
      },
      size: {
        value: 1,
      },
      shape: {
        type: "circle",
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: HoverMode.repulse
        }
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    }
  };

  particlesInit = async (engine: Engine): Promise<void> => {
    console.log(engine);

    await loadLinksPreset(engine);
  }
}