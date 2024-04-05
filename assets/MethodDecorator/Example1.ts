import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export namespace MethodDecorator {
    @ccclass('Example1')
    export class Example1 extends Component {
        start() {
            const p = new Person("Ron");
            p.greet();
        }
    }

    function loggedMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        function replacementMethod(this: unknown, ...args: unknown[]) {
            console.log(`Inject ${target.constructor.name}`);

            console.log(`LOG: Entering method ${propertyKey}.`); // extracted
            const result = originalMethod.apply(this, ...args);
            console.log(`LOG: Exitting method ${propertyKey}.`); // extracted
            return result;
        }

        descriptor.value = replacementMethod;
        return descriptor;
    }

    class Person {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        @loggedMethod
        greet() {
            console.log(`Hello, my name is ${this.name}.`);
        }
    }
}
