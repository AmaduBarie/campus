// import {data,Context} from './data'
// state as s
// dispatch as d
export const reducer =(s,d)=>{
    switch (d.type) {
        case 'login':
            if(d.payload.n ==='doctor' && d.payload.p ==='doctor' ){
              s=  { ...s,code:'d'}
            }else if(d.payload.n ==='nurse' && d.payload.p ==='nurse' ){
                s=  { ...s,code:'N'}
            }
        
            return s
             
    
        default:
            break;
    }
}

export const reducersignin =(s,d)=>{
    switch (d) {
        case 'signin':
         s=d.success
            return s
              
        default:
            break;
    }
}