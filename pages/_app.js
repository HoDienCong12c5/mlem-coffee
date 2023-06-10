import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css'
import 'antd/dist/reset.css';
import 'aos/dist/aos.css'
import React from 'react';
import ThemeSC from '@/Components/ThemsSC';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <ThemeSC>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Hydrate>
      </QueryClientProvider>


    </ThemeSC>
  )

}

export default MyApp
