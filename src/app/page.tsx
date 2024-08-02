'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button, Pagination, Tab, Tabs } from '@nextui-org/react'

import SkeletonDocumentManagerTable from '@/components/molecules/SkeletonDocumentManagerTable'
import DocumentManagerTable from '@/components/organisms/DocumentManagerTable'

import { users } from '@/constants/data'

const HomePage = () => {
  const router = useRouter()
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set([]))
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/login')
    } else {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }

  const renderTabs = () => (
    <Tabs color="primary" radius="full" size="md">
      <Tab title={`Todos (${users.length})`}>
        <div className="mt-2">
          <DocumentManagerTable
            rows={users}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
          />
        </div>
      </Tab>
      <Tab title={`Aprobados (${users.length})`}>
        <div className="mt-2">
          <DocumentManagerTable
            rows={users}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
          />
        </div>
      </Tab>
      <Tab title={`Denegados (${users.length})`}>
        <div className="mt-2">
          <DocumentManagerTable
            rows={users}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
          />
        </div>
      </Tab>
    </Tabs>
  )

  return (
    <div className="flex size-full items-start justify-start p-10">
      <div className="flex w-full flex-col items-start">
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
        {isLoading ? (
          SkeletonDocumentManagerTable()
        ) : (
          <div className="mt-5 flex w-full flex-col">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">{renderTabs()}</div>
              <div className="flex w-full justify-end">
                <Pagination isCompact showControls total={10} initialPage={1} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
