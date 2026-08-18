/**
 * AdSense display slot placeholder.
 * After AdSense approval, set NEXT_PUBLIC_ADSENSE_CLIENT in .env.local
 * and replace the placeholder with your ad unit slot ID.
 */
interface AdSlotProps {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal";
  className?: string;
}

export default function AdSlot({
  slot = "0000000000",
  format = "auto",
  className = "",
}: AdSlotProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  if (!clientId) {
    return null;
  }

  return (
    <div className={`ad-slot ad-slot--${format} ${className}`.trim()}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
