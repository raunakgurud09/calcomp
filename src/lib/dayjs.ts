import dayjs from "dayjs";

export const getDays = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return dayjs().duration().asDays();
};
