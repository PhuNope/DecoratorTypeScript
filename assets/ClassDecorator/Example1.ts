import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export namespace ClassDecorator {
    @ccclass('Example1')
    export class Example1 extends Component {
        start() {
            const example = new ExampleClass("John Doe", "New Jork", 30);
            example.displayInfo();
            console.log(example);

        }
    }

    function uppercaseConstructor<T extends new (...args: unknown[]) => unknown>(target: T): T {
        const originalConstructor = target;

        function modifiedConstructor(...args: unknown[]) {
            const instance = new originalConstructor(...args);

            Object.keys(instance).forEach((key) => {
                if (typeof instance[key] === 'string') {
                    instance[key] = instance[key].toUpperCase();
                }
            });

            // get properties
            console.log("uppercase: " + target.name);
            Object.keys(instance).forEach((key) => {
                console.log(key);
            });
            console.log("end uppercase");

            // set method
            const method = instance["displayInfo"];
            instance["displayInfo"] = () => {
                console.log("custom method displayInfo");
                return method?.apply(instance);
            };

            return instance;
        }

        modifiedConstructor.prototype = originalConstructor.prototype;

        return modifiedConstructor as unknown as T;
    }

    @uppercaseConstructor
    class ExampleClass {
        public propA: number = 1;

        constructor(private name: string, private city: string, private age: number) { }

        displayInfo() {
            console.log(`Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
        }
    }
}