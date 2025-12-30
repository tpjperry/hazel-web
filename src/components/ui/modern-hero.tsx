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

interface Hero7Props {
    heading?: string;
    description?: string;
    appStoreLinks?: {
        googlePlay?: string;
        appStore?: string;
    };
}

const Hero7 = ({
    // heading = 'Build Smarter Shopping Lists with Hazel',
    description = 'Hazel builds you smarter shopping lists at your favourite supermarkets, using AI to match your budget, diet and preference to better alternatives',
    appStoreLinks = {},
}: Hero7Props) => {
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
        <section className="relative py-6 md:py-10 lg:py-24 overflow-hidden">
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
            <div className="container relative text-center">
                <div className="mx-auto flex max-w-screen-lg flex-col gap-4">
                    <div className="mx-auto mb-4">
                        <img
                            src="/assets/Hazel-logo.png"
                            alt="Hazel Logo"
                            className="mx-auto h-auto w-[82px] lg:w-[100px]"
                        />
                    </div>
                    <h1 className="mx-auto max-w-4xl text-center text-3xl font-extrabold lg:text-5xl xl:text-6xl">
                        <div>
                            Build{' '}
                            <span className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Smarter
                            </span>{' '}
                            Shopping Lists
                        </div>
                        <div>with Hazel</div>
                    </h1>
                    <p className="text-balance text-muted-foreground lg:text-lg">{description}</p>
                </div>
                <div className="mx-auto mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a
                        href={appStoreLinks.googlePlay || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-80"
                    >
                        <img
                            src="/assets/google-play-badge.png"
                            alt="Get it on Google Play"
                            className="h-14 w-40 object-contain"
                        />
                    </a>
                    <a
                        href={appStoreLinks.appStore || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-80"
                    >
                        <img
                            src="/assets/app-store-badge.png"
                            alt="Download on the App Store"
                            className="h-14 w-40 object-contain"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export { Hero7 };

