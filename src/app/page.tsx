'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  Button,
  Pagination,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from '@nextui-org/react'

import SkeletonDocumentManager from '@/components/molecules/SkeletonDocumentManager'
import DocumentManagerCards from '@/components/organisms/DocumentManagerCards'
import DocumentManagerTable from '@/components/organisms/DocumentManagerTable'

import { users } from '@/constants/data'

const HomePage = () => {
  const router = useRouter()
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set([]))
  const [groupSelected, setGroupSelected] = useState<string[]>([])
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
    <Tabs color="secondary" radius="full" size="md">
      <Tab title={`Pendientes (${users.length})`} />
      <Tab title={`Aprobados (${users.length})`} />
      <Tab title={`Denegados (${users.length})`} />
    </Tabs>
  )

  return (
    <div className="flex size-full items-start justify-start">
      <div className="flex w-full flex-col items-start">
        <div className="flex w-full items-center justify-between bg-[#000000] px-5 py-2">
          <h1 className="text-lg font-bold text-white md:text-2xl">
            Gestor de documentos
          </h1>
          <Button
            variant="light"
            color="success"
            radius="full"
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>
        </div>
        {isLoading ? (
          SkeletonDocumentManager()
        ) : (
          <div className="mt-5 flex w-full flex-col px-3 md:px-10">
            <div className="flex flex-col gap-4">
              <div className="hidden items-center gap-3 md:flex">
                Filtrar por: {renderTabs()}
              </div>
              <div className="flex flex-col items-start gap-3 md:hidden">
                Filtrar por:
                <Select
                  isRequired
                  defaultSelectedKeys={['1']}
                  className="w-full"
                  variant="flat"
                >
                  <SelectItem
                    key={1}
                  >{`Pendientes (${users.length})`}</SelectItem>
                  <SelectItem
                    key={2}
                  >{`Aprobados (${users.length})`}</SelectItem>
                  <SelectItem
                    key={3}
                  >{`Denegados (${users.length})`}</SelectItem>
                </Select>
              </div>
              <div className="mt-2 hidden md:block">
                <DocumentManagerTable
                  rows={users}
                  selectedKeys={selectedKeys}
                  setSelectedKeys={setSelectedKeys}
                />
              </div>
              <div className="mt-2 block md:hidden">
                <DocumentManagerCards
                  users={users}
                  selectedKeys={groupSelected}
                  setSelectedKeys={setGroupSelected}
                />
              </div>
              <div className="flex w-full justify-center md:justify-end">
                <Pagination
                  color="secondary"
                  radius="full"
                  variant="light"
                  isCompact
                  showControls
                  total={10}
                  initialPage={1}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
