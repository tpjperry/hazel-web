import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="border-t border-border bg-transparent py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-4 text-center text-sm text-muted-foreground">
                    <div className="flex gap-4">
                        <Link
                            to="/privacy"
                            className="font-bold text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Privacy Policy
                        </Link>
                        <span className="text-muted-foreground">|</span>
                        <Link
                            to="/terms"
                            className="font-bold text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Terms and Conditions
                        </Link>
                    </div>
                    <div className="font-medium text-muted-foreground">Perry Heavy Industries Ltd, trading as Ask Hazel.</div>
                    <div className="text-muted-foreground">Copyright © Perry Heavy Industries Ltd, {new Date().getFullYear()}. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };

