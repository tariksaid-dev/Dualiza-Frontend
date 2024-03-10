import Contacto from "./Contacto";
import Footer from "./Footer";

function FooterSection() {
  return (
    <section className="flex flex-col items-center justify-between space-y-4 h-screen relative pt-24">
      <Contacto />
      <Footer />
    </section>
  );
}

export default FooterSection;
