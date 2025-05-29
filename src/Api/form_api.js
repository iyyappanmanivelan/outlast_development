import instance from "../Config/config";

const RegisterApi =
  "AKfycbx-dCFZ3BD3VK-8ro_x4bORbmGzW4voELTH7mMJmzAfUMWh7hzwz5_WoPHQO7oh35gvpA/exec";

const ContactApi =
  "AKfycbzMVPiHabH2_9FGQIkE6lj8c8YO7ofKTacirbb-eobULSc-cGR53GPv910PpssTzQjz/exec";

export const Register_Api = async (value) => {
  const response = await instance.post(`${RegisterApi}`, value);
  return response?.data;
};

export const Contact_Api = async (value) => {
  const response = await instance.post(`${ContactApi}`, value);
  return response?.data;
};
