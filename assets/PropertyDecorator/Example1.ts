import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


export namespace PropertyDecorator {
    @ccclass('Example1')
    export class Example1 extends Component {
        start() {
            console.log("Example 1!");
            const example = new ExampleClass();
            example.name = "Alice";
            console.log(example.name);
        }
    }

    function getset(): PropertyDecorator {
        return (target: Object, propertyName: string) => {
            let value: unknown = target[propertyName];

            console.log("prop Name: " + propertyName);

            const getter = function () {
                console.log(`Getter ${propertyName}`);
                return value;
            };

            const setter = function (newValue: unknown) {
                console.log(`Setter ${propertyName}`);
                value = newValue;
            };

            return Object.defineProperty(target, propertyName, {
                get: getter,
                set: setter
            });

        };
    };

    class ExampleClass {
        @getset()
        public name: string;

        constructor() {
            this.name = "ABC";
        }
    }
}