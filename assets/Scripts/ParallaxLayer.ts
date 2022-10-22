import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ParallaxLayer")
export class ParallaxLayer extends Component {
  @property parallaxFactor: number = 0;

  move(delta: number) {
    const newPos = this.node.getPosition();
    newPos.x -= delta * this.parallaxFactor;
    this.node.setPosition(newPos);
  }
}
