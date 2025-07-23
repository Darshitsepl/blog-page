import { createClient } from 'next-sanity'
import {createClient as createClientSide} from '@sanity/client'

import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})



export const writeClientSide = createClientSide({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})