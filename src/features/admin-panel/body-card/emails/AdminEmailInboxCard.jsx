import { Badge } from "@/components/ui/badge";

function AdminEmailInboxCard({ email, created_at, subject, content, tag }) {
  function dateFormatter(date) {
    return new Date(date).toISOString().split("T")[0];
  }

  function convertToTitleCase(str) {
    return str.charAt(0).toUpperCase().concat(str.substr(1));
  }

  return (
    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted">
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{email}</div>
          </div>
          <div className="ml-auto text-xs text-foreground">
            {dateFormatter(created_at)}
          </div>
        </div>
        <div className="text-xs font-medium">{subject}</div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        {content}
      </div>
      <div className="flex items-center gap-2">
        <Badge>{convertToTitleCase(tag)}</Badge>
      </div>
    </button>
  );
}

export default AdminEmailInboxCard;
