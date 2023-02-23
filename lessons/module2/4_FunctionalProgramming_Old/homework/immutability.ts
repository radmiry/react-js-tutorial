// // Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  const { league } = originalTeam;
  return {
    league: league,
    roster: 25,
    name: "New York Badgers",
  };
};

// // Задание 2
type SomeArray = ReadonlyArray<number | string>;

export const originalArrayToExpectedArray = (
  originalArray: SomeArray
): SomeArray => {
  const newArray = ["two", ...originalArray.slice(2), 5];
  return newArray;
};

// // Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeamDeep = (originalTeam: Team): Team => {
  const newObj = JSON.parse(JSON.stringify(originalTeam));
  newObj.captain.age = 28;
  return newObj;
};
