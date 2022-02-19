export const convertKST = (date) => {
  const options = { hour12: false };
  const utcToKst = new Date(date).toLocaleTimeString("ko", options);

  const [hour, min] = utcToKst.split(" ").map((target) => {
    const parsedNumber = parseInt(target, 10);
    return parsedNumber < 10 ? `0${parsedNumber}` : parsedNumber;
  });

  return `${hour}:${min}`;
};
