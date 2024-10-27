"use client";

import { useState } from 'react';
import userModel from '../models/user_model';

export const useRegisterController = () => {
  const [formData, setFormData] = useState(userModel);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


  return { formData, handleChange };
};
