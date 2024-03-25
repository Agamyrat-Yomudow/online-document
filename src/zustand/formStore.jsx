import { create } from "zustand";



const useFormStore=create((set)=>({
    formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
      setFormData: (data) => set({ formData: data }),
}))
export default useFormStore