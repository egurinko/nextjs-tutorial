import { AppProps } from 'next/app'
import "../styles/global.css"

const App = ({ pageProps, Component }: AppProps) => {
    return <Component {...pageProps} />    
}

export default App
