import { useSearchParams } from "react-router-dom";

import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import AdminInboxTabsContainer from "./AdminInboxTabsContainer";
import AdminEmailInboxCard from "./AdminEmailInboxCard";

import {
  Inbox,
  Mail,
  ArrowLeft,
  ArrowRight,
  MailWarning,
  Mails,
  Archive,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function AdminEmails() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("inbox", e);
    setSearchParams(searchParams);
  }

  const data = [
    {
      id: 1,
      message:
        "Hi, let's have a meeting tomorrow to discuss the project. I've beenr reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the projects  success. Please come prepared with any questions or insights you may have. Looking forward to to our meeting! Best regards, William",
      email: "william@smith.com",
      date: "5 month ago",
      title: "Meeting Tomorrow",
    },
    {
      id: 2,
      message:
        "Hi, let's have a meeting tomorrow to discuss the project. I've beenr reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the projects  success. Please come prepared with any questions or insights you may have. Looking forward to to our meeting! Best regards, William",
      email: "william@smith.com",
      date: "5 month ago",
      title: "Meeting Tomorrow",
    },
    {
      id: 3,
      message:
        "Hi, let's have a meeting tomorrow to discuss the project. I've beenr reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the projects  success. Please come prepared with any questions or insights you may have. Looking forward to to our meeting! Best regards, William",
      email: "william@smith.com",
      date: "5 month ago",
      title: "Meeting Tomorrow",
    },
    {
      id: 4,
      message:
        "Hi, let's have a meeting tomorrow to discuss the project. I've beenr reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the projects  success. Please come prepared with any questions or insights you may have. Looking forward to to our meeting! Best regards, William",
      email: "william@smith.com",
      date: "5 month ago",
      title: "Meeting Tomorrow",
    },
    {
      id: 5,
      message:
        "Hi, let's have a meeting tomorrow to discuss the project. I've beenr reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the projects  success. Please come prepared with any questions or insights you may have. Looking forward to to our meeting! Best regards, William",
      email: "william@smith.com",
      date: "5 month ago",
      title: "Meeting Tomorrow",
    },
    {
      id: 6,
      message:
        "Hi, let's have a meeting tomorrow to discuss the project. I've beenr reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the projects  success. Please come prepared with any questions or insights you may have. Looking forward to to our meeting! Best regards, William",
      email: "william@smith.com",
      date: "5 month ago",
      title: "Meeting Tomorrow",
    },
  ];

  return (
    <>
      <div className="flex border-b-border border-b-[1px]">
        <div className="flex-1 flex justify-center items-center">
          <Avatar className="justify-center items-center">
            <ArrowLeft size={"42px"} />
          </Avatar>
        </div>
        <div className="flex-[2] flex flex-col space-y-2 items-center justify-center">
          <div className="flex items-end justify-center space-x-8">
            <h1 className="text-5xl font-bold gradient-text">Mensajes</h1>
            <Mail size={"36px"} />
          </div>
          <p className="text-muted-foreground text-2xl">
            Lee las distintas sugerencias y opiniones de los visitantes
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Avatar className="justify-center items-center">
            <ArrowRight size={"42px"} />
          </Avatar>
        </div>
      </div>

      <ResizablePanelGroup direction="horizontal" className="row-span-2">
        <ResizablePanel>
          <header className="h-[8%] flex justify-between items-center border-b">
            <span className="px-4 font-bold text-xl inline-flex items-center">
              Inbox
              <Inbox className="ml-3" />
            </span>
            <AdminInboxTabsContainer onValueChange={(e) => handleChange(e)} />
          </header>
          <div className="flex flex-col mt-4 px-6 space-y-4 h-full">
            <Input placeholder="Buscar..." autoComplete="off" />

            <div className="flex flex-1 h-full">
              <ScrollArea type="always">
                <div className="flex flex-col gap-2 pr-4 pt-0">
                  {data.map((message) => (
                    <AdminEmailInboxCard {...message} key={message.id} />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <header className="h-[8%] flex justify-between items-center border-b">
            <div className="flex items-center mx-2 h-full space-x-3">
              <Button variant="outline" size="icon">
                <Mails />
              </Button>
              <Button variant="outline" size="icon">
                <MailWarning />
              </Button>
              <Button variant="outline" size="icon">
                <Archive />
              </Button>
              <Button variant="outline" size="icon">
                <Trash2 />
              </Button>
              <Separator orientation="vertical" className="h-3/5 ml-6" />
            </div>
          </header>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default AdminEmails;
