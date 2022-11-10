# immerjs

## 差异对比（主要是reducer中的变化）
only redux
```js
const reducer = (state, action) => {
  switch (action.type) {
    case "addA":
      return {
        ...state,
        a: {
          ...state.aa,
          aa: {
            aaa: state.a.aa.aaa + 1
          }
        }
      }
    case "addB":
      return {
        ...state,
        b: {
          ...state.bb,
          bb: {
            bbb: state.b.bb.bbb + 1
          }
        }
      }
  
    default:
      return state
  }
}
```

with immer
```js
const reducer = (state, action) => {
  switch (action.type) {
    case "addA":
      return produce(state, draft => {
        draft.a.aa.aaa += 1
      })
    case "addB":
      return produce(state, draft => {
        draft.b.bb.bbb += 1
      })
    default:
      return state
  }
}
```
## immer的优势

1.数据嵌套层次更深时,reducer更简洁明了

2.当数据本身没有变动的时,使用immer不会刷新数据，而redux本身始终都会返回新数据

3.学习成本低

4.一般我们改动只有一个小的块变动，而redux会认为所有的内部引用数据,都会是新的引用数据,而immer会保持不变的数据还是原来的数据

比如 我们改了a中的数据,我们打印 preState.b === nextState.b  redux情况下会返回false,相反immer会返回true。在redux数据量大的时候，性能会有提升
简单的redux结构可以不用immer
