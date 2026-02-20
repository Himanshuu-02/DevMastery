import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Catalog from "@/components/catalog/Catalog";
import FAQSection from "@/components/sections/FAQSection";

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main>
        <Catalog />
      </main>
      <FAQSection/>
      <Footer />
    </>
  );
}