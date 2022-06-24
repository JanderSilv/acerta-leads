import { Lead } from 'src/models'
import { api } from '../api'

export type LeadResponse = Lead & {
  id: number
}

export type LeadParams = {
  name?: string
  cpf?: string
}

const endpoint = '/leads'

export const leadsService = {
  get: (id: number) => api.get(`${endpoint}/${id}`),
  list: (params?: LeadParams) =>
    api.get<LeadResponse[], any, LeadParams>(endpoint, {
      params: ((): LeadParams => {
        if (!params) return {}
        const asArray = Object.entries(params)
        const filtered = asArray.filter(([_, value]) => value !== '')
        return Object.fromEntries(filtered)
      })()
    }),
  create: (data: Lead) => api.post(endpoint, data),
  update: (id: number, data: Lead) => api.put(`${endpoint}/${id}`, data),
  delete: (id: number) => api.delete(`${endpoint}/${id}`)
}
