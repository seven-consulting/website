import { HeartPulseIcon, ShieldCheckIcon, ThumbsUpIcon, TreesIcon } from 'lucide-react';

const ICONS = {
  seguranca: ShieldCheckIcon,
  saude: HeartPulseIcon,
  meioambiente: TreesIcon,
  qualidade: ThumbsUpIcon,
};

type Icon = 'qualidade' | 'meioambiente' | 'seguranca' | 'saude';

interface FeaturesProps {
  texts: {
    areaOneIcon: Icon;
    areaOne: string;
    areaOneDescription: string;
    areaTwoIcon: Icon;
    areaTwo: string;
    areaTwoDescription: string;
    areaThreeIcon: Icon;
    areaThree: string;
    areaThreeDescription: string;
    areaFourIcon: Icon;
    areaFour: string;
    areaFourDescription: string;
  };
}

export function Features({ texts }: FeaturesProps) {
  const IconOne = ICONS[texts.areaOneIcon];
  const IconTwo = ICONS[texts.areaTwoIcon];
  const IconThree = ICONS[texts.areaThreeIcon];
  const IconFour = ICONS[texts.areaFourIcon];

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
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                  <IconOne className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {texts.areaOne}
              </dt>

              <dd className="mt-2 text-base leading-7 text-gray-600">{texts.areaOneDescription}</dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                  <IconTwo className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {texts.areaTwo}
              </dt>

              <dd className="mt-2 text-base leading-7 text-gray-600">{texts.areaTwoDescription}</dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                  <IconThree className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {texts.areaThree}
              </dt>

              <dd className="mt-2 text-base leading-7 text-gray-600">
                {texts.areaThreeDescription}
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                  <IconFour className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {texts.areaFour}
              </dt>

              <dd className="mt-2 text-base leading-7 text-gray-600">
                {texts.areaFourDescription}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
