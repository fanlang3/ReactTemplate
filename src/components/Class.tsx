import React, { PureComponent } from "react";
import small from '../assets/imgs/small.png';

// 装饰器为组件添加age属性
function addAge(Target: Function) {
    Target.prototype.age = 111;
}

// 使用装饰器
@addAge
class Class extends PureComponent {
    age?: number

    render() {
        return (
            <div>
                <h2>我是类组件----{this.age}</h2>
                <img src={small} alt='小于10kb图片' />
            </div>
        )
    }
}

export default Class;