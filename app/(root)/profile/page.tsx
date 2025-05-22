'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

const ProfileRedirect = () => {
	const { user } = useUser()
	const router = useRouter()

	useEffect(() => {
		if (user) {
			router.replace(`/profile/${user.id}`)
		}
	}, [user, router])

	return null
}

export default ProfileRedirect
