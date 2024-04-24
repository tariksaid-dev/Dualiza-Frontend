import { useState } from "react";
import { useSearchParams } from "react-router-dom";

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
  MailWarning,
  Mails,
  Archive,
  Trash2,
  CornerDownRight,
  CornerDownLeft,
  Mailbox,
} from "lucide-react";

import EllipsisVertical from "@/components/icons/EllipsisVertical";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AdminPanelCardHeader from "../AdminPanelCardHeader";
import { useEmails } from "../../useEmails";
import Spinner from "@/components/ui/Spinner";
import AdminEmailReader from "./AdminEmailReader";

function AdminEmails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { emails, isLoading } = useEmails();
  const [ selectedEmail, setSelectedEmail ] = useState({});

  function handleChange(e) {
    searchParams.set("inbox", e);
    setSearchParams(searchParams);
  }

  function filterEmails(emails) {
    if (!searchParams.get("inbox") || searchParams.get("inbox") === "all") return emails;
    return emails.filter((email) => email.state === searchParams.get("inbox"));
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <AdminPanelCardHeader
        leftComponent={
          <div className="flex-1 flex justify-center items-center">
            <Mail size={42} />
          </div>
        }
        rightComponent={
          <div className="flex-1 flex justify-center items-center">
            <Mailbox size={42} />
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
                  {filterEmails(emails).map((email) => (
                    <AdminEmailInboxCard {...email} key={email.id} setSelectedEmail={setSelectedEmail}/>
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

          <AdminEmailReader {...selectedEmail} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default AdminEmails;
