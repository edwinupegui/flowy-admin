'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'

const formSchema = z.object({
  user: z.string().min(1, 'El usuario es obligatorio.'),
  password: z.string().min(8, 'Debe tener como mínimo 8 caracteres.'),
})

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const { formState, register, handleSubmit } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: '',
      password: '',
    },
    mode: 'onChange',
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.user === '12345678' && values.password === '12345678') {
      localStorage.setItem('user', 'true')
      router.push('/')
    }
  }

  return (
    <div className="flex w-full">
      <div className="relative hidden h-screen w-3/5 lg:block">
        <div className="w-full">
          <Image
            fill
            priority
            src="/images/fondo-inicio-sesion.png"
            alt="fondo inicio sesion"
          />
        </div>
        <div className="relative size-full">
          <div className="absolute right-10 top-14">
            <Image
              priority
              src="/images/logo-flowy.svg"
              alt="Logo Flowy"
              height={500}
              width={500}
              className="w-full"
            />
          </div>
          <div className="absolute bottom-0 flex w-full justify-center">
            <Image
              priority
              src="/images/joven-sonrienda.png"
              alt="Joven Sonrienda"
              height={600}
              width={600}
              className="w-3/5"
            />
          </div>
        </div>
      </div>

      <div className="flex size-full h-screen flex-col items-center justify-center bg-[url('/images/fondo-inicio-sesion.png')] lg:w-2/5 lg:bg-none">
        <div className="my-10 flex w-full items-center justify-center lg:hidden">
          <Image
            priority
            src="/images/logo-flowy.svg"
            alt="Logo Flowy"
            height={200}
            width={200}
          />
        </div>
        <div className="flex h-full w-[90%] items-start justify-center rounded-t-lg bg-white lg:relative lg:items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col justify-start gap-5 px-5 pt-10 lg:w-80 lg:px-0 lg:pt-0"
          >
            <h1 className="text-3xl font-bold">Iniciar sesión</h1>
            <div className="flex w-full flex-col gap-2 lg:w-80">
              <div>
                <Input
                  type="text"
                  inputMode="numeric"
                  label="Usuario:"
                  variant="bordered"
                  labelPlacement="outside"
                  radius="sm"
                  className="w-full"
                  onKeyDown={(event) => {
                    if (
                      !/[0-9]/.test(event.key) &&
                      event.key !== 'Backspace' &&
                      event.key !== 'Delete'
                    ) {
                      event.preventDefault()
                    }
                  }}
                  {...register('user')}
                />
                {formState.errors.user && (
                  <p className="text-xs text-red-600">
                    {formState.errors.user.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  label="Contraseña:"
                  variant="bordered"
                  labelPlacement="outside"
                  radius="sm"
                  className="w-full"
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-8 transition-transform duration-200 ease-in-out"
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="text-gray-700"
                  />
                </button>
                {formState.errors.password && (
                  <p className="text-xs text-red-600">
                    {formState.errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <Button
                disabled={!formState.isValid}
                fullWidth
                type="submit"
                radius="full"
                variant="solid"
                size="lg"
                color="primary"
                className="hover:cursor-pointer disabled:bg-default"
              >
                Iniciar sesión
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
