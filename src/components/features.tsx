import { HeartPulseIcon, ShieldCheckIcon, ThumbsUpIcon, TreesIcon } from 'lucide-react';

const FEATURES = [
  {
    name: 'Qualidade',
    description:
      'Estabelecemos processos de trabalho, metas e indicadores de desempenho para controlar, medir e melhorar o desempenho no trabalho, gestão de riscos e de preparação para emergências.',
    icon: ThumbsUpIcon,
  },
  {
    name: 'Ambiente',
    description:
      'Implementamos medidas para garantir que as nossas operações estão em conformidade com os requisitos internos e externos e as expectativas das autoridades governamentais, clientes e parceiros.',
    icon: TreesIcon,
  },
  {
    name: 'Saúde',
    description:
      'Asseguramos que a nossa força de trabalho é apta para o serviço através do processo de contratação. Apontamos para um ambiente de trabalho seguro e inspirador caracterizada pelo respeito e cooperação, de modo a eliminar os riscos.',
    icon: HeartPulseIcon,
  },
  {
    name: 'Segurança',
    description:
      'Assumimos a responsabilidade por nossa própria segurança e através de planejamento e execução adequada tomando o tempo para a realização de inspeção, manutenção necessária em cada passo que damos.',
    icon: ShieldCheckIcon,
  },
];

export function Features() {
  return (
    <section id="valores" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-600">Liderar com segurança</h2>

          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nossos valores
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Agregar valor às empresas é o nosso foco. Somos especializados nas mais diversas áreas,
            como:
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {FEATURES.map((feature) => (
              <div key={`FEATURE-${feature.name}`} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>

                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
