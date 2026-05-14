import ServicesGrid from "@/components/custom/craft-catalog/ServicesGrid";

export const metadata = {
  title: "Our Services – Pipe Monkeys",
  description:
    "Drain cleaning, hydro jetting, camera inspection, and more — Pipe Monkeys serves Brooklyn, Queens, and Nassau County.",
};

export default function CraftCatalogPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <ServicesGrid />
    </main>
  );
}
