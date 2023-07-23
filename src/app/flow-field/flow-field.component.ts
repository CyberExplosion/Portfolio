import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5'
// https://codepen.io/supah/pen/ExabJxB?editors=1111 -- source

@Component({
  selector: 'app-flow-field',
  templateUrl: './flow-field.component.html',
  styleUrls: ['./flow-field.component.css']
})

export class FlowFieldComponent implements OnInit {
  opt = {
    particles: window.innerWidth / 500 ? 1000 : 500,
    noiseScale: 0.009,
    angle: Math.PI / 180 * (-90),
    h1: this.rand(0, 360),
    h2: this.rand(0, 360),
    s1: this.rand(20, 90),
    s2: this.rand(20, 90),
    l1: this.rand(30, 80),
    l2: this.rand(30, 80),
    strokeWeight: 1.2,
    tail: 82
  };
  Particles: Particle[] = []
  time: number = 0

  ngOnInit(): void {
    // create a new instance and pass in sketch function
    const sketch = (p: any) => this.sketch(p)
    new p5(sketch)
  }

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

  deg (a: number): number {
    return Math.PI / 180 * a
  }
  rand (v1: number, v2: number): number {
    return Math.floor(v1 + Math.random() * (v2 - v1))
  }

  private sketch (p: any) {
    p.setup = () => {
      const canvas = p.createCanvas(window.innerWidth, window.innerHeight)
      canvas.parent('canvasContainer')
      for (let i = 0; i < this.opt.particles; i++) {
        this.Particles.push(new Particle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, this.opt, p))
      }
      p.strokeWeight(this.opt.strokeWeight)
    }

    p.draw = () => {
      this.time++
      p.background(0, 100 - this.opt.tail)

      this.Particles.forEach(element => {
        element.update(this.time)
        element.render()
      });
    }

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    }
  }
}

class Particle {
  x: number
  y: number
  lx: number
  ly: number
  vx: number
  vy: number
  ax: number
  ay: number
  hueSemen: number
  hue: number
  sat: number
  light: number
  maxSpeed: number
  opt: any
  p5Sketch: any

  constructor(x: number, y: number, opt: any, p5Sketch: any) {
    this.x = x
    this.y = y
    this.lx = x
    this.ly = y
    this.vx = 0
    this.vy = 0
    this.ax = 0
    this.ay = 0
    this.hueSemen = Math.random()
    this.hue = this.hueSemen > .5 ? 20 + opt.h1 : 20 + opt.h2
    this.sat = this.hueSemen > .5 ? opt.s1 : opt.s2
    this.light = this.hueSemen > .5 ? opt.l1 : opt.l2
    this.maxSpeed = this.hueSemen > .5 ? 3 : 2
    this.opt = opt
    this.p5Sketch = p5Sketch
  }

  randomize () {
    this.hueSemen = Math.random()
    this.hue = this.hueSemen > .5 ? 20 + this.opt.h1 : 20 + this.opt.h2
    this.sat = this.hueSemen > .5 ? this.opt.s1 : this.opt.s2
    this.light = this.hueSemen > .5 ? this.opt.l1 : this.opt.l2
    this.maxSpeed = this.hueSemen > .5 ? 3 : 2
  }

  update (time: number) {
    this.follow(time)

    this.vx += this.ax
    this.vy += this.ay

    var p = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
    var a = Math.atan2(this.vy, this.vx)
    var m = Math.min(this.maxSpeed, p)
    this.vx = Math.cos(a) * m
    this.vy = Math.sin(a) * m

    this.x += this.vx
    this.y += this.vy
    this.ax = 0
    this.ay = 0

    this.edges()
  }

  follow (time: number) {
    const angle = (this.p5Sketch.noise(this.x * this.opt.noiseScale, this.y * this.opt.noiseScale, time * this.opt.noiseScale)) * Math.PI * 0.5 + this.opt.angle;

    this.ax += Math.cos(angle)
    this.ay += Math.sin(angle)

  }

  updatePrev () {
    this.lx = this.x
    this.ly = this.y
  }

  edges () {
    if (this.x < 0) {
      this.x = window.innerWidth
      this.updatePrev()
    }
    if (this.x > window.innerWidth) {
      this.x = 0
      this.updatePrev()
    }
    if (this.y < 0) {
      this.y = window.innerHeight
      this.updatePrev()
    }
    if (this.y > window.innerHeight) {
      this.y = 0
      this.updatePrev()
    }
  }

  render () {
    this.p5Sketch.stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`)
    this.p5Sketch.line(this.x, this.y, this.lx, this.ly)
    this.updatePrev()
  }
}