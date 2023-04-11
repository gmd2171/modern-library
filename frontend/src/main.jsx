import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const mantineTheme = {
  colors: {
    brand: ['#5F3DC4', '#5F3DC4', '#5F3DC4', '#5F3DC4', '#5F3DC4', '#5F3DC4', '#5F3DC4', '#5F3DC4', '#5F3DC4', '#5F3DC4'],
  },
  primaryColor: 'brand',
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={mantineTheme} withGlobalStyles withNormalizeCSS>
      <Notifications />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
)
