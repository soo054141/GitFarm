import { useEffect, useState } from "react";
import * as api from "@/api";

function useUsersReposLanguage() {
  const [reposLanguage, setReposLanguage] = useState();
  const [loading, setLoading] = useState(false);

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
    getUsersReposLanguage();
  }, []);

  return [reposLanguage, loading];
}
export default useUsersReposLanguage;
