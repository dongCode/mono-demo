import { AppType } from '@base/shared/types';
import { sum } from '@base/shared/utils';
import { Component } from '@base/ui';
import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[#fff] text-xl">
        <h2>Create React App</h2>
        <img src={logo} className="h-[40vmin] pointer-events-none animate-spin-slow" alt="logo" />
        <Component />
        <p>AppType.Web is {AppType.Web}</p>
        <p>sum(1, 1) is {sum(1, 1)}</p>
        <a
          className="text-[#61dafb]"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
