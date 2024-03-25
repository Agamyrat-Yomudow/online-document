import { AiOutlineUser, AiTwotonePhone, AiOutlineMail} from "react-icons/ai";
import useFormStore from "../zustand/formStore";

const Form = () => {
  const {formData,setFormData}=useFormStore()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Gönderilen form verileri:', formData);
  };

    return (
        <div className='container mx-auto '>
            <div>
                
                <form className='' onSubmit={handleSubmit} action="">
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-8'>
                            <div className='w-1/2 border flex items-center bg-slate-50 rounded-md px-4 gap-4'>
                                <AiOutlineUser size={24}/>
                                <input placeholder='Ady' name="firstName" value={formData.firstName} onChange={handleChange} className='w-full bg-slate-50 py-2 outline-none' type="text" />
                            </div>
                            <div className='w-1/2 border flex items-center bg-slate-50 rounded-md px-4 gap-4'>
                                <AiOutlineUser size={24} />
                                <input placeholder='Familiyasy' name="lastName" value={formData.lastName} onChange={handleChange} className='w-full bg-slate-50 py-2 outline-none' type="text" />
                            </div>
                        </div>
                        <div className='flex gap-x-8'>
                            <div className='w-1/2 border flex items-center bg-slate-50 rounded-md px-4 gap-4'>
                            <AiOutlineMail size={24}/>
                                <input placeholder='E-mail' name="email" value={formData.email} onChange={handleChange} className='w-full bg-slate-50 py-2 outline-none' type="email" />
                            </div>
                            <div className='w-1/2 border flex items-center bg-slate-50 rounded-md px-4 gap-4'>
                            <AiTwotonePhone size={24} />
                                <input placeholder='Telefon belgisi' name="phone" value={formData.phone} onChange={handleChange} className='w-full bg-slate-50 py-2 outline-none' type="tel" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
