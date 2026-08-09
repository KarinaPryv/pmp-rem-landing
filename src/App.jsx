import { Toaster } from 'react-hot-toast';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/home/Home';

function App() {
    return (
        <>
            <Toaster
                position='top-right'
                gutter={16}
                toastOptions={{
                    duration: 4000,

                    className: 'app-toast',

                    success: {
                        iconTheme: {
                            primary: '#FFA03C',
                            secondary: '#121822',
                        },
                    },

                    error: {
                        iconTheme: {
                            primary: '#E45A5A',
                            secondary: '#121822',
                        },
                    },
                }}
            />
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </>
    );
}

export default App;
