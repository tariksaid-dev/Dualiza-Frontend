function AdminEmailInboxCard({ email, date, title, message }) {
  return (
    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted">
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{email}</div>
          </div>
          <div className="ml-auto text-xs text-foreground">{date}</div>
        </div>
        <div className="text-xs font-medium">{title}</div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        {message}
      </div>
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
          meeting
        </div>
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
          work
        </div>
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
          important
        </div>
      </div>
    </button>
  );
}

export default AdminEmailInboxCard;
