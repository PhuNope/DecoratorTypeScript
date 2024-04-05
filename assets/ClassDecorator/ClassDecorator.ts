import { _decorator, Component, Node } from 'cc';
const { ccclass, property, executionOrder } = _decorator;

@ccclass('ClassDecorator')
@executionOrder(1000)
export class ClassDecorator extends Component {
    start() {
        let a = new ThuCung("abc", 10);

        let hv1 = new HocVien('Tèo'); console.log(hv1);

        const x1 = new XeMay('Vision 125', 39.5);
        console.log(x1, x1["mauxe"]);

        let u1 = new HocSinh("Tèo"); console.log(u1);
    }

    update(deltaTime: number) {

    }
}

function ThuCungEx(constructor: Function) {
    console.log("This is a function!");
}

@ThuCungEx
class ThuCung {
    constructor(private ten: string, private tuoi: number) { }
}

function BaseHV(constructor: Function) {
    constructor.prototype.phai = true;
    constructor.prototype.ngaytao = new Date().toLocaleString('vi');
}

@BaseHV
class HocVien {
    constructor(public ht: string) { }
}

function themTT<T extends { new(...args: any[]): {}; }>(constructor: T) {
    return class extends constructor {
        mauxe: string = 'Xanh';
    };
}

@themTT
class XeMay {
    constructor(private tx: string, private gia: number) { }
}

function ChangeHS(constructor: Function): any {
    return class {
        private hoten: string;
        public phai: boolean;
        constructor(h: string) {
            this.hoten = h;
            this.phai = true;
        }
    };
}
@ChangeHS
class HocSinh {
    public name: string;
    constructor(h: string) { this.name = h; }
}

