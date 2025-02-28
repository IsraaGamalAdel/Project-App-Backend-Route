import  Router from "express";
import * as userService from './service/admin.service.js';
import { endPoint } from './admin.endpoint.js';
import { authentication, authorization } from "../../middleware/auth.middleware.js";
import { validation } from "../../middleware/validation.middleware.js";
import * as validators from './admin.validation.js';

const router = Router();

// Block User
router.patch('/profile/block-unblock-user' , validation(validators.blockUserValidation) ,
    authentication() , authorization(endPoint.admin) , 
    userService.bannedUser
);

router.patch('/profile/block-user' , validation(validators.blockUserValidation) ,
    authentication() , authorization(endPoint.admin) , 
    userService.blockUser
);

router.patch('/profile/unBlock-user' , validation(validators.blockUserValidation) ,
    authentication() , authorization(endPoint.profile) ,
    userService.unblockUser
);

router.patch('/banCompany/:companyId', 
    authentication(), 
    authorization(endPoint.admin), 
    validation(validators.banOrUnbanCompanyValidation),
    userService.banORUnbannedCompany
);


router.patch('/approveCompany/:companyId', 
    authentication(), authorization(endPoint.admin),
    validation(validators.approvedAdminCompanyValidation),
    userService.approveCompany
);



export default router;