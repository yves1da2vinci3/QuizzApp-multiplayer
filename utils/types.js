const Types = [
  { id: 1, name: "Programming" },
  { id: 2, name: "Mathematics" },
  { id: 3, name: "Sports" },
  { id: 4, name: "Anime" },
  { id: 5, name: "History" },
  { id: 6, name: "Fashion" },
];

const typesMap = Types.reduce((map, type) => {
  map.set(type.id, type.name);
  return map;
}, new Map());

export default typesMap;
