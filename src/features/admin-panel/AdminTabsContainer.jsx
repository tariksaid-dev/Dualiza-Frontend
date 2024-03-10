import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function AdminTabsContainer({ onValueChange }) {
  const data = [
    { label: "Noticias", value: "news" },
    { label: "Usuarios", value: "users" },
    { label: "Emails", value: "emails" },
  ];

  return (
    <Tabs defaultValue="news" onValueChange={onValueChange}>
      <TabsList className={`grid w-full grid-cols-3`}>
        {data.map((el) => (
          <TabsTrigger value={el.value} key={el.value}>
            {el.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default AdminTabsContainer;
