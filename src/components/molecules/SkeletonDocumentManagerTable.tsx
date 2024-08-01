import clsx from 'clsx'
import { Card, Skeleton } from '@nextui-org/react'

const SkeletonDocumentManagerTable = () => (
  <div className="mt-4 flex flex-col gap-5">
    {/* Header Skeleton Card */}
    <Card className="h-[40px] w-[347px] rounded-full">
      <div className="flex h-full items-center justify-start gap-4">
        <Skeleton className="ml-2 rounded-full">
          <div className="h-[30px] w-[80px] rounded-full bg-default-300"></div>
        </Skeleton>
        {[...Array(2)].map((_, index) => (
          <Skeleton key={index} className="flex rounded-lg">
            <div className="h-2 w-24 rounded-lg bg-default-200"></div>
          </Skeleton>
        ))}
      </div>
    </Card>

    {/* Main Skeleton Card */}
    <Card className="h-[357px] w-[1125px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-10 rounded-lg bg-default-300"></div>
      </Skeleton>
      {[...Array(5)].map((_, rowIndex) => (
        <div key={rowIndex} className="space-y-3">
          <div className="flex items-center gap-7 px-5">
            {[...Array(8)].map((_, index) => (
              <Skeleton key={index} className="flex rounded-lg">
                <div className={`h-2 w-36 rounded-lg bg-default-200`}></div>
              </Skeleton>
            ))}
            <div className="flex gap-2">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="flex rounded-full">
                  <div className="size-4 rounded-full bg-default-200"></div>
                </Skeleton>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Card>

    {/* Footer Skeleton Card */}
    <div className="flex w-full justify-end">
      <Card className="h-[40px] w-[347px] rounded-lg">
        <div className="flex h-full items-center justify-center gap-4">
          <div className="flex space-x-4">
            <span className="text-lg font-bold text-default-200">&lt;</span>
          </div>
          {[...Array(9)].map((_, index) => (
            <Skeleton key={index} className="flex rounded-lg">
              <div
                className={clsx(
                  'rounded-lg bg-default-200',
                  index === 2 ? 'size-[30px]' : 'size-3',
                )}
              ></div>
            </Skeleton>
          ))}
          <div className="flex space-x-4">
            <span className="text-lg font-bold text-default-200">&gt;</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
)

export default SkeletonDocumentManagerTable
