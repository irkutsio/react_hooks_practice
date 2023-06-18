// import { TestUseMemo } from "./TestUseMemo/TestUseMemo";

import { Alert } from './TestUseContex/Alert';
import { Main } from './TestUseContex/Main';
import { Context } from './TestUseContex/Context/Context';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <TestUseMemo/> */}
      <Context>
        <Alert />
        <Main />
      </Context>
    </div>
  );
};
