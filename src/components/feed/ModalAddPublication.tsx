import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/services/api";
import { PlusCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner"; // Asegúrate de importar una librería de notificaciones

export function ModalAddPublication() {
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !file) {
      toast.error("All fields are required.");
      return;
    }

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    console.log(Array.from(formData.values()));

    try {
      const data = await api.post("/pets/upload", formData);
      console.log(data);
      if (data.status == 201) {
        toast.success(data.data.message)

        navigate("/my-pets");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Add new pet <PlusCircle />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Pet</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Luanfer"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="file" className="text-right">
              Image
            </Label>
            <Input
              id="file"
              name="file"
              type="file"
              accept="file/*"
              className="col-span-3"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
            />
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
