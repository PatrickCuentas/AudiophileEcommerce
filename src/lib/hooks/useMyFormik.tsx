import { useFormik } from 'formik';
import * as Yup from 'yup';

const initFormik = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      zip: '',
      city: '',
      country: '',
      eMoneyNumber: '',
      eMoneyPin: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Wrong format').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      address: Yup.string().required('Address is required'),
      zip: Yup.string().required('Zip is required'),
      city: Yup.string().required('City is required'),
      country: Yup.string().required('Country is required'),
    }),
    onSubmit: (values) => {
      new Promise((resolve) => setTimeout(resolve, 1000))
        .then((res) => {})
        .catch((err) => {})
        .finally(() => {
          formik.resetForm();
          formik.setTouched({});
          formik.setErrors({});
          formik.setSubmitting(false);
        });
    },
  });
  return formik;
};

export default initFormik;
