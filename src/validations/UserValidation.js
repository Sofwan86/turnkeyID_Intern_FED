const UserValidation = (values) => {
  const errors = {};

  if (!values.name || values.name === "") {
    errors.name = "Nama harus diisi";
  }

  if (!values.email || values.email === "") {
    errors.email = "Umur harus diisi";
  }

  if (!values.phone || values.phone === "") {
    errors.phone = "Alamat harus diisi";
  }

  if (!values.country || values.country === "") {
    errors.country = "No HP harus diisi";
  }

  return errors;
};

export default UserValidation;
