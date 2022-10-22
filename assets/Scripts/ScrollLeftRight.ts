import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ScrollLeftRight")
export class ScrollLeftRight extends Component {

    direction: 'left' | 'right' = 'right';
    speed = 50;
    limit = 300;

  update(deltaTime: number) {
    const newPos = this.node.getPosition();
    if (newPos.x > this.limit) {
      this.direction = 'left';
    } else if (newPos.x < -this.limit) {
        this.direction = 'right';
    }
    if (this.direction === 'right') {
        newPos.x += deltaTime * this.speed;
    } else {
        newPos.x -= deltaTime * this.speed;
    }
    this.node.setPosition(newPos);
  }
}
