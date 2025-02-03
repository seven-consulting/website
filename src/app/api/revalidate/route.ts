import { revalidatePath } from 'next/cache';

export async function GET() {
  revalidatePath('/', 'layout');

  return Response.json({
    now: Date.now(),
    message: 'Os dados foram invalidados com sucesso!',
  });
}
