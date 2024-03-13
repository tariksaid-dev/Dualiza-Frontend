import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function AdminInboxTabsContainer({ onValueChange }) {
  const data = [
    { label: "Todos", value: "all" },
    { label: "No leídos", value: "unread" },
    { label: "Leídos", value: "read" },
    { label: "Papelera", value: "bin" },
  ];

  return (
    <Tabs defaultValue="all" onValueChange={onValueChange}>
      <TabsList className="mx-4">
        {data.map((el) => (
          <TabsTrigger value={el.value} key={el.value}>
            {el.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default AdminInboxTabsContainer;
