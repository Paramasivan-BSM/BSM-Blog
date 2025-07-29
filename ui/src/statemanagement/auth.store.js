import { create } from "zustand";
import axios from "axios";

export const AuthStore = create((set) => ({

signup_msg: null,

  signUp: async (data) => {
    try {
      const res = await axios.post("http://localhost:8000/api/auth/signup", data);
      set({signup_msg : res.data})
      alert(res.data.msg);
    } catch (e) {
      console.error("Error", e);
      alert("Signup failed!");
    }
  }
}));
