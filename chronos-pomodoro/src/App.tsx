
import './theme.css'
import Header from './components/Header/Header'
import {TimerIcon} from 'lucide-react'
export default function App() {

  return (
    <>
      <Header>
        Olá mundo, Header
        <button><TimerIcon/></button>
        </Header>
    </>
  )
}
