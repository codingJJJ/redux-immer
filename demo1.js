// only redux
import { createStore } from 'redux';

// 主要是reducer的代码变动
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

const initState = {
  a: {
    aa: {
      aaa: 0
    }
  },
  b: {
    bb: {
      bbb: 0
    }
  }
}

const store = createStore(reducer, initState);

a1.addEventListener('click', () => {
  store.dispatch({
    type: "addA"
  })
})

b1.addEventListener('click', () => {
  store.dispatch({
    type: "addB"
  })
})


store.subscribe(() => {
  a1.textContent = store.getState().a.aa.aaa
  b1.textContent = store.getState().b.bb.bbb
})