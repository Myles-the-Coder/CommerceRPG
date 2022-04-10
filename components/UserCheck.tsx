import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useRouter } from 'next/router';

const UserCheck = ({children}) => {
	const router = useRouter();
	const { currentUser } = useSelector((state: RootState) => state.user);
	useEffect(() => {
		!currentUser && router.push('/Login');
	}, [currentUser]);

	return <>{children}</>;
};

export default UserCheck;
