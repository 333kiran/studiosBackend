import express from 'express';
import { registerUser,loginUser,getAllUsers,getUserById,updateUserById,deleteUserById} from '../controllers/userRegister-controller.js';
import { userSubcription,getAllSubscriptions,getUserSubscriptionById,updateSubscription,deleteById } from '../controllers/userSubscription-controller.js';
import { addEntityDetails,getAllEntities,getEntityById,updateEntityDetails,deleteEntityById } from '../controllers/entityDetails-controller.js';
import { addKycDetails,getAllKyc,getKycById,updateKycById,deleteKycById } from '../controllers/kyc-controller.js';
import { addBankDetails,getAllBankDetails,getBankDetailsById,updateBankDetails,deleteBankDetailsById } from '../controllers/bankDetails-controller.js';


const userRouter = express.Router();

// register-routes
userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/users',getAllUsers);
userRouter.get('/getUser/:id',getUserById);
userRouter.put('/updateUser/:id',updateUserById);
userRouter.delete('/deleteUser/:id',deleteUserById);

// subscription-routes
userRouter.post('/subscription',userSubcription);
userRouter.get('/allSubscription',getAllSubscriptions);
userRouter.get('/getSubscription/:id',getUserSubscriptionById);
userRouter.put('/updateSubscription/:id',updateSubscription);
userRouter.delete('/deleteSubscribedUser/:id',deleteById)

//entityDetails-routes
userRouter.post('/entityDetails',addEntityDetails);
userRouter.get('/getEntity',getAllEntities);
userRouter.get('/entityDetails/:id',getEntityById);
userRouter.put('/updateEntityDetails/:id',updateEntityDetails);
userRouter.delete('/deleteEntity/:id',deleteEntityById);

//Kyc-routes
userRouter.post('/kyc', addKycDetails);
userRouter.get('/getAllKyc',getAllKyc);
userRouter.get('/getKyc/:id',getKycById);
userRouter.put('/updateKyc/:id',updateKycById);
userRouter.delete('/deleteKyc/:id',deleteKycById);

//BankDetails-routes
userRouter.post('/bankDetails',addBankDetails);
userRouter.get('/getBankDetails',getAllBankDetails);
userRouter.get('/bankDetails/:id',getBankDetailsById);
userRouter.put('/updateBankDetails/:id',updateBankDetails);
userRouter.delete('/deleteBankDetails/:id',deleteBankDetailsById);

export default userRouter;
