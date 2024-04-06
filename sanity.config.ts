import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { sanityDataset, sanityProjectId } from '@/app/constants'

export default defineConfig({
  name: 'default',
  title: 'hotel-management',

  projectId:sanityProjectId ,
  dataset: sanityDataset,
  basePath:"/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
