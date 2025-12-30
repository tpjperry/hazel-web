import { Hero7 } from '@/components/ui/modern-hero';

const demoData = {
    heading: 'Build Smarter Shopping Lists with AskHazel',
    description:
        'Ask Hazel builds you smarter shopping lists at your favourite supermarkets, using AI to match your budget, diet and preference to better alternatives',
    appStoreLinks: {
        googlePlay: 'https://play.google.com/store/apps/details?id=com.shopoptimiser&pcampaignid=web_share',
        appStore: 'https://apps.apple.com/us/app/ask-hazel/id6751278432',
    },
};

function Hero7Demo() {
    return <Hero7 {...demoData} />;
}

export { Hero7Demo };

