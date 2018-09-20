﻿import { IApplication } from './Context/IApplication';
import { IDevice } from './Context/IDevice';
import { IInternal } from './Context/IInternal';
import { ILocation } from './Context/ILocation';
import { IOperation } from './Context/IOperation';
import { IUser } from './Context/IUser';
import { ISession } from './Context/ISession';

export interface ITelemetryContext {
    /**
    * The object describing a component tracked by this object.
    */
    application: IApplication;

    /**
     * The object describing a device tracked by this object.
     */
    device: IDevice;

    /**
    * The object describing internal settings.
    */
    internal: IInternal;

    /**
     * The object describing a location tracked by this object.
     */
    location: ILocation;

    /**
     * The object describing a operation tracked by this object.
     */
    operation: IOperation;

    /**
     * The object describing a user tracked by this object.
     */
    user: IUser;

    /**
     * The object describing a session tracked by this object.
     */
    session: ISession;
}