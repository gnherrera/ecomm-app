'use client'

import { useState } from 'react'
import { api } from '@/lib/api'

export default function CreateUserPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await api('/users', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
    })

    setName('')
    setEmail('')
    alert('User created!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button className="bg-black text-white px-4 py-2">
        Create User
      </button>
    </form>
  )
}
