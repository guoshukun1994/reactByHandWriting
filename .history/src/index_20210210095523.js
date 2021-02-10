// import ReactDOM from 'react-dom';
import ReactDOM from './kreact/react-dom';
import './index.css';

function FunctionComponent(props) {
  return (
    <div className="border">
      <p></p>
    </div>
  )
}

const jsx = (
  <section className="border">
    <h1>慢慢慢</h1>
    <h1>全栈</h1>
    <a href="https://www.kaikeba.com">kkb</a>
  </section>
);

ReactDOM.render(jsx, document.getElementById("root"));


// 原生标签节点，比如div、a等
// 文本节点
// 函数组件
// 类组件
// Fragment
