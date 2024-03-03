import { useNews } from "./useNews";
import { supabaseUrl } from "@/services/supabase";
import UniqueSideNews from "./UniqueSideNews";
import Spinner from "@/components/ui/Spinner";

const NewContent = ({ NewId }) => {
  const { isLoading, error, news } = useNews();

  if (isLoading) return <Spinner></Spinner>;

  const sortedNews = [...news].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  const sideNews = sortedNews.filter((item) => item.id !== NewId).slice(0, 3);

  const filteredNews = news.find((item) => item.id === 4); //NewId
  const { id, created_at, title, content, image } = filteredNews;

  const contenido = `En respuesta a la creciente preocupación por la sostenibilidad ambiental y el impacto del cambio climático, varios centros educativos han lanzado iniciativas para reducir su consumo eléctrico y fomentar prácticas más sostenibles en sus instalaciones.

  El Colegio Green Valley, ubicado en el corazón de la ciudad, ha sido pionero en esta iniciativa al implementar un plan integral para optimizar el uso de la energía eléctrica. Entre las medidas adoptadas se incluyen la instalación de paneles solares en los tejados de los edificios principales, la sustitución de equipos obsoletos por electrodomésticos y dispositivos más eficientes, y la introducción de campañas de concienciación para estudiantes y personal sobre el uso responsable de la energía.
  
  El director del colegio, el Sr. Martínez, destacó la importancia de estas acciones no solo en términos de reducción de costos a largo plazo, sino también en la enseñanza de valores de responsabilidad ambiental a las generaciones futuras. "Nuestro objetivo es no solo reducir nuestra huella de carbono, sino también educar a nuestros estudiantes sobre la importancia de cuidar el medio ambiente y adoptar hábitos sostenibles en sus vidas diarias", comentó el Sr. Martínez.
  
  Además del Colegio Green Valley, otras instituciones educativas en la región también están siguiendo su ejemplo. La Escuela Primaria Sunshine ha implementado un programa de apagado automático de luces y equipos electrónicos fuera del horario escolar, mientras que el Instituto High Peak ha introducido una política de reciclaje de papel y cartón en todas las aulas y oficinas administrativas.
  
  Estas iniciativas no solo están contribuyendo a la reducción del consumo eléctrico y la conservación de recursos naturales, sino que también están inspirando a otras comunidades educativas a seguir su ejemplo en la lucha contra el cambio climático y la promoción de un futuro más sostenible para todos.`;

  const contentParagraphs = contenido.split("\n").map((line, index) => (
    <p
      className="leading-7 text-xl font-semibold text-gray-700 dark:text-gray-300"
      key={index}
    >
      {line}
    </p>
  ));

  return (
    <div className="p-20 px-4 lg:px-24">
      <div className="grid gap-6 xl:grid-cols-[900px_1fr] xl:gap-8">
        <div className="grid gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
              {title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Creado el {created_at.split("T")[0]}
            </p>
          </div>
          <img
            alt="Image"
            className="aspect-video overflow-hidden rounded-lg object-cover"
            height={375}
            src={`${supabaseUrl}/storage/v1/object/public/news/${image}`}
            width={900}
          />
          {contentParagraphs}
        </div>

        <div className="lg:space-y-6 lg:my-28">
          {sideNews.map((item) => (
            <UniqueSideNews key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContent;
