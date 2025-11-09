const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'seu email',
    pass: 'senha do app',
  }
});

transport.sendMail({
  from: 'Hérica <seu email>',
  to: 'email do desninatário',
  subject: 'Enviando email com Nodemailer',
  html: '<h1>Olá!</h1><p>Esse é um email enviado com Nodemailer</p>',
  text: 'Olá! Esse é um email enviado com Nodemailer',
})
.then(() => console.log('Email enviado com sucesso!'))
.catch(err => console.error('Erro ao enviar email:', err));