'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CheckIcon, Loader2Icon } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { FormSchema, formSchema } from './form-schema';
import { subscribeToNewsletter } from './subscribe-to-newsletter';

export function Newsletter() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isValidating, isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    try {
      const subscription = await subscribeToNewsletter(data);

      if (!subscription.success) throw new Error(subscription.errorMessage);

      toast.success('Você foi inscrito em nossa newsletter com sucesso!');
    } catch (err) {
      const error = err as any;

      if (error.message === 'value is not unique for the field "email"') {
        toast.warning('Este email já está inscrito em nossa newsletter!', {});
      } else {
        toast.error('Não foi possível se inscrever em nossa newsletter!', {
          description: 'Aguarde alguns instantes e tente novamente.',
        });
      }

      throw Error('Não foi possível se inscrever em nossa newsletter!');
    }
  };

  const isLoading = isValidating || isSubmitting;

  return (
    <section
      id="newsletter"
      className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Inscreva-se em nossa Newsletter
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              Receba notícias de última hora com notícias e novos produtos
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex max-w-md gap-x-4 items-center flex-wrap gap-y-2"
          >
            <label htmlFor="email-address" className="sr-only">
              Email
            </label>

            <input
              id="email-address"
              type="email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
              placeholder="Digite o seu email"
              {...register('email')}
              disabled={isLoading || isSubmitSuccessful}
            />

            <button
              type="submit"
              disabled={isLoading || isSubmitSuccessful}
              className="flex-none flex items-center rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            >
              {isSubmitSuccessful ? (
                <>
                  <CheckIcon className="h-4 w-4 mr-2" /> Inscrito com sucesso!
                </>
              ) : isLoading ? (
                <>
                  <Loader2Icon className="animate-spin h-4 w-4 mr-2" /> Se inscrevendo...
                </>
              ) : (
                'Quero me inscrever!'
              )}
            </button>
          </form>
        </div>
      </div>

      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#80fff0] to-[#89fc9c] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}
