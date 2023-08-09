import { Component } from '@angular/core';
import { NgParticlesComponent } from 'ng-particles';
import {
  Background,
  BackgroundMaskCover,
  ClickMode,
  Engine,
  HoverMode,
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
    fullScreen: false,
    particles: {
      color: {
        value: "#ffffff",
      },
      // number: {
      //   value: 50
      // }
    },
    interactivity: {
      // events: {
      //   onClick: {
      //     enable: true,
      //     mode: ClickMode.push
      //   },
      //   onHover: {
      //     enable: true,
      //     mode: HoverMode.repulse
      //   }
      // }
    },
    fpsLimit: 120,
    preset: "links",
  };

  particlesInit = async (engine: Engine): Promise<void> => {
    console.log(engine);

    await loadLinksPreset(engine);
  }
}