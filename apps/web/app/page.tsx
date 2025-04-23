import { Button } from "@repo/ui/components/base/button";
import { cn } from "@repo/ui/helpers/cn";

export default function Page() {
  return (
    <main className="flex-1">
      <section className="bg-muted grid min-h-dvh place-items-center">
        <div className="flex min-w-xl flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">Turborepo Starter Kit</h1>
          <Button type="button" className={cn("rounded-sm")}>
            Get Started
          </Button>
        </div>
      </section>
    </main>
  );
}
