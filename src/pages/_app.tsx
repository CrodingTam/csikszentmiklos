import Layout from '@/components/layout/Layout'
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default appWithTranslation(App);
