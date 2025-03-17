import { useEffect, useState } from 'react';
import { authObserver } from '@/services/firebase';

export default function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = authObserver(setUser);

    return () => unsubscribe();
  }, []);

  return { user };
}
