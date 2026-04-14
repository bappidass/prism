import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, MessageSquare, Users, Video, Globe } from "lucide-react";
import useDashboardStore from "../stores/useDashboardStore";

const DashboardPage = () => {
  const { counts, fetchCounts, loading } = useDashboardStore();

  useEffect(() => {
    fetchCounts();
  }, []);

  const stats = [
    { title: "News Articles", icon: Newspaper, value: counts.news },
    { title: "Inquiries", icon: MessageSquare, value: counts.inquiries },
    {
      title: "Team Members",
      icon: Users,
      value: counts.directors + counts.advisors,
    },
    { title: "Partnerships", icon: Video, value: counts.partnerships },
    { title: "clients", icon: Users, value: counts.clients },
    {  title: "Inquiries", icon: MessageSquare, value: counts.inquiries },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {stats.map((s) => (
          <Card key={s.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {s.title}
              </CardTitle>
              <s.icon className="h-4 w-4 text-primary" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? "..." : s.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;