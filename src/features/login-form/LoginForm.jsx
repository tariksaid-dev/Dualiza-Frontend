import React, { useContext, useState } from 'react'
import { useLogin } from './useLogin';
import { ThemeProviderContext } from '@/context/DarkModeContext';
import { Input } from '@/components/ui/input';
import BombillaLibro from '@/components/icons/BombillaLibro';
import Bombilla from '@/components/ui/3d/bombilla/Bombilla';


const LoginForm = () => {
  const { theme } = useContext(ThemeProviderContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isLoading, error } = useLogin();

  const logoImagePath = theme === 'light'
    ? "images/CaixaBank_Dualiza/CaixaBank-Dualiza-Logo-Horitzontal-RGB-Fons-Negre.webp"
    : "images/CaixaBank_Dualiza/CaixaBank-Dualiza-Logo-Horitzontal-RGB-Fons-Blanc.webp";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login({ email, password })

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <section className='p-10'>

      <div className=" rounded-[0.5rem] border border-border bg-background shadow-md md:shadow-xl">

        <div className="container relative  h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col sm:p-10 text-white lg:flex dark:border-r">
            <div className="absolute inset-0 bg-zinc-900">
            </div>
            <div className="relative z-20 flex items-center text-lg font-medium text-card-foreground">
              <BombillaLibro className="w-8 h-8 mr-2" />
              <p className='text-muted-foreground'>Dualiza</p>
            </div>
            <div className="relative z-20 mt-auto">
              <div className='pb-24'>

            <BombillaLibro height='400' width='400'/>
              </div>
              <blockquote className="space-y-2">
                <p className="text-lg">“This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”
                </p>
                <footer className="text-sm">
                  Tritrete
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="lg:p-8 py-64 md:py-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Login
                </h1>
                <p className="text-sm text-muted-foreground">
                  Introduce tu email y contraseña para acceder a tu cuenta
                </p>
              </div>
              <div className="grid gap-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <div className="grid gap-1">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only" htmlFor="email">
                        Email
                      </label>
                      <Input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="name@example.com" autoCapitalize="none" autoComplete="email" autoCorrect="off" type="email" value={email}
                        onChange={handleEmailChange} />
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only" htmlFor="password">
                        Password
                      </label>
                      <Input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="password" placeholder="password" autoCapitalize="none" autoComplete="password" autoCorrect="off" type="password"
                        value={password}
                        onChange={handlePasswordChange} />
                    </div>
                    <button type='submit' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                      Login with Email
                    </button>
                  </div>
                </form>

              </div>
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our
                <a className="underline underline-offset-4 hover:text-primary" href="/terms"
                >Terms of Service
                </a>
                and
                <a className="underline underline-offset-4 hover:text-primary" href="/privacy">
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm