import AdminPanelCardBody from "../AdminPanelCardBody";
import NewsEditMode from "./NewsEditMode";

function AdminNewsEdit({ displayedNews, searchParams }) {
  return (
    <AdminPanelCardBody variant="newsEdit">
      <NewsEditMode
        originalValue={displayedNews?.find(
          (el) => el.id === +searchParams.get("edit")
        )}
      />
    </AdminPanelCardBody>
  );
}

export default AdminNewsEdit;
