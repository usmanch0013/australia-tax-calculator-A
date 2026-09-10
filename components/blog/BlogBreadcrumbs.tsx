import Link from "next/link";

export interface BlogBreadcrumbItem {
  href?: string;
  label: string;
}

export default function BlogBreadcrumbs({ items }: { items: BlogBreadcrumbItem[] }) {
  return (
    <nav className="legal-breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="breadcrumb-item">
            {index > 0 && <span className="breadcrumb-sep" aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
