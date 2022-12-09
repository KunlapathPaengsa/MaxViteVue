import http from "./Http-comman";  
class EemployeeService {  
     
    getAll() {  
        return http.get("/Student/get_by_proc");  
      }  
        
}  
export default new EemployeeService();  