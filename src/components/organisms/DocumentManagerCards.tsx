import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Tooltip,
  User,
} from '@nextui-org/react'

import { CheckIcon } from '@/constants/CheckIcon'
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

interface DocumentManagerCardsProps {
  users: Rows[]
  selectedKeys: string[]
  setSelectedKeys: React.Dispatch<React.SetStateAction<string[]>>
}

const UserCard: React.FC<{
  user: Rows
}> = ({ user }) => {
  const downloadPdf = (id: number) => {
    const link = document.createElement('a')
    link.href = `/images/Manualdemarca_compressed.pdf`
    link.download = `document_${id}.pdf`
    link.click()
  }

  return (
    <Card className="w-full gap-2 p-2" radius="sm">
      <CardHeader className="flex justify-between">
        <User
          avatarProps={{ radius: 'full', src: user.avatar }}
          name={user.name}
        />
        <Checkbox value={String(user.id)} size="lg" />
      </CardHeader>
      <CardBody className="flex flex-col gap-2">
        <div className="flex justify-between pr-5">
          <p>ID: {user.id}</p>
          <p>C.C: {user.document}</p>
        </div>
        <p>{user.email}</p>
      </CardBody>
      <CardFooter className="flex justify-between">
        <p>Cel: {user.phone}</p>
        <div className="relative flex items-center justify-center gap-4">
          <Tooltip content="Descargar PDF">
            <span
              className="cursor-pointer text-lg text-default-400 active:opacity-50"
              onClick={() => downloadPdf(user.id)}
            >
              <DownloadIcon />
            </span>
          </Tooltip>
          <Tooltip color="success" content="Aprobar">
            <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
              <CheckIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Denegar">
            <span className="cursor-pointer text-lg text-danger active:opacity-50">
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      </CardFooter>
    </Card>
  )
}

const DocumentManagerCards: React.FC<DocumentManagerCardsProps> = ({
  users,
  selectedKeys,
  setSelectedKeys,
}) => {
  return (
    <CheckboxGroup
      color="secondary"
      value={selectedKeys}
      onChange={setSelectedKeys}
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </CheckboxGroup>
  )
}

export default DocumentManagerCards
