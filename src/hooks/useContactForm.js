import { useState } from "react";
import { sendInbox } from "../services/contactService";

const initialForm = {
  name: "",
  email: "",
  contact: "",
  company: "",
  address: "",
  message: "",
};

export function useContactForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendInbox({
        name: form.name,
        email: form.email,
        contact: form.contact,
        company: form.company,
        address: form.address,
        description: form.message, 
      });

      setOpenSuccess(true);
      resetForm();
    } catch (error) {
      console.error("Send inbox error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    openSuccess,
    setOpenSuccess,
    handleChange,
    handleSubmit,
  };
}
