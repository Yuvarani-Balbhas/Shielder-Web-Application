import {put, takeLatest} from 'redux-saga/effects';
import * as Constants from '../../constants';
import * as Actions from './action';
import {postdata,postSecureObject} from '../../apil-call';
import {Base_URL} from '../../urls';

function* verifyCredentialCustomer(action) {
  console.log("action-----------"+JSON.stringify(action));
  console.log(JSON.stringify('action'+action.pincode));
  console.log("testing"+Base_URL+"--" + action.url+"---"+
  JSON.stringify({
   
    "email":action.email,
    "password":action.password,


    }));
  try{
    const responseData = yield postSecureObject(Base_URL + Constants.API_URLS. CUSTOMER_LOGIN_VERIFY_URL,
      {
        "email":action.email,
        "password":action.password,
        });
        console.log("responseData-----------"+JSON.stringify(responseData));
        if(responseData.data.success !== "undefined" && responseData.data.success === true) {
          yield put(Actions.verifyCredentialCustomerResponse(responseData.data));
      }
        else if( responseData.data.success !== "undefined" && responseData.data.success === false && responseData.data.message === "E104" ){
          const errorMessage = {'success' : false, 'message' : 'Email Seems to be new, Please Check!'};
          yield put(Actions.verifyCredentialCustomerResponse(errorMessage));
        }
        else if( responseData.data.success !== "undefined" && responseData.data.success === false && responseData.data.message === "E108" ){
          const errorMessage = {'success' : false, 'message' : 'Invalid Password. Please enter the correct password.'};
          yield put(Actions.verifyCredentialCustomerResponse(errorMessage));
        }
  } catch (e) {
    const errorMessage = {'success' : false, 'message' : 'Unable to Login. Please check your internet connection and try again.'};
    yield put(Actions.verifyCredentialCustomerResponse(errorMessage));
  }
}

{/*function* reqClearAccessTokensCustomer(action) {
  try{
      const responseData = yield postdata(Base_URL + Constants.API_URLS.REQ_CLEAR_TOKENS_CUSTOMER_URL,
          {
              "email": window.sessionStorage.getItem(Constants.ACCESS_EMAIL)
          });
      console.log("responseData"+JSON.stringify(responseData));
      if(  responseData.data.success !== "undefined" && responseData.data.success === true) {
          yield put(Actions.recClearAccessTokensCustomer(responseData.data));

      }
       else if( responseData.data.success !== "undefined" && responseData.data.success === false && responseData.data.message === "E213" ){
        const errorMessage = {'success' : false, 'message' : 'Customer is not logged in!'};
        yield put(Actions.recClearAccessTokensCustomer(errorMessage));
      }
      console.log("responseData"+JSON.stringify(responseData));


  } catch (e) {
      const errorMessage = {'success' : false, 'message' : 'Cannot Clear Access Tokens.'};
      yield put(Actions.recClearAccessTokensCustomer(errorMessage));
  }
}*/}


export default function* loginSaga() {
    yield takeLatest(Constants.VERIFY_CUSTOMER_LOGIN_CREDENTIAL, verifyCredentialCustomer);
    //yield takeLatest(Constants.REQ_CLEAR_ACCESS_TOKENS_CUSTOMER, reqClearAccessTokensCustomer);

}

