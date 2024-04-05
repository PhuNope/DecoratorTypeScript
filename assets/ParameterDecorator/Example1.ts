import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export namespace ParameterDecorator {
    @ccclass('Example1')
    export class Example1 extends Component {
        start() {
            const exampleInstance = new ExampleClass();
            exampleInstance.exampleMethod("Hello", 42);
        }
    }

    function logger() {
        return ParameterLogger;
    }
    function ParameterLogger(target: any, methodName: string, parameterIndex: number) {
        console.log(target);

        console.log(`Paramerter ${parameterIndex + 1} of ${methodName} has been asscessed.`);
    }

    class ExampleClass {
        exampleMethod(@logger() param1: string, @ParameterLogger parem2: number) {
            console.log("Inside exampleMethod");
        }
    }
}