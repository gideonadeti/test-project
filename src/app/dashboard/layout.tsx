import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default function DashboardLayout() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-row h-screen">
        <Sidebar />
      </div>
    </main>
  );
}
