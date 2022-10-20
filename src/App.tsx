import '../src/styles/global.css';
import { Envelope, Lock } from 'phosphor-react';

import { Logo } from './Logo';
import { Text } from './component/Text';
import { Heading } from './component/Heading';
import { TextInput } from './component/TextInput';
import { Button } from './component/Button';
import { Checkbox } from './component/Checkbox';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="w-full flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          ignite lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          login and start using
        </Text>
      </header>

      <main className="w-full max-w-[400px]">
        <form className="flex flex-col items-stretch mt-10 gap-4">
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold">E-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input placeholder="E-mail address" id="email" />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className="flex flex-col gap-3">
            <Text className="font-semibold">Password</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input
                type="password"
                placeholder="*****"
                id="password"
              />
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Text size="sm" className="text-gray-200">
              Remember me for 30 days
            </Text>
          </label>

          <Button type="submit" className="mt-4">
            Login
          </Button>
        </form>
      </main>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Forgot your password?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Don't have an account? Create one now.
          </a>
        </Text>
      </footer>
    </div>
  );
}
