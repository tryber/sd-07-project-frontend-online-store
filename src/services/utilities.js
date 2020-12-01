const getItemStorage = (key) => localStorage.getItem(key);

const getObjStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setObjStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const setObjStorageAndSetState = (key, obj, setState) => {
  if (getItemStorage(key)) {
    const objsFromLocal = getObjStorage(key);
    const newObjs = [...objsFromLocal, obj];
    setObjStorage(key, newObjs);
    setState({ [key]: newObjs });
  } else {
    setObjStorage(key, [obj]);
    setState({ [key]: [obj] });
  }
};

export const addObjInLocalStorage = (key, obj) => {
  if (getItemStorage(key)) {
    const objsFromLocal = getObjStorage(key);
    const newObjs = [...objsFromLocal, obj];
    setObjStorage(key, newObjs);
  } else {
    setObjStorage(key, [obj]);
  }
};

export const getFromLocalAndSet = (key, setState) => {
  if (getItemStorage(key)) {
    const obj = getObjStorage(key);
    setState({ [key]: obj });
  } else {
    setState({ [key]: [] });
  }
};
