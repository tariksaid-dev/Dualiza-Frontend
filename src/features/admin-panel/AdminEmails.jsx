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
  CornerDownRight,
  CornerDownLeft,
} from "lucide-react";

import EllipsisVertical from "@/components/icons/EllipsisVertical";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AdminPanelCardHeader from "./AdminPanelCardHeader";

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
      <AdminPanelCardHeader
        leftComponent={
          <div className="flex-1 flex justify-center items-center">
            <Button variant="outlinePrimary" size="buttonSpace">
              <ArrowLeft size={42} />
            </Button>
          </div>
        }
        rightComponent={
          <div className="flex-1 flex justify-center items-center">
            <Mail size={42} />
          </div>
        }
        title={"Mensajes"}
        description={
          "Lee las distintas sugerencias y opiniones de los visitantes"
        }
      />

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
            <div className="flex items-center mx-2 mr-4 h-full space-x-2">
              <Button variant="outline" size="icon">
                <CornerDownLeft />
              </Button>
              <Button variant="outline" size="icon">
                <CornerDownRight />
              </Button>
              <Separator orientation="vertical" className="h-3/5 mx-6" />
              <Button variant="outline" size="icon">
                <EllipsisVertical strokeWidth="2px" />
              </Button>
            </div>
          </header>

          <div className="flex flex-1 flex-col">
            <div className="flex items-start p-4">
              <div className="flex gap-4 text-sm items-center">
                <span className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-2xl">
                    WS
                  </span>
                </span>
                <div className="grid space-y-1">
                  <div className="font-semibold text-xl text-primary">
                    William Smith
                  </div>
                  <div className="line-clamp-1 text-lg">Meeting Tomorrow</div>
                  <div className="line-clamp-1">
                    Email:{" "}
                    <span className="font-medium">
                      williamsmith@example.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="ml-auto text-muted-foreground">
                Oct 22, 2023, 9:00:00 AM
              </div>
            </div>
            <Separator />
            <div className="flex-1 whitespace-pre-wrap p-4 text-xl">
              Hi, lets have a meeting tomorrow to discuss the project. Ive been
              reviewing the project details and have some ideas Id like to
              share. Its crucial that we align on our next steps to ensure the
              projects success. Please come prepared with any questions or
              insights you may have. Looking forward to our meeting! Best
              regards, William
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full mt-auto"
            ></div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default AdminEmails;
