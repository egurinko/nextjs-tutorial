import { AppProps } from 'next/app'
import styles from "../styles/global.css"

const App = ({ pageProps, Component }: AppProps) => {
    return <Component {...pageProps} />    
}

export default App
