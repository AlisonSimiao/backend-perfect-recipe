import * as yup from 'yup';

export const SignUpValidation = yup.object().shape({
  email: yup.string().email('Email invalido').required('Email e obrigatorio'),
  password: yup.string().required('Senha e obrigatoria'),
});

