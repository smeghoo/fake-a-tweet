import TweetForm from "@/components/tweet/TweetForm";
import TweetPreview from "@/components/tweet/TweetPreview";
import AppProvider from "@/components/Providers";

import { cn } from "@/utils";

export default function Home() {
  return (
    <AppProvider>
      <main className="flex flex-col">
        <div
          className={cn(
            "flex flex-col items-center gap-4 py-4",
            "lg:flex-row lg:items-start lg:justify-around lg:px-4"
          )}
        >
          <TweetForm />
          <TweetPreview />
        </div>
      </main>
    </AppProvider>
  );
}
