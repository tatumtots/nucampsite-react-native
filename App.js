import React from "react"
import Main from "./components/Main"
import { Provider } from "react-redux"
import { ConfigureStore } from "./redux/ConfigureStore"

const store = ConfigureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
