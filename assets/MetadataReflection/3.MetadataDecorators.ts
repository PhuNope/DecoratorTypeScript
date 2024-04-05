import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export namespace MetadataReflection {
    @ccclass('MetadataDecorators')
    export class MetadataDecorators extends Component {
        start() {
            let a = new UserModel();
            console.log(Reflect.getMetadata(`${ATTRIBUTE_PREFIX}icon`, a, 'username'));
        }
    }

    export const ATTRIBUTE_PREFIX = 'attribute:';

    interface IAttributeProperties {
        icon?: string;
        type?: AttributeType;
        isEditable?: boolean;
        isVisible?: boolean;
    }

    enum AttributeType {
        Text,
        Date,
        Number,
        Password
    }

    class UserModel {
        @Attribute({
            icon: 'fa-user',
            type: AttributeType.Text
        })
        username: string;

        @Attribute({
            icon: 'fa-key',
            type: AttributeType.Password
        })
        password: string;

        @Attribute({
            icon: 'fa-at',
            type: AttributeType.Text,
            isVisible: false
        })
        email: string;
        age: number;
        name: string;
    }

    /**
     * Adds attribute metadata to a property
     * @param {IAttributeProperties} attributes
     * @returns {(target: any, propertyKey: string) => void}
     * @constructor
     */
    export function Attribute(attributes: IAttributeProperties) {
        return (target: object, propertyKey: string) => {
            if (attributes !== undefined && attributes !== null) {
                Object.keys(attributes).forEach(key => {
                    Reflect.defineMetadata(`${ATTRIBUTE_PREFIX}${key}`, attributes[key], target, propertyKey);
                });
            }
        };
    }
}