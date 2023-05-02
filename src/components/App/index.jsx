import { Header } from "@/components";
import { Main } from "@/components";

export function App() {
  return (
    <div className="grid place-content-center min-h-screen">
      <Header />
      <Main className="mt-[36px]" />
    </div>
  );
}
