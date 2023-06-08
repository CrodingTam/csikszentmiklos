import Layout from '@/components/layout/Layout'
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'
import { store } from 'store/store';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default appWithTranslation(App);
