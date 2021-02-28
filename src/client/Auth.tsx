import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from '../reducers/user'

export const Auth = () => {
  const user = useSelector<any>((s) => {
    return s.user
  })
  console.log(user)

  const d = useDispatch()
  useEffect(() => {
    d(authenticate('boyko', 'lalov'))
  }, [])
  return <div>Auth List</div>
}

export default Auth
