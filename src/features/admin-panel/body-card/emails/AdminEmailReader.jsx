import { Separator } from "@radix-ui/react-dropdown-menu";

function AdminEmailReader({ email, created_at, name, content, tag, state }) {
  function getInitials(str) {
    if (!str) return;
    return str
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  }

  function dateFormatter(date) {
    if (!date) return;
    return new Date(date).toISOString().split("T")[0];
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-start p-4">
        <div className="flex gap-4 text-sm items-center">
          <span className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-2xl">
              {getInitials(name)}
            </span>
          </span>
          <div className="grid space-y-1">
            <div className="font-semibold text-xl text-primary">{name}</div>
            <div className="line-clamp-1 text-lg">Meeting Tomorrow</div>
            <div className="line-clamp-1">
              Email: <span className="font-medium">{email || "Sin email"}</span>
            </div>
          </div>
        </div>
        <div className="ml-auto text-muted-foreground">
          {dateFormatter(created_at)}
        </div>
      </div>
      <Separator />
      <div className="flex-1 whitespace-pre-wrap p-4 text-xl">{content}</div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full mt-auto"
      ></div>
    </div>
  );
}

export default AdminEmailReader;
