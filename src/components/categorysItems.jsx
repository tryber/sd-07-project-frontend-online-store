// import React from 'react';
// import Rating from '@material-ui/lab/Rating';
// import 'fontsource-roboto';

// class EvaluationForm extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       evaluations: [],
//       email: "",
//       rating: 0,
//       comment: "",
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.saveEvaluation = this.saveEvaluation.bind(this);
//     this.addEvaluation = this.addEvaluation.bind(this);
//     this.loadEvaluation = this.loadEvaluation.bind(this);
//   }

//   componentDidMount() {
//     this.loadEvaluation()
//   }

//   handleChange({ target }) {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   }

//   saveEvaluation() {
//     const { addEvaluation } = this.props;
//     addEvaluation(this.state)
//     this.setState({ email: "", rating: 0, comment: ""})
//   }

//   addEvaluation(evaluation) {
//     const { evaluations } = this.state;
//     const addEvaluation = evaluations.concat(evaluation);
//     this.setState({ evaluations: addEvaluation})
//     localStorage.setItem('evaluation', JSON.stringify(this.state));
//   }

//   loadEvaluation() {
//     const evaluations = JSON.parse(localStorage.getItem('evaluations'));
//     this.setState(evaluations);
//   }

//   render() {
//     const { evaluations, email, rating, comment } = this.state;
//     return (
//       <div>
//         <form>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Digite seu email"
//             onChange={this.handleChange}
//             required
//           />
//           <div>
//             <Rating
//               name="rating"
//               value={rating}
//               max={5}
//               precision={0.5}
//               onClick={this.handleChange}
//             />
//           </div>
//           <textarea
//             data-testid="product-detail-evaluation"
//             name="comment"
//             value={comment}
//             placeholder="Faça um comentário sobre o produto"
//             cols="60"
//             rows="4"
//             onChange={this.handleChange}
//           />
//           <button
//             type="submit"
//             onClick={this.saveEvaluation}
//           >Avaliar</button>
//         </form>
//         <div>
//           {evaluations
//             ? evaluations.map((evaluation) => (
//               <div key={ evaluation.email }>
//                 <input defaultValue={ evaluation.email } readOnly required />
//                 <input defaultValue={ evaluation.rating } readOnly required />
//                 <input defaultValue={ evaluation.comment } readOnly />
//               </div>
//             )) : <p>Não existem comentarios!</p>}
//         </div>
//       </div>
//     );
//   }
// }

// export default EvaluationForm;
