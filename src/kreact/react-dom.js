// vnode 虚拟dom节点
// node dom 节点

// * vnode

// type 原生标签 string
//      文本节点 没有type
//      函数组件 函数
// props 属性 如 className 、 href、 id、 children 等
function render(vnode, container) {
    console.log('vnode', vnode);    // sy-log

    // step1 vnode -》 node
    const node = createNode(vnode);
    // step2
    container.appendChild(node);
}

function isStringOrNumber(sth) {
    return typeof sth === 'string' || typeof sth === 'number'
}

// 根据虚拟dom节点， 生成真实dom节点
function createNode(vnode) {
    let node;

    const {type} = vnode;

    // todo 根据虚拟dom节点，生成真实dom节点
    if(typeof type === 'string') {
        // 原生标签节点

        node = updateHostComponent(vnode);
    }else if(isStringOrNumber(vnode)){
        // 文本标签节点
        node = updateTextComponent(vnode);
    }else if(typeof type === 'function') {
        node = type.prototype.isReactComponent 
                ? updateClassComponent(vnode) 
                : updateFunctionComponent(vnode)
    }

    return node;
}

function updateNode(node, nextVal) {
    Object.keys(nextVal)
        .filter(k => {
        //    console.log('filter',k);
           return k !== 'children';
        })
        .forEach((k) => {
            node[k] = nextVal[k]
        })
}

// 原生标签节点。 div,a
function updateHostComponent(vnode) {
    const {type, props} = vnode;
    const node = document.createElement(type);
    updateNode(node, props);
    reconcileChildren(node, props.children);
    return node;
}

function updateTextComponent(vnode) {
    const node = document.createTextNode(vnode);
    return node;
}

// 返回node节点
function updateFunctionComponent(vnode) {
    const { type, props } = vnode;
    console.log('Functionvnode',vnode);
    const child = type(props);
    const node = createNode(child)
    return node;
}

// 返回node
function updateClassComponent(vnode) {
    const { type, props } = vnode;
    console.log('Classvnode',vnode);

    const instance = new type(props)
    const child = instance.render()
    // vnode -node
    const node = createNode(child)
    return node;
}

function reconcileChildren(parentNode, children) {
    const newChildren = Array.isArray(children) ? children : [children];

    for(let i = 0; i < newChildren.length; i++) {
        let child = newChildren[i];
        // vnode-> node,再把node插入到parentNode
        render(child, parentNode);
    }
}



// 原生标签节点。 div,a
// 文本节点
export default {render};

