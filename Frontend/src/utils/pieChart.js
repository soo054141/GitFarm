import githubLangColors from "@/pages/graph/PieChart/github-lang-colors.json";

export function makeLanguageRatioArray(reposLanguage) {
  const languageCountObj = {};

  reposLanguage.forEach((it) => {
    if (Object.prototype.hasOwnProperty.call(languageCountObj, it.language)) {
      languageCountObj[it.language] += 1;
    } else {
      languageCountObj[it.language] = 1;
    }
  });

  const sortedLanguageCountObj = Object.fromEntries(
    Object.entries(languageCountObj).sort(([, a], [, b]) => b - a),
  );

  let denominator = 0;
  Object.entries(sortedLanguageCountObj).forEach((languageArray, idx) => {
    if (idx > 4) return;
    denominator += languageArray[1];
  });

  const languageRatioArray = [];
  Object.entries(sortedLanguageCountObj).forEach((languageArray, idx) => {
    if (idx > 4) return;
    languageRatioArray.push({
      name: languageArray[0],
      value: +((languageArray[1] / denominator) * 100).toFixed(2),
    });
  });
  return languageRatioArray;
}

export function languageColor(languageRatioArray) {
  const langColor = githubLangColors;
  const COLORS = languageRatioArray.map((it) => {
    const langName = it.name;
    return langColor[langName];
  });
  return COLORS;
}
