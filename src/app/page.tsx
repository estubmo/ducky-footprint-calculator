import { FootprintContainer } from "./components/footprint-container";
import { FootprintForm } from "./components/footprint-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-lg">
      <FootprintContainer />
    </main>
  );
}
