const DEBUG  = true;

class DebugHelper{
  log(message){
    if(DEBUG){
      console.log(message);
    }
  }

}
export default new DebugHelper();
