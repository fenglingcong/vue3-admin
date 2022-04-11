export default function filterList(cacheList, name) {
  let resList = [];
  const searchQuery = () => {
    if (!name) {
      resList = cacheList;
    }
    resList = cacheList.filter((v) => v.name.includes(name));
  };

  /* s */
  return {
    resList,
    searchQuery,
    // resetQuery,
  };
}
