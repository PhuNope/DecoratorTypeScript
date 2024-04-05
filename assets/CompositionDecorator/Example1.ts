import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


export namespace CompositionDecorator {
    @ccclass('Example1')
    export class Example1 extends Component {
        start() {

        }
    }

    // 1. Các biểu thức cho mỗi trình trang trí được đánh giá từ trên xuống dưới
    // 2. Các kết quả sau đó được gọi là các hàm từ dưới lên trên

    function first() {
        console.log("first(): factory evaluated");
        return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log("first(): called");
        };
    }

    function second() {
        console.log("second(): factory evaluated");
        return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log("second(): called");
        };
    }

    class ExampleClass {
        @first()
        @second()
        method() { }
    }
}