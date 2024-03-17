import EditNewForm from "./EditNewForm";
import OriginalNewContainer from "./OriginalNewContainer";

function NewsEditMode({ originalValue }) {
  return (
    <>
      <OriginalNewContainer originalValue={originalValue} />
      <EditNewForm originalValue={originalValue} />
    </>
  );
}

export default NewsEditMode;
