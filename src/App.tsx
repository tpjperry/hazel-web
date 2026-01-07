import { Routes, Route } from 'react-router-dom';
import { Hero7Demo } from '@/components/blocks/modern-hero';
import { Footer } from '@/components/blocks/footer';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';

function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow flex flex-col">
                <Hero7Demo />
            </div>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
        </Routes>
    );
}

export default App;


