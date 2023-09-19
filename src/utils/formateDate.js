const formatDate = (fullDate) => {
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const formattedDate = new Date(fullDate).toLocaleDateString(undefined, options);

  return formattedDate;
};

export default formatDate;
