import { useState } from 'react';

function Contact() {
  // Hooks para armazenar os valores dos inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

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
  };

  return (
    <div className="container mx-auto bg-[#262626] mt-[4rem] pb-16 font-raleway">
      <h2 className="text-2xl mb-4">Contato</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo Nome */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Nome</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="border rounded p-2 w-full"
            required
          />
        </div>

        {/* Campo E-mail */}
        <div className="mb-4">
          <label className="block text-sm font-medium">E-mail</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="border rounded p-2 w-full"
            required
          />
        </div>

        {/* Campo Empresa */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Empresa</label>
          <input 
            type="text" 
            name="company" 
            value={formData.company} 
            onChange={handleChange} 
            className="border rounded p-2 w-full"
            required
          />
        </div>

        {/* Botão de envio */}
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
