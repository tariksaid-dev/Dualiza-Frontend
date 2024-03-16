import React, { useState } from "react";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminAddUserModalButton } from "./AdminAddUserModalButton";
import Spinner from "@/components/ui/Spinner";
import { useDeleteUser } from "./useDeleteUser";
import { useGetAllUsers } from "./useGetAllUsers";
import { useUpdateUserRol } from "./useUpdateUserRol";
import { Avatar } from "@/components/ui/avatar";

import { ArrowLeft, ArrowRight } from "lucide-react";
import AdminPanelCardHeader from "./AdminPanelCardHeader";

export function AdminUsers() {
  const { users: userData, isLoading } = useGetAllUsers();
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const [open, setOpen] = useState(false);

  const findUserIdByEmail = (email) => {
    const filtered = userData.filter((user) => user.email === email);
    return filtered[0].id;
  };

  const findUserRolByEmail = (email) => {
    const filtered = userData.filter((user) => user.email === email);
    return filtered[0].user_metadata.role;
  };

  const columns = [
    {
      accessorKey: "email",
      // Aqui en header es donde cambia el nombre de la columna
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="">{row.getValue("email")}</div>,
    },
    {
      accessorKey: "role",
      header: () => <div className="text-right">Rol</div>,
      cell: ({ row }) => (
        <div className="text-right font-medium">
          {findUserRolByEmail(row.getValue("email")) ?? "Sin rol"}
        </div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const email = row.getValue("email");
        const id = findUserIdByEmail(email);

        const { deleteUser } = useDeleteUser();
        const { updateUser } = useUpdateUserRol();

        let rol = findUserRolByEmail(email);

        const onSave = () => {
          const userRole = findUserRolByEmail(email);
          updateUser({ id, userRole });
          try {
            setTimeout(() => {
              setOpen(false);
            }, 1000);
          } catch (error) {
            console.log(error);
          }
          console.log("Rol actualizado");
        };

        const onDelete = () => {
          deleteUser({ id });
          console.log("Usuario eliminado");
        };

        return (
          <Dialog open={open} onOpenChange={setOpen}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DialogTrigger asChild>
                  <DropdownMenuItem>Editar Usuario</DropdownMenuItem>
                </DialogTrigger>
                <DropdownMenuItem onClick={onDelete}>
                  Eliminar Usuario
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Editar Usuario</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4 ">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="rol" className="text-right">
                    Rol
                  </Label>
                  <Select onValueChange={(e) => (rol = e)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={findUserRolByEmail(email)} />
                    </SelectTrigger>
                    <SelectContent defaultValue={rol}>
                      <SelectGroup>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="poster">Poster</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" onClick={() => onSave()}>
                  Guardar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );
      },
    },
  ];

  const table = useReactTable({
    data: userData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return !isLoading ? (
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
            <Button variant="outlinePrimary" size="buttonSpace">
              <ArrowRight size={42} />
            </Button>
          </div>
        }
        title={"Usuarios"}
        description={"Añade y elimina usuarios, y cambia sus roles desde aquí"}
      />

      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex flex-col w-3/4 space-y-4">
          <Input
            placeholder="Buscar por email..."
            value={table.getColumn("email")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />

          <Table className="rounded-md border-border border">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {userData?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No hay usuarios.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="self-end">
            <AdminAddUserModalButton />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Spinner />
  );
}
