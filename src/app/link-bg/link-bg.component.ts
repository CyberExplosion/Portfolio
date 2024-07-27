import { Component } from '@angular/core';
import { NgParticlesService, NgxParticlesComponent } from '@tsparticles/angular';
import { loadLinksPreset } from '@tsparticles/preset-links';

@Component({
  selector: 'app-link-bg',
  templateUrl: './link-bg.component.html',
  styleUrl: './link-bg.component.css'
})
export class LinkBgComponent {
  id = "tsparticles"
  linkOptions: NgxParticlesComponent['options'] = {
    preset: 'links',
    fullScreen: false,
    fpsLimit: 120,
  }

  constructor(private readonly ngParticlesService: NgParticlesService) { }

  ngOnInit (): void {
    this.ngParticlesService.init(async (engine) => {

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadLinksPreset(engine);
    });
  }

  particlesLoaded (): void { }

}
