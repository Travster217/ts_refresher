import { useRef } from 'react';
import Input from './components/Input.tsx';
import Button from './components/Button.tsx';
import Container from './components/Container.tsx';
import Form, { type FormHandle } from './components/Form.tsx';

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string; };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your name" type="text"/>
        <Input id="age" label="Your age" type="number"/>
        <p>
          <Container as={Button}>Save</Container>
        </p>
      </Form>
    </main>
  );
}

export default App;
