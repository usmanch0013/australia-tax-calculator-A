import { SITE } from "@/lib/content";

interface HeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function Hero({
  title = "How much will you actually take home?",
  subtitle = `Calculate your exact net pay after income tax, Medicare levy, HECS/HELP debt and superannuation — updated for ${SITE.year}.`,
  badge = `🇦🇺 Australian take-home pay calculator ${SITE.year}`,
}: HeroProps) {
  return (
    <section className="site-hero">
      <div className="site-container">
        <span className="site-hero__badge">{badge}</span>
        <h1 className="site-hero__title">{title}</h1>
        <p className="site-hero__subtitle">{subtitle}</p>
      </div>
    </section>
  );
}
