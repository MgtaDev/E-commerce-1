import { useFormik } from "formik";
import * as yup from "yup";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: ""
    },
    validationSchema: yup.object({
      email: yup.string().email("invalid email address").required("requered"),
      name: yup
        .string()
        .max(15, "Must be 20 characters or less")
        .required("required"),
      message: yup.string().max(500, "maximum characters").required("required")
    }),
    onSubmit: values => {
      alert("aca pa enviar al back");
    }
  });
  return (
    <section className="grid grid-cols-2 grid-rows-1 justify-items-center w-[80%] h-[80%] m-auto bg-fuchsia-800">
      <div className="col-span-1 w-[50%]">
        <img className="w-full"
          src="https://cdn.create.vista.com/api/media/small/530382968/stock-photo-nude-eye-shadow-palette-brush"
          alt="logo"
        />
      </div>
      <div className="col-span-1">
        <form
          className="grid grid-cols-1 gap-10"
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="your name">tu nombre:</label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name
            ? <div>
                {formik.errors.name}
              </div>
            : null}
          <label htmlFor="tu email">tu email:</label>
          <input
            type="email"
            name="email"
            placeholder="ingrese su email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email
            ? <div>
                {formik.errors.email}
              </div>
            : null}
          <label htmlFor="message">message</label>
          <textarea
            name="message"
            placeholder="ingrese un mensaje"
            onBlur={formik.handleBlur}
            value={formik.values.message}
            onChange={formik.handleChange}
            rows={10}
          />
          {formik.touched.message && formik.errors.message
            ? <div>
                {formik.errors.message}
              </div>
            : null}
        </form>
      </div>
    </section>
  );
};

export default Contact;
