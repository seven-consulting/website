import { Loader2Icon } from 'lucide-react';

export default function LoadingPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center space-y-3 p-10">
      <Loader2Icon className="animate-spin h-20 w-20 stroke-gray-300/90" />

      <h1 className="text-2xl font-extrabold text-center tracking-tight text-gray-900 sm:text-3xl">
        Está quase lá 😉
      </h1>
    </main>
  );
}
