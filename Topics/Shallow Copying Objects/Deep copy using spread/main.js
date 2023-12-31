const man = { name: 'John', mother: { name: 'Bella'} };
const shallowCopy = {...man, mother: {...man.mother}};
