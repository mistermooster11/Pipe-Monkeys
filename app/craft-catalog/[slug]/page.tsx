import { notFound } from "next/navigation";
import { crafts } from "@/data/craft-catalog/crafts";
import { getServicePage, servicePages } from "@/data/craft-catalog/service-pages";
import ServicePageContent from "@/components/custom/craft-catalog/ServicePageContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return {
    title: `${page.title} – Pipe Monkeys`,
    description: page.overview[0],
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const related = page.relatedSlugs
    .map((s) => crafts.find((c) => c.slug === s))
    .filter(Boolean) as typeof crafts;

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <ServicePageContent page={page} related={related} />
    </main>
  );
}
