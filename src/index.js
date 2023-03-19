import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {transitions ,positions , types , Provider as AlertProvider} from 'react-alert'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { color, display } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
// import AlertTemplate from 'react-alert-template-basic'


const options ={
  position : positions.TOP_CENTER,
  timeout: 5000,
  offset : '30px',
  transition: transitions.FADE
}

const cssStyle={
  backgroundColor: '#d32f2f',
  padding: '16px 10px',
  display: 'flex',
  justifyContent: 'space-between',
  color : 'white',
  fontWeight : 500 ,
  borderRadius: '8px',
  minWidth : 'fit-content',
  boxShadow : 'rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px'
}

const AlertTemplate = ({ style, options, message, close }) => (
  <div style={{...style ,  ...cssStyle}}>
    {options.type === 'error' && <ErrorOutlineIcon sx={{marginRight : '8px'}}  />}
    {message}
    <CloseIcon onClick={close} sx={{cursor : 'pointer' , marginLeft : '8px'}} />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options} >
      <App />
    </AlertProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
