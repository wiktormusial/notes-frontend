import * as Yup from 'yup';

export const NoteEditValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  body: Yup.string()
    .min(3, 'Too Short!')
    .required('Required'),
});
