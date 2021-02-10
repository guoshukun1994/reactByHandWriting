export default function Component(props) {
    this.props = props;
}
Component.prototype.isReactComponent = {}

// 为什么用函数不用类呢，因为类是Es6新引进的，不是所有浏览器都兼容，需要处理，而要函数则没有这个问题