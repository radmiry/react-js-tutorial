// // Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  let topTeam = teams[0];
  teams.forEach((value, index) =>
    value.score > topTeam.score ? (topTeam = teams[index]) : undefined
  );
  return topTeam.name;
};

// // Задание 2
export type QsObj = Record<
  string,
  string | number | boolean | string[] | number[] | boolean[]
>;

export const createQs = (qsObj: QsObj): string => {
  return (
    "?" +
    Object.keys(qsObj)
      .map((key) => {
        return `${key}=${qsObj[key]}`;
      })
      .join("&")
  );
};

// // Задание 3

export const parseQs = (qs: string): QsObj => {
  const pairs = (qs[0] === "?" ? qs.substr(1) : qs).split("&");
  const result: QsObj = {};
  pairs.forEach((value, index) => {
    const insertingValue = value.split("=");
    result[insertingValue[0]] = insertingValue[1];
  });
  return result;
};
