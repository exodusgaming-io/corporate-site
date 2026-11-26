import type { Page } from "../../types";

const logos = (n: number) => Array.from({ length: n }, () => "PSP LOGO");

const page: Page = {
  path: "/payment-solutions/",
  label: "Payment Solutions",
  seo: {
    title: "Payment Solutions",
    description: "Cards, crypto, bank transfer and local methods through one cashier. You choose the providers; we wire them in and leave the routing rules to you.",
  },
  hero: {
    kind: "page",
    title: "Payments configured before launch day.",
    titleWidth: 15,
    lead: "Cards, crypto, bank transfer and local methods through one cashier. You choose the providers; we wire them in and leave the routing rules in your hands.",
    actions: [{ label: "Book a demo", href: "#demo" }],
  },
  sections: [
    {
      type: "methodTabs",
      heading: { eyebrow: "Methods", index: "01", title: "How your players pay." },
      items: [
        {
          id: "cards",
          label: "Cards",
          icon: "card",
          text: "Visa and Mastercard through the acquirers you choose, with 3-D Secure, retries and saved cards handled in the cashier.",
          points: [
            "Several acquirers with routing rules",
            "Retry on a second acquirer when the first declines",
            "Saved cards and one-click deposits",
            "Chargeback data in the back office",
          ],
          gridLabel: "Acquirers (logos to supply)",
          tiles: logos(6),
          tileStyle: "logo",
        },
        {
          id: "crypto",
          label: "Crypto",
          icon: "coins",
          text: "On-chain deposits and withdrawals in the coins your players hold, credited once the confirmations you set are in.",
          points: [
            "Deposit address per player",
            "Confirmation thresholds per coin",
            "Automatic withdrawals under limits",
            "Address screening on every transaction",
          ],
          gridLabel: "Supported coins (list to confirm)",
          tiles: ["BTC", "ETH", "USDT", "USDC", "LTC", "TRX"],
          tileStyle: "ticker",
        },
        {
          id: "bank-transfer",
          label: "Bank transfer",
          icon: "bank",
          text: "Instant bank payments and classic transfers, matched to the player automatically so finance stops reconciling by hand.",
          points: [
            "Instant bank payments where available",
            "Reference matching to the player",
            "Payouts to verified accounts only",
            "Daily reconciliation report",
          ],
          gridLabel: "Bank payment providers (logos to supply)",
          tiles: logos(6),
          tileStyle: "logo",
        },
        {
          id: "other-apms",
          label: "Other APMs",
          icon: "wallet",
          text: "E-wallets, vouchers and local methods for the markets you run in. If a method matters to your players, ask. We add providers on request.",
          points: ["E-wallets and vouchers", "Local methods by country", "Mobile payments", "New providers on request"],
          gridLabel: "APM providers (logos to supply)",
          tiles: logos(6),
          tileStyle: "logo",
        },
      ],
    },
    {
      type: "flow",
      heading: {
        eyebrow: "The cashier",
        index: "02",
        title: "A declined deposit gets a second chance.",
        aside: "Routing rules you set decide which provider handles each payment. If the first says no, the next one gets asked.",
      },
      steps: [
        { title: "Player deposits", text: "Amount, method, currency", style: "dashed" },
        { title: "Cashier", text: "Limits and checks by segment", style: "surface" },
        { title: "Routing rules", text: "By country, method, amount, success rate", style: "gradient" },
        {
          pair: [
            { title: "Provider A", text: "Primary" },
            { title: "Provider B", text: "On decline" },
          ],
        },
        { title: "Wallet credited", text: "Player is back in the game", style: "light" },
      ],
    },
    {
      type: "cards",
      card: "icon",
      pt: "none",
      pb: "lg",
      items: [
        { icon: "settings", title: "Limits by segment", text: "Deposit and withdrawal limits for new players, VIPs and everyone in between." },
        { icon: "clock", title: "Withdrawal approvals", text: "Automatic under limits you set. Reviewed by a person above them." },
        { icon: "calculator", title: "Reconciliation", text: "Provider reports matched to the wallet, so finance stops doing it by hand." },
        { icon: "globe", title: "Currency display", text: "Players see amounts in the currency they think in." },
        { icon: "chart", title: "Success rates", text: "Approval rates per provider and method, so routing decisions use real numbers." },
        {
          icon: "tools",
          title: "Providers on request",
          text: "An operator asked for a local method on a Tuesday. It was live the following week.",
        },
      ],
    },
    {
      type: "crossLinks",
      items: [
        { kicker: "Running crypto-first?", page: "/solutions/crypto-casino/" },
        { kicker: "No merchant accounts yet?", page: "/solutions/licensing-and-banking/" },
      ],
    },
  ],
};

export default page;
