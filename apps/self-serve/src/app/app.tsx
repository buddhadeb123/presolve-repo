// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import {Ui} from '@myorg/ui';

export function App() {
  return (
    <>
      <Ui/>
      <NxWelcome title="self-serve" />
      <div />
    </>
  );
}

export default App;
