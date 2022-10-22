import { _decorator, Component, Node, CameraComponent, Camera } from "cc";
import { ParallaxCamera } from "./ParallaxCamera";
import { ParallaxLayer } from "./ParallaxLayer";
const { ccclass, property } = _decorator;

@ccclass("ParallaxBackground")
export class ParallaxBackground extends Component {
  @property({ type: Camera }) camera: Camera;
  parallaxCamera: ParallaxCamera = null;
  parallaxLayers: ParallaxLayer[] = [];

  start() {
    this.parallaxCamera = this.camera.getComponent(ParallaxCamera);
    const move = this.move.bind(this);
    if (this.parallaxCamera != null) this.parallaxCamera.registerCallback(move);
    this.parallaxLayers = this.node.getComponentsInChildren(ParallaxLayer);
  }

  public move(delta: number) {
    for (let i = 0; i < this.parallaxLayers.length; i++) {
      this.parallaxLayers[i].move(delta);
    }
  }
}
