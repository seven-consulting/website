import { getTeamMembers } from './get-team-members';
import { Member } from './member';

export async function Team() {
  const teamMembers = await getTeamMembers();

  return (
    <section id="time" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Conheça a nossa equipe
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            São essas as pessoas que irão garantir a qualidade excepcional do nosso serviço.
          </p>
        </div>

        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {teamMembers.map(({ id, name, picture, role, contacts }) => (
            <li key={`TEAM-MEMBER-${id}`}>
              <Member
                member={{
                  name,
                  pictureUrl: picture.url,
                  role,
                  contacts,
                }}
              />
            </li>
          ))}

          <li>
            <Member
              member={{
                name: 'Miguel Rocha',
                pictureUrl: 'https://github.com/mmroch4.png',
                role: 'Desenvolvedor',
                contacts: [
                  {
                    type: 'email',
                    value: 'miguelrocha.dev@gmail.com',
                  },
                  {
                    type: 'phone',
                    value: '+351 924 718 182',
                  },
                ],
              }}
            />
          </li>
          <li>
            <Member
              member={{
                name: 'Miguel Rocha',
                pictureUrl: 'https://github.com/mmroch4.png',
                role: 'Desenvolvedor',
                contacts: [
                  {
                    type: 'email',
                    value: 'miguelrocha.dev@gmail.com',
                  },
                  {
                    type: 'phone',
                    value: '+351 924 718 182',
                  },
                ],
              }}
            />
          </li>
          <li>
            <Member
              member={{
                name: 'Miguel Rocha',
                pictureUrl: 'https://github.com/mmroch4.png',
                role: 'Desenvolvedor',
                contacts: [
                  {
                    type: 'email',
                    value: 'miguelrocha.dev@gmail.com',
                  },
                  {
                    type: 'phone',
                    value: '+351 924 718 182',
                  },
                ],
              }}
            />
          </li>
          <li>
            <Member
              member={{
                name: 'Miguel Rocha',
                pictureUrl: 'https://github.com/mmroch4.png',
                role: 'Desenvolvedor',
                contacts: [
                  {
                    type: 'email',
                    value: 'miguelrocha.dev@gmail.com',
                  },
                  {
                    type: 'phone',
                    value: '+351 924 718 182',
                  },
                ],
              }}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
