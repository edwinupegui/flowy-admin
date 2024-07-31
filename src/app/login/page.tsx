'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'

const formSchema = z.object({
  user: z.string(),
  password: z.string().regex(/^\d{8}$/, 'Debe tener como mínimo 8 caracteres.'),
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
      <div className="hidden h-screen w-3/5 animate-gradient-move items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 lg:flex">
        <div className="relative size-full animate-gradient-move bg-custom-gradient">
          <div className="absolute right-10 top-14">
            <Image
              priority
              src="/images/logo-flowy.svg"
              alt="Logo Flowy"
              height={400}
              width={400}
            />
          </div>
          <div className="absolute bottom-0 flex w-full justify-center">
            <Image
              priority
              src="/images/joven-sonrienda-hd.png"
              alt="Joven Sonrienda"
              height={600}
              width={600}
            />
          </div>
        </div>
      </div>

      <div className="flex h-screen w-full items-center justify-center lg:w-2/5">
        <div className="flex w-full items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col justify-start gap-5 px-4 sm:w-80 sm:px-0"
          >
            <h1 className="text-2xl font-bold">Iniciar sesión</h1>
            <div className="flex w-full flex-col gap-2 sm:w-80">
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
                  className="absolute right-3 top-8"
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
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
                className="h-12 w-full bg-[#573BD5] disabled:bg-slate-400"
              >
                <p className="text-white">Iniciar sesión</p>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
