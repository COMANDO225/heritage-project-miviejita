import { NextUIProvider, createTheme } from '@nextui-org/react'
import '../src/styles/globals.css'

function MyApp({ Component, pageProps }) {

    const heritageTheme = createTheme({
        type: 'light',
        theme: {
          colors: {
            primary: '#f50014',
            primaryShadow: '$primary',
          },
          fonts: {
            sans: 'Lato',
          }
        }
    })

  return (
    <NextUIProvider
        theme={heritageTheme}
    >
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
