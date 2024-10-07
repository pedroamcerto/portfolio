import { useState } from 'react';

function Contact() {
  // Hooks para armazenar os valores dos inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // Estado para controlar se o formulário foi enviado
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função para lidar com a mudança dos inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o reload da página
    console.log(formData); // Printar os dados no console
    setIsSubmitted(true); // Define que o formulário foi enviado
  };

  return (
    <div className='bg-[#262626] mt-[4rem] pb-16 font-raleway h-screen'>
      <div className="pt-24">
        <h2 className="text-2xl mb-4 text-center text-white">Contato</h2>
        
        {/* Exibe a mensagem de sucesso se o formulário for enviado */}
        {isSubmitted ? (
          <div className="text-center text-green-500">
            <p>Formulário enviado com sucesso! 🎉</p>
          </div>
        ) : (
          <form className='w-4/5 md:w-1/2 m-auto' onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">Nome</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="border rounded p-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-white">E-mail</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="border rounded p-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-white">Empresa</label>
              <input 
                type="text" 
                name="company" 
                value={formData.company} 
                onChange={handleChange} 
                className="border rounded p-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-white">Mensagem</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border rounded p-2 w-full h-32 text-start"
                    required
                />
            </div>

            <button 
              type="submit" 
              className="bg-purple-500 text-white py-1 px-4 rounded"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
