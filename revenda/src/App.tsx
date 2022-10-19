import './styles/global.css';
import { Text } from './components/Text';
import { Heading } from './components/Heading';
import { Button } from './components/Button';
import { Input } from './components/Input';

export function App() {


  return (
    <div className="flex flex-col p-10 justify-center items-center">
     <Heading size='2xl' asChild={false}>Sistema de Revenda</Heading>
      <Text size='lg' asChild={false} >{(<div>Heloow</div>)}</Text>
      
      <Button>Botao1</Button>
      <Input  placeholder='Digite seu nome aqui...'>Nome:</Input>
    </div>
  )
}