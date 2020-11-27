export function initializeAvaluations() {
  if (localStorage.getItem('avaluations') === null) {
    localStorage.setItem('avaluations', JSON.stringify([]));
  }
}

export function getAvaluations() {
  return JSON.parse(localStorage.getItem('avaluations'));
}

export function addAvaluation(avaluation, productID) {
  const avaluationsList = getAvaluations();
  if (avaluationsList.find(({ productID: id }) => id === productID)) {
    const newAvaluationsList = avaluationsList.map((product) => {
      const { productID: id } = product;
      if (id === productID) {
        const newAvaluation = {
          productID: id,
          avaluations: [...product.avaluations, avaluation],
        }
        return newAvaluation;
      } else {
        return product;
      }
    });
    localStorage.setItem('avaluations', JSON.stringify(newAvaluationsList));
  } else {
    const newEvaluation = {
      productID,
      avaluations: [avaluation],
    };
    localStorage.setItem('avaluations', JSON.stringify([...avaluationsList, newEvaluation]));
  }
}
