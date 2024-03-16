import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function AdminHeaderTabsContainer({ onValueChange }) {
  const data = [
    { label: "Noticias", value: "news" },
    { label: "Usuarios", value: "users" },
    { label: "Emails", value: "emails" },
  ];

  return (
    <Tabs defaultValue="news" onValueChange={onValueChange}>
      <TabsList>
        {data.map((el) => (
          <TabsTrigger value={el.value} key={el.value}>
            {el.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default AdminHeaderTabsContainer;
