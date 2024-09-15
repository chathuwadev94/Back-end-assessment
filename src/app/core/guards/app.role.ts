import { RolesBuilder } from 'nest-access-control';
import { UserController } from 'src/app/modules/user/controllers/user.controller';
import { AppRoles } from '../enums/role.enum';
import { LocationController } from 'src/app/modules/location/controllers/location.controller';
import { DeviceController } from 'src/app/modules/device/controllers/device.controller';
import { AuthController } from 'src/app/modules/auth/controller/auth.controller';

export const roles: RolesBuilder = new RolesBuilder();


roles
    .grant([AppRoles.SUPER_ADMIN])
    .createOwn([UserController.name, LocationController.name, DeviceController.name])
    .readOwn([UserController.name, LocationController.name, DeviceController.name])
    .updateOwn([UserController.name, LocationController.name, DeviceController.name])
    .deleteOwn([LocationController.name, DeviceController.name])

    .grant([AppRoles.ADMIN])
    .createOwn([UserController.name, LocationController.name, DeviceController.name])
    .readOwn([UserController.name, LocationController.name, DeviceController.name])
    .updateOwn([UserController.name, LocationController.name, DeviceController.name])
    .deleteOwn([UserController.name, LocationController.name, DeviceController.name])

    .grant([AppRoles.DEFAULT])
    .readOwn([UserController.name, AuthController.name])
    .createOwn([UserController.name])
    .updateOwn([UserController.name])
    .deleteOwn([UserController.name])

