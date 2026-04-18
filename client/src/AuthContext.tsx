import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

type UserRole = 'ADMIN' | 'MENTOR' | 'SCHOOL' | null;

interface AuthContextType {
  user: User | null;
  role: UserRole;
  loading: boolean;
  setRole: (role: UserRole) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
  setRole: async () => {},
  logout: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRoleState] = useState<UserRole>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserRole = async (uid: string) => {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      setRoleState(userDoc.data().role as UserRole);
    }
  };

  const setRole = async (newRole: UserRole) => {
    if (user) {
      await setDoc(doc(db, 'users', user.uid), { role: newRole }, { merge: true });
      setRoleState(newRole);
    }
  };
  const logout = async () => {
    await auth.signOut();
    setUser(null);
    setRoleState(null);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        setUser(currentUser);
        if (currentUser) {
          await fetchUserRole(currentUser.uid);
        } else {
          setRoleState(null);
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading, setRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
