import { Footer } from '@/components/blocks/footer';
import {
    Apple,
    Banana,
    Carrot,
    Cherry,
    Grape,
    Coffee,
    Wheat,
    Fish,
    Milk,
    Cookie,
} from 'lucide-react';
import './legal.css';

export default function Terms() {
    const foodIcons = [
        { Icon: Apple, position: { top: '10%', left: '5%' }, size: 24 },
        { Icon: Banana, position: { top: '15%', right: '8%' }, size: 28 },
        { Icon: Carrot, position: { top: '25%', left: '12%' }, size: 26 },
        { Icon: Cherry, position: { top: '30%', right: '15%' }, size: 22 },
        { Icon: Grape, position: { top: '40%', left: '3%' }, size: 24 },
        { Icon: Coffee, position: { top: '50%', right: '5%' }, size: 30 },
        { Icon: Wheat, position: { top: '60%', left: '10%' }, size: 28 },
        { Icon: Fish, position: { top: '70%', right: '12%' }, size: 26 },
        { Icon: Milk, position: { top: '20%', left: '20%' }, size: 24 },
        { Icon: Cookie, position: { top: '45%', right: '20%' }, size: 28 },
        { Icon: Banana, position: { top: '65%', left: '18%' }, size: 26 },
        { Icon: Cherry, position: { top: '35%', right: '25%' }, size: 24 },
        { Icon: Apple, position: { top: '55%', left: '25%' }, size: 22 },
        { Icon: Grape, position: { top: '75%', right: '18%' }, size: 26 },
        { Icon: Carrot, position: { top: '80%', left: '8%' }, size: 24 },
    ];

    return (
        <div className="legal-page relative overflow-hidden">
            {/* Background food icons */}
            <div className="absolute inset-0 pointer-events-none">
                {foodIcons.map((item, index) => {
                    const Icon = item.Icon;
                    return (
                        <Icon
                            key={index}
                            className="text-gray-500 opacity-20"
                            size={item.size}
                            style={{
                                position: 'absolute',
                                ...item.position,
                            }}
                        />
                    );
                })}
            </div>
            <div className="legal-content relative">
                <h1>Terms & Conditions — Ask Hazel</h1>
                <p className="effective-date">Effective Date: 12/09/2025</p>
                
                <p>These Terms & Conditions ("Terms") govern your use of the Ask Hazel mobile application ("App"). By creating an account or subscribing, you agree to these Terms.</p>

                <h2>1. Account Registration</h2>
                <ul>
                    <li>You must provide accurate information (name, email address, phone number).</li>
                    <li>You may sign in with Apple or Google.</li>
                    <li>You are responsible for keeping your login credentials secure.</li>
                </ul>

                <h2>2. Subscriptions & Payments</h2>
                <ul>
                    <li>Subscriptions are billed through Apple or Google.</li>
                    <li>Subscriptions automatically renew unless cancelled at least 24 hours before renewal.</li>
                    <li>Refunds are handled in line with Apple App Store and Google Play Store policies.</li>
                </ul>

                <h2>3. User Responsibilities</h2>
                <p>You agree not to:</p>
                <ul>
                    <li>Use the App for unlawful, abusive or fraudulent purposes.</li>
                    <li>Interfere with or disrupt the App's functionality.</li>
                    <li>Infringe the rights of others, including intellectual property rights.</li>
                </ul>

                <h2>4. Intellectual Property</h2>
                <ul>
                    <li>All content, features and intellectual property of Ask Hazel remain our exclusive property.</li>
                    <li>You retain ownership of any content you input but grant us a licence to use it to provide our services.</li>
                </ul>

                <h2>5. Termination</h2>
                <p>We may suspend or terminate accounts at our discretion if you:</p>
                <ul>
                    <li>Breach these Terms.</li>
                    <li>Misuse the App.</li>
                    <li>Violate applicable laws.</li>
                </ul>
                <p>You may close your account at any time via Settings.</p>

                <h2>6. Disclaimers & Limitation of Liability</h2>
                <ul>
                    <li>The App is provided "as is" without any warranties.</li>
                    <li>To the fullest extent permitted by law, Ask Hazel will not be liable for indirect, incidental or consequential losses.</li>
                    <li>Our liability will never exceed the total amount paid by you in the 12 months before the claim.</li>
                </ul>

                <h2>7. Governing Law & Disputes</h2>
                <ul>
                    <li>These Terms are governed by the laws of England and Wales.</li>
                    <li>Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.</li>
                </ul>

                <h2>8. Changes to Terms</h2>
                <p>We may amend these Terms from time to time. Continued use of the App will constitute acceptance of the updated Terms.</p>

                <h2>9. Contact</h2>
                <p>For any questions, please email us at:</p>
                <p>📧 <a href="mailto:team@askhazel.co.uk">team@askhazel.co.uk</a></p>
            </div>
            <Footer />
        </div>
    );
}

