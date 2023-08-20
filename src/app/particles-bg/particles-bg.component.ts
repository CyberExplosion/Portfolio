import { Component } from '@angular/core';
import {
  Engine, HoverMode, MoveDirection, OutMode,
} from 'tsparticles-engine';
import type { ISourceOptions } from "tsparticles-engine";
import { loadFireflyPreset } from 'tsparticles-preset-firefly';
@Component({
  selector: 'app-particles-bg',
  templateUrl: './particles-bg.component.html',
  styleUrls: ['./particles-bg.component.css']
})


// Triangle options: https://github.com/tsparticles/presets/blob/main/presets/triangles/src/options.ts
export class ParticlesBgComponent {
  particlesOptions: ISourceOptions = {
    preset: "firefly",
    fullScreen: false,
    fpsLimit: 120,
  };

  particlesInit = async (engine: Engine): Promise<void> => {
    console.log(engine);

    await loadFireflyPreset(engine);
  }
}