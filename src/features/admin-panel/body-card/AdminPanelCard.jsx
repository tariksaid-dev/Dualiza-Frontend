import { Card } from "@/components/ui/card";

function AdminPanelCard({ children }) {
  return (
    <Card className="w-[90vw] h-[90vh] max-h-[90vh] max-w-[90vw] row-[2/3] grid grid-rows-[15%_75%_10%] grid-cols-1">
      {children}
    </Card>
  );
}

export default AdminPanelCard;
