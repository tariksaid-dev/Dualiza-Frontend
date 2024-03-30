import AlertTriggerButton from "@/components/ui/AlertTriggerButton";
import { useNavigate } from "react-router-dom";

function AdminPanelCardEditCreateFooter({ onModalConfirmation, mode }) {
  const navigate = useNavigate();
  const action = mode === "create" ? "Crear" : "Editar";

  return (
    <div className="flex ml-auto pr-6 items-center space-x-6">
      <AlertTriggerButton
        variant="outline"
        size="lg"
        onClick={() => navigate("/admin?page=news")}
        buttonText="Volver"
        alertDialogTitle="¿Seguro que deseas volver al menú principal?"
        alertDialogDescription="Los cambios que hayas realizado se perderán si continúas y regresas al menú principal de noticias."
      />
      <AlertTriggerButton
        variant="default"
        size="lg"
        onClick={() => {
          onModalConfirmation();
          navigate("/admin?page=news");
        }}
        buttonText={`${action} noticia`}
        alertDialogTitle="¿Seguro que deseas guardar los cambios?"
        alertDialogDescription="Esta acción no se puede deshacer. El cambio será permanente y el contenido cambiado o eliminado no se podrá recuperar."
      />
    </div>
  );
}

export default AdminPanelCardEditCreateFooter;
