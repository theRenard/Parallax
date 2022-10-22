import { _decorator, Component, Node, CameraComponent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ParallaxCamera")
export class ParallaxCamera extends Component {
  oldPosition: number = 0;
  camera: CameraComponent = null;
  callback: (delta: number) => void = null;
  start() {
    this.oldPosition = this.node.getPosition().x;
    this.camera = this.getComponent(CameraComponent);
  }

  update() {

    if (this.node.position.x !== this.oldPosition) {
      if (this.callback !== null) {
        const delta = this.oldPosition - this.node.getPosition().x;
        this.callback(delta);
      }
      this.oldPosition = this.node.getPosition().x;
    }
  }

  public registerCallback(callback: (delta: number) => void) {
    this.callback = callback;
  }


}
