import Contacto from "./Contacto";
import Footer from "./Footer";

function FooterSection() {
  return (
    <section className="flex flex-col items-center justify-center space-y-16 h-[100vh] relative">
      <Contacto />
      <Footer />
    </section>
  );
}

export default FooterSection;
