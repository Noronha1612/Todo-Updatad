import {
  Container,
  Content,
  Header,
} from "./AppStyles"

import Logo from './assets/logo.svg'
import { TaskForm } from "./components/TaskForm"
import { Tasks } from "./components/Tasks"

function App() {

  return (
    <Container>
      <Header>
        <img src={Logo} />
      </Header>

      <Content>
        <TaskForm />

        <Tasks />
      </Content>
    </Container>
  )
}

export default App