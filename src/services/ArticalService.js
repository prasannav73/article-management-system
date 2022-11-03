// import axios from 'axios';

// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

// class ArticalService {

//     getEmployees(){
//         return axios.get(EMPLOYEE_API_BASE_URL);
//     }

//     addArtical(employee){
//         return axios.post(EMPLOYEE_API_BASE_URL, employee);
//     }

//     getArticalById(articalId){
//         return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
//     }

//     editArtical(employee, articalId){
//         return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
//     }

//     deleteArtical(articalId){
//         return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
//     }
// }

// const mapStateToProps = (state) => ({
//     articals: state.articals
//   });

//   export default connect(mapStateToProps, {
//     getArticals,
//     addArtical,
//     editArtical,
//     deleteArtical
//   })(ArticalService);
