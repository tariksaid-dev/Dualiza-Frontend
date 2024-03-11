import { Card } from "@/components/ui/card";

function AdminPanelCard({ children }) {
  return (
    <Card className="w-[90%] h-[90%] max-h-full m-auto bg-background">{children}</Card>
  );
}

export default AdminPanelCard;

