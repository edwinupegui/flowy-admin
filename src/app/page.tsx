'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button, Pagination, Tab, Tabs } from '@nextui-org/react'

import DocumentManagerTable from '@/components/organisms/DocumentManagerTable'

import { users } from '@/constants/data'

export default function HomePage() {
  const router = useRouter()
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set([]))
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/login')
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-start">
          <div className="flex w-full justify-end">
            <Button
              variant="solid"
              color="primary"
              radius="full"
              onClick={handleLogout}
            >
              Salir
            </Button>
          </div>
          <h1 className="text-2xl font-bold">Gestor de documentos</h1>
          <div className="mt-5 flex gap-4">
            <div className="flex flex-col">
              <Tabs color="primary" radius="full" size="md">
                <Tab title={`Todos (${users.length})`}>
                  <div className="mt-2">
                    <DocumentManagerTable
                      rows={users}
                      selectedKeys={selectedKeys}
                      setSelectedKeys={setSelectedKeys}
                      isLoading={isLoading}
                    />
                  </div>
                </Tab>
                <Tab title={`Aprobados (${users.length})`}>
                  <div className="mt-2">
                    <DocumentManagerTable
                      rows={users}
                      selectedKeys={selectedKeys}
                      setSelectedKeys={setSelectedKeys}
                      isLoading={isLoading}
                    />
                  </div>
                </Tab>
                <Tab title={`Denegados (${users.length})`}>
                  <div className="mt-2">
                    <DocumentManagerTable
                      rows={users}
                      selectedKeys={selectedKeys}
                      setSelectedKeys={setSelectedKeys}
                      isLoading={isLoading}
                    />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="flex w-full justify-end">
            <Pagination isCompact showControls total={10} initialPage={1} />
          </div>
        </div>
      </div>
    </>
  )
}
