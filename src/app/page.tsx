'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  Button,
  Card,
  Pagination,
  Skeleton,
  Tab,
  Tabs,
} from '@nextui-org/react'

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

  const renderSkeleton = () => (
    <div className="mt-4 flex flex-col gap-5">
      <Card className="h-[40px] w-[347px] rounded-full">
        <div className="flex size-full items-center justify-start gap-4">
          <Skeleton className="ml-2 rounded-full">
            <div className="h-[30px] w-[80px] rounded-full bg-default-300"></div>
          </Skeleton>
          <Skeleton className="flex rounded-lg">
            <div className="h-2 w-20 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="flex rounded-lg">
            <div className="h-2 w-20 rounded-lg bg-default-200"></div>
          </Skeleton>
        </div>
      </Card>
      <Card className="h-[357px] w-[1125px] space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-10 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <div className="flex items-center gap-7 px-5">
            <Skeleton className="flex rounded-lg">
              <div className="size-7 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-full">
              <div className="size-10 rounded-full bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <div className="flex gap-2">
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
            </div>
          </div>
          <div className="flex items-center gap-7 px-5">
            <Skeleton className="flex rounded-lg">
              <div className="size-7 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-full">
              <div className="size-10 rounded-full bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <div className="flex gap-2">
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
            </div>
          </div>
          <div className="flex items-center gap-7 px-5">
            <Skeleton className="flex rounded-lg">
              <div className="size-7 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-full">
              <div className="size-10 rounded-full bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <div className="flex gap-2">
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
            </div>
          </div>
          <div className="flex items-center gap-7 px-5">
            <Skeleton className="flex rounded-lg">
              <div className="size-7 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-full">
              <div className="size-10 rounded-full bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <div className="flex gap-2">
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
            </div>
          </div>
          <div className="flex items-center gap-7 px-5">
            <Skeleton className="flex rounded-lg">
              <div className="size-7 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-full">
              <div className="size-10 rounded-full bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="h-2 w-36 rounded-lg bg-default-200"></div>
            </Skeleton>
            <div className="flex gap-2">
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
              <Skeleton className="flex rounded-full">
                <div className="size-4 rounded-full bg-default-200"></div>
              </Skeleton>
            </div>
          </div>
        </div>
      </Card>
      <div className="flex w-full justify-end">
        <Card className="h-[40px] w-[347px] rounded-full">
          <div className="flex size-full items-center justify-center gap-4">
            <div className="flex space-x-4">
              <span className="text-lg font-bold text-default-200">&lt;</span>
            </div>
            <Skeleton className="flex rounded-lg">
              <div className="size-3 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="rounded-md">
              <div className="size-[30px] rounded-md bg-default-300"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="size-3 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="size-3 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="size-3 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="size-3 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
              <div className="size-3 rounded-lg bg-default-200"></div>
            </Skeleton>
            <div className="flex space-x-4">
              <span className="text-lg font-bold text-default-200">&gt;</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )

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
        {isLoading ? (
          renderSkeleton()
        ) : (
          <div className="flex flex-col">
            <div className="mt-5 flex gap-4">
              <div className="flex flex-col">{renderTabs()}</div>
            </div>
            <div className="flex w-full justify-end">
              <Pagination isCompact showControls total={10} initialPage={1} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
