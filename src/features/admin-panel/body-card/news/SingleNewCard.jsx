import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";

function SingleNewCard({ image, title, content }) {
  return (
    <Card className="flex-1 flex flex-col h-3/4 pr-2">
      <ScrollArea type="always" className="mt-6">
        <CardHeader className="pt-0 pb-4 space-y-3">
          <AspectRatio ratio={16 / 9}>
            <img src={image} alt={title} className="object-cover h-[200px]" />
          </AspectRatio>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardDescription className="px-5">{content}</CardDescription>
      </ScrollArea>
    </Card>
  );
}

export default SingleNewCard;
