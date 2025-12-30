import { Hero7Demo } from '@/components/blocks/modern-hero';
import { Footer } from '@/components/blocks/footer';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow flex flex-col">
                <Hero7Demo />
            </div>
            <Footer />
        </div>
    );
}

export default App;


