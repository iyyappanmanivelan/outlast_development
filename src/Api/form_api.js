import instance from "../Config/config";

const RegisterApi =
  "AKfycbx-dCFZ3BD3VK-8ro_x4bORbmGzW4voELTH7mMJmzAfUMWh7hzwz5_WoPHQO7oh35gvpA/exec";

const ContactApi =
  "AKfycbz1lLB8s8kMyO-mSBouVq14Xj8eNfmX-v1kG_AuOyE6Yke6xCtulXrCqvZzeRBpqH8F/exec";

export const Register_Api = async (value) => {
  const response = await instance.post(`${RegisterApi}`, value);
  return response?.data;
};

export const Contact_Api = async (value) => {
  const response = await instance.post(`${ContactApi}`, value);
  return response?.data;
};
