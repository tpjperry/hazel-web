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

export default function Privacy() {
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
                <h1>Privacy Policy — Ask Hazel</h1>
                <p className="effective-date">Effective Date: 12/09/2025</p>
                
                <p>Ask Hazel ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use our mobile application ("App"), available on the Apple App Store and Google Play Store.</p>

                <h2>1. Information We Collect</h2>
                <p>When you use Ask Hazel, we may collect:</p>
                <ul>
                    <li><strong>Account Information:</strong> Your name, email address and phone number provided at sign-up.</li>
                    <li><strong>Login Data:</strong> When you sign in using Apple or Google.</li>
                    <li><strong>Device & Usage Data:</strong> Device identifiers, app usage patterns and performance data.</li>
                </ul>

                <h2>2. How We Use Your Data</h2>
                <p>We use your data to:</p>
                <ul>
                    <li>Create and manage your account.</li>
                    <li>Provide app functionality and personalised experiences.</li>
                    <li>Analyse usage patterns to improve performance.</li>
                    <li>Maintain security and prevent misuse.</li>
                </ul>

                <h2>3. Sharing of Information</h2>
                <ul>
                    <li>We do not sell your personal data.</li>
                    <li>Non-personal data may be shared with third-party large language model (LLM) providers and analytics partners.</li>
                    <li>Payment information is processed securely by Apple and Google.</li>
                </ul>

                <h2>4. Data Retention</h2>
                <p>We keep your personal data until you delete your account. Once deleted, your data will be removed or anonymised within a reasonable timeframe.</p>

                <h2>5. Your Rights</h2>
                <p>Under applicable laws (e.g. UK GDPR, CCPA), you may have the right to:</p>
                <ul>
                    <li>Access, correct or delete your data.</li>
                    <li>Withdraw consent to data processing.</li>
                    <li>Request a copy of your data in a portable format.</li>
                </ul>
                <p>You can exercise these rights in the App's settings or by emailing us at <a href="mailto:team@askhazel.co.uk">team@askhazel.co.uk</a>.</p>

                <h2>6. Security</h2>
                <p>We use appropriate technical and organisational measures to safeguard your data. However, no system is completely secure.</p>

                <h2>7. Age Restrictions</h2>
                <p>Ask Hazel is not directed at children under the age of 13. If you are under 13, you must not use our services.</p>

                <h2>8. Governing Law</h2>
                <p>This Privacy Policy is governed by the laws of England and Wales.</p>

                <h2>9. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <p>📧 <a href="mailto:team@askhazel.co.uk">team@askhazel.co.uk</a></p>
            </div>
            <Footer />
        </div>
    );
}

