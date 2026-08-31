
import Message from './components/Message'
import CounterP from './components/CounterP'

const App = () => {
  return (
    <div>
      <Message info="Child Component">
        <h3>This is child tag inside Message Component</h3>
        <CounterP />
      </Message>
    </div>
  )
}

export default App