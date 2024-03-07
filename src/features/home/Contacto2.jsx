import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const Contacto2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({ title: false, email: false, selectedOption: false, message: false });

  const options = [
    { name: 'IES POLITÉCNICO HERMENEGILDO LANZ', person: 'María Dolores Sáenz Pajares', email: 'msaepaj412@g.educaand.es' },
    { name: 'IES AL-BAYTAR', person: 'David Racero', email: 'dracpat976@g.educaand.es' },
    { name: 'CIFP VIRGEN DE GRACIA', person: 'Raúl Morales Ocaña', email: 'rmo14@educastillalamancha.es' },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    setError({ title: !title, email: !isEmailValid, selectedOption: !selectedOption, message: !message });

    if (!selectedOption || !title || !isEmailValid || !message) {
      return;
    }



    console.log(selectedOption);
    console.log(title, email, message);
    setEmail('');
    setTitle('');
    setMessage('');
    setSelectedOption('');
  }


  return (
    <section className="flex flex-col items-center justify-center h-full p-10 max-w-7xl mx-auto">

      <div className="space-y-6 border p-10 w-full">
        <div>
          <h3 className="text-lg font-medium text-primary">
            Contacto
          </h3>
          <p className="text-sm text-muted-foreground">Contáctanos!</p>
        </div>
        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full">
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="title-form-item">
              Titulo
            </label>
            {error.title && <p className="text-destructive">Por favor, introduce un título.</p>}
            <Input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Título consulta"
              id="title"
              aria-describedby="input para el titulo de la consulta"
              aria-invalid="false"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
            <p id="title-form-item-description" className="text-[0.8rem] text-muted-foreground">Título de la consulta que quieres realizar
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email-form-item">
              Tú Email</label>
            {error.email && <p className="text-destructive">Por favor, introduce un email válido.</p>}
            <Input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50  "
              placeholder="example@email.com"
              id="email"
              aria-describedby="input para el email del usuario"
              aria-invalid="false"
              name="email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="off"
            />
            <p id="title-email-user" className="text-[0.8rem] text-muted-foreground">Introduce tu email para que podamos responderte.
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email-center">
              Email Centro
            </label>
            {error.selectedOption && <p className="text-destructive">Por favor, selecciona el Email Centro antes de enviar.</p>}
            <div>
              <button onClick={(event) => {
                event.preventDefault();
                setIsOpen(!isOpen);
              }}>
                <p className='text-muted-foreground'>{selectedOption || 'Clica aquí para seleccionar el email del centro con el que quieres contactar'}</p>
              </button>
              {isOpen && (
                <ul>
                  {options.map((option) => (
                    <li className='cursor-pointer' key={option.email} onClick={() => handleOptionClick(option.email)}>
                      <span className='font-bold'>{option.name}</span> - <span className='text-primary'>{option.person}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message-form-item">
              Mensaje
            </label>
            {error.message && <p className="text-destructive">Por favor, introduce un mensaje.</p>}
            <textarea className="flex min-h-[260px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none" placeholder="Escribenos con tus dudas y/o preguntas..."
              name="message"
              id="message"
              aria-describedby="textarea para el mensaje de la consulta"
              aria-invalid="false"
              onChange={handleMessageChange}
              value={message}
            >

            </textarea>
          </div>

          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2" type="submit">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto2;