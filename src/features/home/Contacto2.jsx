import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const Contacto2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { name: 'IES POLITÉCNICO HERMENEGILDO LANZ', person: 'María Dolores Sáenz Pajares', email: 'msaepaj412@g.educaand.es' },
    { name: 'IES AL-BAYTAR', person: 'David Racero', email: 'dracpat976@g.educaand.es' },
    { name: 'CIFP VIRGEN DE GRACIA', person: 'Raúl Morales Ocaña', email: 'rmo14@educastillalamancha.es' },
  ];
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOption);
  }
  return (
    <section className="flex flex-col items-center justify-center h-full p-10 max-w-7xl mx-auto">

      <div className="space-y-6 border-border border p-16 rounded-lg">
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
            <Input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Título consulta" id="title-form-item" aria-describedby="title-form-item-description" aria-invalid="false" name="username" />
            <p id="title-form-item-description" className="text-[0.8rem] text-muted-foreground">Título de la consyuylta que quieres realizar
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email-form-item">
              Tú Email</label>
            <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="example@email.com" id="email-form-item" aria-describedby="email-form-item-description" aria-invalid="false" name="username" />
            <p id="email-form-item-description" className="text-[0.8rem] text-muted-foreground">This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email-select-form-item">
              Email Centro
            </label>
            <div>
              <button onClick={(event) => {
                event.preventDefault();
                setIsOpen(!isOpen);
              }}>
                <p className='text-destructive'>{selectedOption || 'Selecciona el email del centro con el que quieres contactar'}</p>
              </button>
              {isOpen && (
                <ul>
                  {options.map((option) => (
                    <li key={option.email} onClick={() => handleOptionClick(option.email)}>
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
            <textarea className="flex min-h-[260px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none" placeholder="Escribenos con tus dudas y/o preguntas..." name="bio" id="message-form-item" aria-describedby="message-form-item-description" aria-invalid="false">

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