export const normalizeRows = (rows) => {
  const ungrouped = { cells: [] };

  rows = rows
    .map((item) => {
      if (Object.prototype.hasOwnProperty.call(item, "cells")) {
        return item;
      }

      if (Array.isArray(item)) {
        return { cells: item };
      }

      ungrouped.cells.push(item);

      return null;
    })
    .filter((row) => row !== null);

  return ungrouped.cells.length ? [ungrouped, ...rows] : rows;
};
