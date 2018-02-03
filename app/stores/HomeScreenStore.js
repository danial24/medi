import { Store } from 'phrontend';
import ValueVerificationHelper from '../utils/ValueVerificationHelper';

class HomeScreenStore extends Store {

    constructor(){
        super();
        this.initLandingData();
    }
    handler(payload) {
        var emitChanges = true;
        if(emitChanges){
            this.actionType = payload.actionType;
            this.emitChange();
        }
    }
   
}

export default new HomeScreenStore();