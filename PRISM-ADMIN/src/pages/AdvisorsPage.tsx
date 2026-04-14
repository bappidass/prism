import { useEffect, useState } from "react";
import useTeamStore, { PersonInput } from "@/stores/useTeamStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Plus, Trash2 } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";

const emptyPerson: PersonInput = { name: "", img: "", linkedin: "" };

const AdvisorsPage = () => {
  const { advisors, fetchTeam, addAdvisor, deleteAdvisor, loading } = useTeamStore();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<PersonInput>(emptyPerson);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => { fetchTeam(); }, [fetchTeam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addAdvisor(form);
    setForm(emptyPerson);
    setOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Advisors</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button><Plus className="mr-2 h-4 w-4" />Add Advisor</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Add Advisor</DialogTitle></DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <Input placeholder="LinkedIn URL" value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} />
              <ImageUpload value={form.img} onChange={(url) => setForm({ ...form, img: url })} folder="advisors" />
              <Button type="submit" disabled={loading} className="w-full">Add</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Photo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>LinkedIn</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {advisors.map((a) => (
                <TableRow key={a.id}>
                  <TableCell>{a.img && <img src={a.img} className="w-10 h-10 rounded-full object-cover" />}</TableCell>
                  <TableCell className="font-medium">{a.name}</TableCell>
                  <TableCell>{a.linkedin && <a href={a.linkedin} target="_blank" className="text-primary underline">Profile</a>}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => setDeleteId(a.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </TableCell>
                </TableRow>
              ))}
              {advisors.length === 0 && <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No advisors</TableCell></TableRow>}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteId} onOpenChange={(v) => { if (!v) setDeleteId(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Advisor?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={async () => { if (deleteId) { await deleteAdvisor(deleteId); setDeleteId(null); } }}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdvisorsPage;