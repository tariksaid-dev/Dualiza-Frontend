import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const bodyVariants = cva("", {
  variants: {
    variant: {
      default: "flex",
      news: "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-1 max-h-full h-full space-x-4 p-6 pb-4",
      newsEdit: "grid grid-cols-[30%_70%] grid-rows-1 max-h-full h-full space-x-4 p-6 pb-4 row-[2/4]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function AdminPanelCardBody({ className, variant, children }) {
  return (
    <div className={cn(bodyVariants({ variant, className }))}>{children}</div>
  );
}

export default AdminPanelCardBody;
