export function initializeAvaluations() {
  if (localStorage.getItem('avaluations') === null) {
    localStorage.setItem('avaluations', JSON.stringify([]));
  }
}

export function getAvaluations() {
  return JSON.parse(localStorage.getItem('avaluations'));
}

export function addAvaluation(avaluation, productId) {
  const avaluationsList = getAvaluations();
  if (avaluationsList.find(({ id }) => id === productId)) {
    const newAvaluationsList = avaluationsList.map((product) => {
      if (product.id === productId) {
        product.avaluations.push(avaluation);
      }
      return product;
    });
    localStorage.setItem('avaluations', JSON.stringify(newAvaluationsList));
  } else {
    const newEvaluation = {
      productId,
      avaluations: [avaluation],
    };
    localStorage.setItem('avaluations', JSON.stringify([...avaluationsList, newEvaluation]));
  }
}
