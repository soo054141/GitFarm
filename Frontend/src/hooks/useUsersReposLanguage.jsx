import { useEffect, useState } from "react";
import * as api from "@/api";
import { useAuth } from "../contexts/auth";

function useUsersReposLanguage() {
  const { isLogin } = useAuth();
  const [reposLanguage, setReposLanguage] = useState();
  const [reposLanguageLoading, setLoading] = useState(false);

  const getUsersReposLanguage = async () => {
    setLoading(true);

    const res = await api.getReposLanguage();
    if (res.success) {
      setReposLanguage(res.languages);
    } else {
      setReposLanguage([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isLogin) {
      getUsersReposLanguage();
    }
  }, []);

  return [reposLanguage, reposLanguageLoading];
}
export default useUsersReposLanguage;
