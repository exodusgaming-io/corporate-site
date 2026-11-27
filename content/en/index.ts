import type { Locale } from "../types";
import dictionary from "./dictionary";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import products from "./pages/products";
import solutions from "./pages/solutions";
import integrations from "./pages/integrations";
import paymentSolutions from "./pages/payment-solutions";
import gameProviders from "./pages/game-providers";
import sportsbook from "./pages/sportsbook";
import privacyPolicy from "./pages/privacy-policy";
import cookiePolicy from "./pages/cookie-policy";
import terms from "./pages/terms";
import productsAggregator from "./pages/products/aggregator";
import productsExodusAi from "./pages/products/exodus-ai";
import productsExodusEngine from "./pages/products/exodus-engine";
import productsJackpots from "./pages/products/jackpots";
import productsPlatform from "./pages/products/platform";
import solutionsCryptoCasino from "./pages/solutions/crypto-casino";
import solutionsGameAggregation from "./pages/solutions/game-aggregation";
import solutionsLicensingAndBanking from "./pages/solutions/licensing-and-banking";
import solutionsSweepstakes from "./pages/solutions/sweepstakes";
import solutionsTurnkeyCasino from "./pages/solutions/turnkey-casino";
import solutionsWhiteLabelPlus from "./pages/solutions/white-label-plus";
import solutionsWhiteLabel from "./pages/solutions/white-label";
import integrationsAffiliateSystems from "./pages/integrations/affiliate-systems";
import integrationsAnalyticsAndTracking from "./pages/integrations/analytics-and-tracking";
import integrationsCommunication from "./pages/integrations/communication";
import integrationsCrm from "./pages/integrations/crm";
import integrationsRiskAndFraud from "./pages/integrations/risk-and-fraud";

// English: the frame's words and every page. A new page is a file in pages/ plus a line here.
const en: Locale = {
  dictionary,
  pages: [
    home,
    about,
    contact,
    products,
    solutions,
    integrations,
    paymentSolutions,
    gameProviders,
    sportsbook,
    privacyPolicy,
    cookiePolicy,
    terms,
    productsAggregator,
    productsExodusAi,
    productsExodusEngine,
    productsJackpots,
    productsPlatform,
    solutionsCryptoCasino,
    solutionsGameAggregation,
    solutionsLicensingAndBanking,
    solutionsSweepstakes,
    solutionsTurnkeyCasino,
    solutionsWhiteLabelPlus,
    solutionsWhiteLabel,
    integrationsAffiliateSystems,
    integrationsAnalyticsAndTracking,
    integrationsCommunication,
    integrationsCrm,
    integrationsRiskAndFraud,
  ],
};

export default en;
