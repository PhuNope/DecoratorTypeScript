import "reflect-metadata";
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export namespace MetadataReflection {
    @ccclass('Obtaining_type')
    export class Obtaining_type extends Component {
        propa: string;

        start() {

        }
    }

    function logType(target: Object, propertyName: string) {
        // Reflect.defineMetadata("design:type", true, target, propertyName);
        // var t = Reflect.getMetadata("design:type", target, propertyName);
        // console.log(`${propertyName} type: ${typeof t}`);
    }

    class Demo {
        @logType
        public attri1: string;
    }
}