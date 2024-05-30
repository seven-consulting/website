export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">#1 Segurança</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Quem somos?
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                A Seven Consulting é uma empresa nova no mercado, mas com profissionais com muita
                experiência na área de QSMS, ISO 9001, ISO 14000, OSHA (Occupational Safety and
                Health Association) sabendo as necessidades das empresas.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://cdn.pixabay.com/photo/2021/09/16/21/27/container-ship-6631117_1280.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Nossos profissionais são qualificados e certificados para atender as necessidades
                das empresas nas áreas de: treinamentos Industriais, Consultoria em Segurança do
                Trabalho, Prestação de serviços em resgate em espaços confinados, resgate em altura,
                dentre outros. Visando aumentar os padrões de segurança das atividades que envolvam
                riscos aos colaboradores. Auditorias internas e externas, adequação as normas.
                <br />
                <br />
                Temos um corpo técnico com 20 anos de experiência no mercado de óleo e gás, aonde o
                maior diferencial está no entendimento da demanda com o conhecimento técnico e
                operacional, o que possibilita apresentar a melhor solução com o melhor beneficio ao
                cliente.
                <br />
                <br />
                Nossa missão consiste em valorizar todos os envolvidos em nossos negócios
                comerciais, provendo ofertas com produtos de maior qualidade, ao menor preço e com o
                menor prazo, garantindo, assim, a satisfação total dos nossos clientes, de forma
                clara e totalmente Ética.
                <br />
                <br />
                Nossos objetivos consistem em alcançar e manter a melhor qualidade no serviço,
                ofertando os melhores produtos para desenvolver um relacionamento de sucesso com
                nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
