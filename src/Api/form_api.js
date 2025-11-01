import instance from "../Config/config";

const RegisterApi =
  "AKfycbx-dCFZ3BD3VK-8ro_x4bORbmGzW4voELTH7mMJmzAfUMWh7hzwz5_WoPHQO7oh35gvpA/exec";

const ContactApi =
  "AKfycbwv_GnBRostqd-6TmO73DtKvN_IwCfidKm9Hw6rIMa_hCE-rf72MdpgkklW1MzyHEv0dw/exec";

export const Register_Api = async (value) => {
  const response = await instance.post(`${RegisterApi}`, value);
  return response?.data;
};

export const Contact_Api = async (value) => {
  const response = await instance.post(`${ContactApi}`, value);
  return response?.data;
};
