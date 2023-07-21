import { Component } from '@angular/core';

@Component({
  selector: 'app-flow-field',
  templateUrl: './flow-field.component.html',
  styleUrls: ['./flow-field.component.css']
})
  
export class FlowFieldComponent {
  

  onClick () {
    this.opt.h1 = this.rand(0, 360)
    this.opt.h2 = this.rand(0, 360)
    this.opt.s1 = this.rand(20, 90)
    this.opt.s2 = this.rand(20, 90)
    this.opt.l1 = this.rand(30, 80)
    this.opt.l2 = this.rand(30, 80)
    this.opt.angle += this.deg(this.rand(60, 60)) * (Math.random() > .5 ? 1 : -1)

    this.Particles.forEach(element => {
      element.randomize()
    });
  }
}

