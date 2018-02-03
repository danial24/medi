import DebugHelper from './DebugHelper';
class ValueVerificationHelper  {
  isValueMissing  (text){
    var value = text
    try{
      value = text.trim();
    }catch(err){}
    return (value==='' || value==='null' || value==='N/A' || value ==null ||
      value === undefined || value === 'undefined' || (value.prop && value.prop.constructor === Array
      && !this.listContainsData(value) ) );
  }
  isFailed(response){
    return (response.error !== undefined || (response.data !== undefined &&
      (!this.isValueMissing(response.data.error) || !this.isValueMissing(response.data.errors))));
  }
  isSuccessfull(response){
    return !this.isFailed(response);
  }
  isDefined(object){
    return object !== undefined && object !==  null;
  }
  allNotDefined(){
    for (var i = 0; i < arguments.length; i++) {
      if(this.isDefined(arguments[i])){
        return false;
      }
    }
    return true;
  }
  getSuccessMessage(response){
    if(response.success){
      return response.success;
    }
    if(response.data && response.data.success){
      return response.data.success;
    }
  }
  getErrorOrSuccessMessage(response){
    if(this.isSuccessfull(response)){
      return this.getSuccessMessage(response);
    }else{
      return this.getError(response);
    }
  }
  getBooleanValue(booleanVaue){
    return this.isValueMissing(booleanVaue)? false : booleanVaue;
  }
  oneNotDefined(){
    for (var i = 0; i < arguments.length; i++) {
      if(!this.isDefined(arguments[i])){
        return true;
      }
    }
    return false;
  }

  getError(response){
    var error = response.error !== undefined? response.error : ((response.data.error || response.data.errors));
    if(this.isDefined(error) && error.constructor === Array && this.listContainsData(error)){
      return  error[0];
    }
    return error;
  }

  listContainsData(list){
    return this.isDefined(list) && list.length>0;
  }

}


export default new ValueVerificationHelper();
