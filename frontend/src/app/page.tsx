'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Main from './main'
export default function Home() {
  const app = useRouter()
  useEffect(() => {
    app.push('/auth')
  }, [])
  return (
    <>
      <Main />
    </>
  );
}
