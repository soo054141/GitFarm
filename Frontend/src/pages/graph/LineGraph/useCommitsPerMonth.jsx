import { useState, useEffect } from "react";
import * as api from "@/api";
import { checkMonth } from "@/utils/graph";

function useCommitsPerMonth() {
  const [commitData, setCommitData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCommitsPerMonth = async () => {
    setLoading(true);
    const { year, month, thisMonth } = checkMonth(new Date());

    const data = await api.getCommitsTotalPerMonth(year);
    if (data.success) {
      let { commitEachMonth } = data;

      if (month === thisMonth) {
        commitEachMonth = commitEachMonth.slice(0, thisMonth + 1);
      }

      const checkEmptyArray = commitEachMonth.every((it) => it === 0);
      if (checkEmptyArray) {
        setCommitData([]);
      } else {
        const createData = commitEachMonth.slice(1).map((commitCnt, index) => ({
          name: `${index + 1}월`,
          commit: commitCnt,
        }));
        setCommitData(createData);
      }
    } else {
      setCommitData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCommitsPerMonth();
  }, []);

  return [commitData, loading];
}
export default useCommitsPerMonth;
