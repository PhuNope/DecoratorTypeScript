import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FactoryDecorator')
export class FactoryDecorator extends Component {
    start() {
        var u1 = new User('Lượm'); console.log(u1);

        var u1 = new HocSinh("Tèo"); console.log(u1);
    }

    update(deltaTime: number) {

    }
}

function addUserStatus(st: number) {
    return function (constructor: Function) {
        constructor.prototype.status = st;
    };
}
@addUserStatus(4)
class User {
    constructor(public name: string) { }
}

function ChangeHS(st: number) {
    return function (constructor: Function): any {
        return class {
            private hoten: string; tuoi: number;
            constructor(h: string) {
                this.hoten = h;
                this.tuoi = st;
            }
        };
    };
}
@ChangeHS(20)
class HocSinh {
    public name: string;
    constructor(h: string) { this.name = h; }
}
