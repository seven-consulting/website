'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CheckIcon, Loader2Icon } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { FormSchema, formSchema } from './form-schema';
import { sendMessage } from './send-message';

export function Contact() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: '',
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      phone: '',
    },
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { isValidating, isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    try {
      const hasSent = await sendMessage(data);

      if (!hasSent) throw new Error();

      toast.success('Mensagem enviada com sucesso!');
    } catch (err) {
      toast.error('Não foi possível enviar sua mensagem!', {
        description: 'Aguarde alguns instantes e tente novamente.',
      });

      throw Error('Não foi possível enviar sua mensagem!');
    }
  };

  const isLoading = isValidating || isSubmitting;

  return (
    <section className="isolate relative bg-white px-6 py-24 sm:py-32 lg:px-8" id="contato">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Entre em contato conosco
        </h2>

        <p className="mt-2 text-lg leading-8 text-gray-600">
          Nossa equipe de suporte irá responder à sua mensagem o mais breve possível
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Primeiro nome<span className="text-red-500">*</span>
            </label>

            <div className="mt-2.5">
              <input
                id="first-name"
                type="text"
                autoComplete="given-name"
                className="disabled:cursor-not-allowed block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                {...register('firstName')}
                disabled={isLoading || isSubmitSuccessful}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Último nome<span className="text-red-500">*</span>
            </label>

            <div className="mt-2.5">
              <input
                id="last-name"
                type="text"
                autoComplete="family-name"
                {...register('lastName')}
                disabled={isLoading || isSubmitSuccessful}
                className="disabled:cursor-not-allowed block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Empresa
            </label>

            <div className="mt-2.5">
              <input
                type="text"
                id="company"
                autoComplete="organization"
                className="disabled:cursor-not-allowed block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                {...register('company')}
                disabled={isLoading || isSubmitSuccessful}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email<span className="text-red-500">*</span>
            </label>

            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                {...register('email')}
                autoComplete="email"
                disabled={isLoading || isSubmitSuccessful}
                className="disabled:cursor-not-allowed block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
              Nº de telefone
            </label>

            <div className="mt-2.5">
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                autoComplete="tel"
                disabled={isLoading || isSubmitSuccessful}
                className="disabled:cursor-not-allowed block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Mensagem<span className="text-red-500">*</span>
            </label>

            <div className="mt-2.5">
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                className="disabled:cursor-not-allowed block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                disabled={isLoading || isSubmitSuccessful}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-2">
          <button
            type="submit"
            className="disabled:opacity-80 disabled:hover:bg-teal-600 disabled:cursor-not-allowed flex items-center justify-center w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            disabled={isLoading || isSubmitSuccessful}
          >
            {isSubmitSuccessful ? (
              <>
                <CheckIcon className="h-4 w-4 mr-2" /> Enviado!
              </>
            ) : isLoading ? (
              <>
                <Loader2Icon className="animate-spin h-4 w-4 mr-2" /> Enviando...
              </>
            ) : (
              'Vamos conversar!'
            )}
          </button>

          {isSubmitSuccessful && (
            <button
              onClick={() => reset()}
              className="flex items-center justify-center w-full rounded-md bg-gray-200 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Enviar outra mensagem
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
