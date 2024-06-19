import { getPartners } from './get-partners';
import { Partner } from './partner';

export async function Partners() {
  const partners = await getPartners();

  return (
    <section id="empresas-parceiras" className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-100">
          Empresas que confiam no nosso serviço
        </h2>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {partners.map(({ name, logo }) => (
            <Partner
              key={`PARTNER-LOGO-${name}`}
              partner={{
                name,
                image: { url: logo.url },
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
