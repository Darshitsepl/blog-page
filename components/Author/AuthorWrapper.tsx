'use client'
import useHeader from '@/hooks/useHeader'
import React, { FC, useState, useEffect } from 'react'
import AuthorForm from './Form'
import { AuthorReponse } from '@/utils/model'
import { writeClient } from "@/sanity/lib/writeclient"
import { getAllAuthor } from "@/sanity/lib/query/query"

type Props = {
    data: AuthorReponse[]
}

const AuthorWrapper: FC<Props> = ({ data: initialData }) => {
  const [data, setData] = useState<AuthorReponse[]>(initialData)
  const [isRefreshing, setIsRefreshing] = useState(false)
  
  const { isFormShow, renderHeader, closeForm, openForm } = useHeader({
    btnTitle: "Add Author",
    headerTitle: 'Author'
  })

  const refreshData = async () => {
    setIsRefreshing(true)
    try {
          await new Promise(resolve => setTimeout(resolve, 300))
      const response = await (await fetch('http://localhost:3000/api/author')).json();
      console.log('refresh', response)
      setData(response)
    } catch (error) {
      console.error('Failed to refresh data:', error)
    } finally {
      setIsRefreshing(false)
    }
  }

  return (
    <div className='container'>
      {renderHeader()}
      {isRefreshing && (
        <div className="text-center py-2 text-blue-600">
          Refreshing data...
        </div>
      )}
      <div className='table-container'>
        <AuthorForm 
          isFormShow={isFormShow} 
          openForm={openForm} 
          data={data} 
          closeForm={closeForm}
          onDataUpdate={refreshData}
        />
      </div>
    </div>
  )
}

export default AuthorWrapper