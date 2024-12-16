import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Download } from 'lucide-react'

const billingHistory = [
  { date: '2023-05-15', amount: '$19.99', status: 'Pagado' },
  { date: '2023-04-15', amount: '$19.99', status: 'Pagado' },
  { date: '2023-03-15', amount: '$19.99', status: 'Pagado' },
]

export function BillingHistory() {
  return (
    <Card className="bg-purple-900 bg-opacity-30 border-cyan-300 hover:border-pink-400 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Historial de Facturación</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-200">Fecha</TableHead>
              <TableHead className="text-gray-200">Monto</TableHead>
              <TableHead className="text-gray-200">Estado</TableHead>
              <TableHead className="text-gray-200">Factura</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {billingHistory.map((bill, index) => (
              <TableRow key={index} className="hover:bg-purple-800 transition-colors duration-200">
                <TableCell className="text-gray-300">{bill.date}</TableCell>
                <TableCell className="text-gray-300">{bill.amount}</TableCell>
                <TableCell className="text-gray-300">{bill.status}</TableCell>
                <TableCell>
                  <Download className="w-4 h-4 text-cyan-300 cursor-pointer hover:text-cyan-100 transition-colors duration-200" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

