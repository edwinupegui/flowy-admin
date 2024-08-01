import { useCallback } from 'react'

import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from '@nextui-org/react'

import { CheckIcon } from '@/constants/CheckIcon'
import { columns } from '@/constants/data'
import { DeleteIcon } from '@/constants/DeleteIcon'
import { DownloadIcon } from '@/constants/DownloadIcon'

interface Rows {
  id: number
  name: string
  typeDocument: string
  document: string
  email: string
  phone: string
  avatar: string
}

interface DocumentManagerTableProps {
  rows: Rows[]
  selectedKeys: Set<string>
  setSelectedKeys: React.Dispatch<React.SetStateAction<Set<string>>>
  isLoading: boolean
}

const DocumentManagerTable: React.FC<DocumentManagerTableProps> = ({
  rows,
  selectedKeys,
  setSelectedKeys,
  isLoading,
}) => {
  // const handleSelectionChange = (keys: Selection) => {
  //   setSelectedKeys(new Set(Array.from(keys) as string[]))
  // }

  const downloadPdf = (id: number) => {
    const link = document.createElement('a')
    link.href = `/images/Manualdemarca_compressed.pdf`
    link.download = `document_${id}.pdf`
    link.click()
  }

  const renderCell = useCallback((row: Rows, columnKey: string | number) => {
    switch (columnKey) {
      case 'name':
        return (
          <div className="flex w-64 items-center justify-start">
            <User
              avatarProps={{ radius: 'full', src: row.avatar }}
              name={row.name}
            />
          </div>
        )
      case 'id':
        return (
          <div className="flex w-32 flex-col">
            <p className="text-sm font-bold capitalize text-default-400">
              {row.id}
            </p>
          </div>
        )
      case 'document':
        return (
          <div className="flex w-32 flex-col">
            <p className="text-sm font-bold capitalize text-default-400">
              {row.typeDocument}: {row.document}
            </p>
          </div>
        )
      case 'email':
        return (
          <div className="flex w-64 flex-col">
            <p className="text-sm font-bold capitalize text-default-400">
              {row.email}
            </p>
          </div>
        )
      case 'phone':
        return (
          <div className="flex w-32 flex-col">
            <p className="text-sm font-bold capitalize text-default-400">
              {row.phone}
            </p>
          </div>
        )
      case 'actions':
        return (
          <div className="relative flex w-32 items-center justify-center gap-2">
            <Tooltip content="Descargar PDF">
              <span
                className="cursor-pointer text-lg text-default-400 active:opacity-50"
                onClick={() => downloadPdf(row.id)}
              >
                <DownloadIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                <CheckIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="cursor-pointer text-lg text-danger active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        )
      default:
        return null
    }
  }, [])

  return (
    <Table
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={rows}
        isLoading={isLoading}
        loadingContent={<Spinner />}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default DocumentManagerTable
