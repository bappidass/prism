import { useEffect, useState } from "react";
import useNewsStore, { NewsInput } from "@/stores/useNewsStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Plus, Trash2, Edit } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const emptyForm: NewsInput = { img: "", date: "", title: "", author: "", published: "", body: [], gallery: [] };

const NewsPage = () => {
  const { news, loading, fetchNews, createNews, deleteNews, updateNews } = useNewsStore();
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<NewsInput>(emptyForm);
  const [bodyHtml, setBodyHtml] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => { fetchNews(); }, [fetchNews]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { ...form, body: [bodyHtml] };
    if (editId) { await updateNews(editId, data); } else { await createNews(data); }
    setForm(emptyForm); setBodyHtml(""); setEditId(null); setOpen(false);
  };

  const handleEdit = (article: any) => {
    setEditId(article.id);
    setForm({ img: article.img, date: article.date, title: article.title, author: article.author, published: article.published, body: article.body, gallery: article.gallery });
    setBodyHtml(article.body?.[0] || "");
    setOpen(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">News Management</h1>
        <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) { setEditId(null); setForm(emptyForm); setBodyHtml(""); } }}>
          <DialogTrigger asChild><Button><Plus className="mr-2 h-4 w-4" />Add News</Button></DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader><DialogTitle>{editId ? "Edit" : "Add"} News Article</DialogTitle></DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              <Input placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} required />
              <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
              <Input placeholder="Published (e.g. Published)" value={form.published} onChange={(e) => setForm({ ...form, published: e.target.value })} />
              <ImageUpload value={form.img} onChange={(url) => setForm({ ...form, img: url })} folder="news" />
              <div>
                <label className="text-sm font-medium mb-1 block">Gallery Images</label>
                <div className="flex flex-wrap gap-2">
                  {form.gallery.map((img, idx) => (
                    <div key={idx} className="relative">
                      <img src={img} alt={`Gallery ${idx + 1}`} className="w-16 h-16 object-cover rounded" />
                      <Button type="button" size="icon" variant="ghost" className="absolute top-0 right-0"
                        onClick={() => setForm({ ...form, gallery: form.gallery.filter((_, i) => i !== idx) })}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                  <ImageUpload value="" onChange={(url) => setForm({ ...form, gallery: [...form.gallery, url] })} folder="news/gallery" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Body</label>
                <ReactQuill theme="snow" value={bodyHtml} onChange={setBodyHtml} />
              </div>
              <Button type="submit" disabled={loading} className="w-full">{editId ? "Update" : "Create"}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {news.map((n) => (
                <TableRow key={n.id}>
                  <TableCell>{n.img && <img src={n.img} className="w-12 h-12 rounded object-cover" />}</TableCell>
                  <TableCell className="font-medium">{n.title}</TableCell>
                  <TableCell>{n.author}</TableCell>
                  <TableCell>{n.date}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(n)}><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => setDeleteId(n.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </TableCell>
                </TableRow>
              ))}
              {news.length === 0 && (
                <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No news articles yet</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteId} onOpenChange={(v) => { if (!v) setDeleteId(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Article?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={async () => { if (deleteId) { await deleteNews(deleteId); setDeleteId(null); } }}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default NewsPage;