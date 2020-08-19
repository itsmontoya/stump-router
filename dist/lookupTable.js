export const lookup = (arr) => {
    const lookup = {};
    arr.forEach(item => lookup[item.name] = item);
    return lookup;
};
//# sourceMappingURL=lookupTable.js.map