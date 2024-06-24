'use server';

import { Message } from '@/emails/message';
import { render } from '@react-email/render';
import { createTransport } from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import { FormSchema } from './form-schema';

const TO = 'geral@sevenconsultingtraining.com.br';

const FROM = 'desenvolvedor@sevenconsultingtraining.com.br';

export async function sendMessage({
  firstName,
  lastName,
  email,
  company,
  message,
  phone,
}: FormSchema) {
  try {
    const transport = createTransport(process.env.SMTP_SERVER);

    const emailHtml = render(Message({ company, email, firstName, lastName, message, phone }));

    const mailOptions: MailOptions = {
      to: TO,
      from: FROM,
      subject: `Nova mensagem de ${firstName} ${lastName}`,
      html: emailHtml,
    };

    const result = await transport.sendMail(mailOptions);

    const failed = result.rejected.concat(result.pending).filter(Boolean);

    if (failed.length) {
      throw new Error(`Email(s) (${failed.join(', ')}) não foram enviados.`);
    }
  } catch (err) {
    console.log(err);

    return false;
  }

  return true;
}
