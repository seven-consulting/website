import { Loader2Icon } from 'lucide-react';

export default function LoadingPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center space-y-3">
      <Loader2Icon className="animate-spin h-20 w-20 stroke-gray-300/90" />

      <h1 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
        Aguarde alguns instantes...
      </h1>

      <p className="mt-6 text-lg text-center leading-8 text-gray-600">Está quase lá 😉</p>
    </main>
  );
}
