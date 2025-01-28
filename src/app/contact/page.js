import { TextField } from '@radix-ui/themes';
import { StyledButton } from '../components /Button';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, we will get back to you soon!`);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-4">
      <TextField.Root className="block w-full">
        <TextField.Input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          className="block w-full p-2 border rounded" 
          onChange={handleChange} 
          required
        />
      </TextField.Root>
      <TextField.Root className="block w-full">
        <TextField.Input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          className="block w-full p-2 border rounded" 
          onChange={handleChange} 
          required
        />
      </TextField.Root>
      <TextField.Root className="block w-full">
        <TextField.Input 
          asChild
          placeholder="Your Message"
          className="block w-full p-2 border rounded"
        >
          <textarea name="message" onChange={handleChange} required></textarea>
        </TextField.Input>
      </TextField.Root>
      <StyledButton type="submit" className="bg-[#BF5FAB] text-white py-2 px-5 rounded-lg shadow-lg">Submit</StyledButton>
    </form>
  );
} export default ContactForm