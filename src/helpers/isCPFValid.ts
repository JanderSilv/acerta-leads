export const isCPFValid = (cpf?: string): boolean => {
  if (!cpf) return false
  cpf = cpf.replace(/[^\d]+/g, '')
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false

  const auxCPF = cpf.split('').map(el => +el)
  const rest = (count: number) =>
    ((auxCPF.slice(0, count - 12).reduce((sum, el, index) => sum + el * (count - index), 0) * 10) % 11) % 10
  return rest(10) === auxCPF[9] && rest(11) === auxCPF[10]
}
