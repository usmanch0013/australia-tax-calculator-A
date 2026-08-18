import { SITE, TAX_BRACKETS, TAX_TIPS } from "@/lib/content";

export default function TaxGuide() {
  return (
    <section className="site-section site-section--alt">
      <div className="site-container">
        <h2 className="site-section__title">How Income Tax Works in Australia</h2>
        <p className="site-section__subtitle">
          Australia uses a progressive tax system — the more you earn, the higher
          the rate on income above each threshold. Below are the {SITE.year}{" "}
          tax brackets including Stage 3 cuts.
        </p>

        <div className="site-card site-card--flush">
          <div className="site-table-wrap">
            <table className="site-table">
              <thead>
                <tr>
                  <th>Income Range</th>
                  <th>Marginal Rate</th>
                  <th>Tax on Range</th>
                </tr>
              </thead>
              <tbody>
                {TAX_BRACKETS.map((row) => (
                  <tr key={row.range}>
                    <td>{row.range}</td>
                    <td>{row.rate}</td>
                    <td>{row.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="tips-grid">
          {TAX_TIPS.map((tip) => (
            <article key={tip.title} className="tip-card">
              <span className="tip-card__icon" aria-hidden="true">
                {tip.icon}
              </span>
              <h3 className="tip-card__title">{tip.title}</h3>
              <p className="tip-card__text">{tip.text}</p>
            </article>
          ))}
        </div>

        <div className="info-banners">
          <div className="info-banner">
            <strong>Medicare Levy</strong>
            <p>
              2% of taxable income. Funds public healthcare. Exempt if income
              is under ~$26,000.
            </p>
          </div>
          <div className="info-banner">
            <strong>Superannuation</strong>
            <p>
              Your employer pays 12% of your salary into super for {SITE.year}.
              Usually on top of your salary.
            </p>
          </div>
          <div className="info-banner">
            <strong>LITO Offset</strong>
            <p>
              Low Income Tax Offset of up to $700 for earners under $37,500.
              Reduces tax payable automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
