import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PropertyDecorator')
export class PropertyDecorator extends Component {
    start() {
        let u1 = new User('teo', 'huadi');
        u1.password = 'anhhua'; //Báo lỗi vì quá ngắn <=7 ký tự 
        u1.password = 'anhxinhua'; //Không báo lỗi vì gán hợp lệ
        let un = u1.username;
        let pw = u1.password; //Thông báo lấy pass
    }
}

class User {
    public username: string;
    @TheoDoiMin(7)
    public password: string;
    constructor(u: string, p: string) {
        this.username = u;
        this.password = p;
    }
}

function TheoDoiMin(sokytu: number): any {
    return function (constructor: Object, tenthuoctinh: string) {
        let value: string;
        const laygiatri = function () {
            let now = new Date().toLocaleString('vi');
            console.log(`Lấy ${tenthuoctinh} lúc ${now}`);
            return value;
        };
        const gangiatri = function (newVal: string) {
            value = newVal;
            if (newVal.length <= sokytu)
                console.log(`${tenthuoctinh} ${newVal} ngắn quá,>${sokytu} ký tự`);
        };

        // Khai báo 2 method setter getter để kiểm soát 
        return Object.defineProperty(constructor, tenthuoctinh, {
            get: laygiatri,
            set: gangiatri
        });
    };
}
