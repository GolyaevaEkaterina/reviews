import { format } from 'date-fns'

const today = new Date()
const formatDate = format(today, 'dd/MM/yyyy')

console.log(today);
console.log(formatDate);