import {Checkbox} from "@radix-ui/react-checkbox"
import {Envelope, Lock} from "phosphor-react"
import {FormEvent, useState} from "react"
import axios from 'axios'
import {Button} from "../components/Button"
import {Heading} from "../components/Heading"
import { Text } from "../components/Text"
import {TextInput} from "../components/TextInput"
import {Logo} from "../Logo"

export function Signin() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignin(e: FormEvent) {
  e.preventDefault()

    await axios.post('/sessions', {
      email: 'example@email.com',
      password: '11111111',
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-400 mt-1'>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
      </header>

      <form onSubmit={handleSignin} className="flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4">
        { isUserSignedIn && <Text>Login successfull</Text>}
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Email:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input id='email' placeholder='example@email.com' />
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Password:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input id='password' placeholder='************' />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>Remember me for 30 days</Text>
        </label>

        <Button type="submit" className='mt-4'>Login</Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text size='sm' asChild>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Forgot your password?</a>
        </Text>
        <Text size='sm' asChild>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Don't have an account? Sign up for free!</a>
        </Text>
      </footer>
    </div>
  )
}
