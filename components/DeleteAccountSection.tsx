import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function DeleteAccountSection() {
  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState('')

  const handleDeleteAccount = (e: React.FormEvent) => {
    e.preventDefault()
    if (confirmDelete.toLowerCase() === 'eliminar') {
      // Aquí iría la lógica para eliminar la cuenta
      console.log('Eliminando cuenta...')
      setIsDeleteAccountOpen(false)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-destructive">Eliminar Cuenta</h2>
      <p className="text-muted-foreground">
        Eliminar tu cuenta es permanente. Todos tus datos se perderán.
      </p>
      <Dialog open={isDeleteAccountOpen} onOpenChange={setIsDeleteAccountOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive">Eliminar Cuenta</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Eliminación de Cuenta</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleDeleteAccount} className="space-y-4">
            <p className="text-muted-foreground">
              Esta acción es irreversible. Por favor, escribe "ELIMINAR" para confirmar.
            </p>
            <div>
              <Label htmlFor="confirm-delete">Confirmar</Label>
              <Input
                id="confirm-delete"
                value={confirmDelete}
                onChange={(e) => setConfirmDelete(e.target.value)}
              />
            </div>
            <Button type="submit" variant="destructive" disabled={confirmDelete.toLowerCase() !== 'eliminar'}>
              Eliminar Cuenta Permanentemente
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

