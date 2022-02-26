import { useState, useEffect } from "react";
import * as api from "@/api";
import { sliceDate } from "@/utils/graph";

function useCommitsPerMonth() {
  const [commitData, setCommitData] = useState([]);
  const [commitsLoading, setLoading] = useState(false);

  const getCommitsPerMonth = async () => {
    setLoading(true);
    const { year, month } = sliceDate(new Date());

    const data = await api.getCommitsTotalPerMonth(year);
    if (data.success) {
      let { commitEachMonth } = data;
      commitEachMonth = commitEachMonth.slice(0, month + 1);

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

  return [commitData, commitsLoading];
}
export default useCommitsPerMonth;
