import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

const baseUrl = process.env.BASE_URL || '';

interface IMessageEmailProps {
  firstName: string;
  lastName: string;
  company: string | null;
  email: string;
  phone: string | null;
  message: string;
}

export function Message({
  company,
  email,
  firstName,
  lastName,
  message,
  phone,
}: IMessageEmailProps) {
  return (
    <Tailwind
      config={{
        theme: {
          fontFamily: {
            default: [
              '-apple-system',
              'BlinkMacSystemFont',
              'Segoe UI',
              'Roboto',
              'Oxygen-Sans',
              'Ubuntu',
              'Cantarell',
              'Helvetica Neue',
              'sans-serif',
            ],
          },
        },
      }}
    >
      <Html lang="pt-BR">
        <Head />

        <Preview>
          Nova mensagem de: {firstName} {lastName}
        </Preview>

        <Body className="font-default bg-gray-1 text-gray-12">
          <Container className="mx-auto px-6 pb-12 pt-5">
            <Img
              className="h-36"
              src={`${baseUrl}/images/white-bg-logo-margin.png`}
              alt="Seven Consulting Logo"
            />

            <Text className="mt-12 text-3xl font-bold">💬 Nova mensagem</Text>

            <Section className="my-5 space-y-2">
              <Text className="text-base">
                <Text className="font-bold">Primeiro nome:</Text>
                {firstName}
              </Text>
              <Text className="text-base">
                <Text className="font-bold">Último nome:</Text>
                {lastName}
              </Text>
              <Text className="text-base">
                <Text className="font-bold">Empresa:</Text>
                {company || '-'}
              </Text>
              <Text className="text-base">
                <Text className="font-bold">Email:</Text>
                {email}
              </Text>
              <Text className="text-base">
                <Text className="font-bold">Nº de telefone:</Text>
                {phone || '-'}
              </Text>
              <Text className="text-base">
                <Text className="font-bold">Mensagem:</Text>
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
