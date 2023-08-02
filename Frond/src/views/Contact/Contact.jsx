import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        subject,
        message,
      });

      if (response.status === 200) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contacto</h2>
      {status === "success" && <p>¡Gracias por contactarnos!</p>}
      {status === "error" && <p>Ha ocurrido un error. Inténtalo de nuevo más tarde.</p>}
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="subject">Asunto:</label>
        <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contact;