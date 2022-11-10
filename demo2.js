import { createStore } from 'redux';
import { produce } from 'immer';

// with immer
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

a2.addEventListener('click', () => {
  store.dispatch({
    type: "addA"
  })
})

b2.addEventListener('click', () => {
  store.dispatch({
    type: "addB"
  })
})


store.subscribe(() => {
  a2.textContent = store.getState().a.aa.aaa
  b2.textContent = store.getState().b.bb.bbb
})