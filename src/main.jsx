import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HooksApp } from './HooksApp';
import { CounterApp } from './01-useState/CounterApp';
import { CounterCustomHook } from './01-useState/CounterCustomHook';
import { SimpleForm } from './02UseEffect/SimpleForm';
import { FormWithCustomHook } from './02UseEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */ }
    {/* <CounterCustomHook /> */ }
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    <MultipleCustomHooks />
  </>,
)
