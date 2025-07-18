/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedDeviceFromDiscriminatorValue, serializeManagedDevice, type ManagedDevice } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ActivateDeviceEsimRequestBuilderRequestsMetadata, type ActivateDeviceEsimRequestBuilder } from './activateDeviceEsim/index.js';
// @ts-ignore
import { AssignmentFilterEvaluationStatusDetailsRequestBuilderNavigationMetadata, AssignmentFilterEvaluationStatusDetailsRequestBuilderRequestsMetadata, type AssignmentFilterEvaluationStatusDetailsRequestBuilder } from './assignmentFilterEvaluationStatusDetails/index.js';
// @ts-ignore
import { BypassActivationLockRequestBuilderRequestsMetadata, type BypassActivationLockRequestBuilder } from './bypassActivationLock/index.js';
// @ts-ignore
import { ChangeAssignmentsRequestBuilderRequestsMetadata, type ChangeAssignmentsRequestBuilder } from './changeAssignments/index.js';
// @ts-ignore
import { CleanWindowsDeviceRequestBuilderRequestsMetadata, type CleanWindowsDeviceRequestBuilder } from './cleanWindowsDevice/index.js';
// @ts-ignore
import { CreateDeviceLogCollectionRequestRequestBuilderRequestsMetadata, type CreateDeviceLogCollectionRequestRequestBuilder } from './createDeviceLogCollectionRequest/index.js';
// @ts-ignore
import { DeleteUserFromSharedAppleDeviceRequestBuilderRequestsMetadata, type DeleteUserFromSharedAppleDeviceRequestBuilder } from './deleteUserFromSharedAppleDevice/index.js';
// @ts-ignore
import { DeprovisionRequestBuilderRequestsMetadata, type DeprovisionRequestBuilder } from './deprovision/index.js';
// @ts-ignore
import { DetectedAppsRequestBuilderNavigationMetadata, DetectedAppsRequestBuilderRequestsMetadata, type DetectedAppsRequestBuilder } from './detectedApps/index.js';
// @ts-ignore
import { DeviceCategoryRequestBuilderNavigationMetadata, DeviceCategoryRequestBuilderRequestsMetadata, type DeviceCategoryRequestBuilder } from './deviceCategory/index.js';
// @ts-ignore
import { DeviceCompliancePolicyStatesRequestBuilderNavigationMetadata, DeviceCompliancePolicyStatesRequestBuilderRequestsMetadata, type DeviceCompliancePolicyStatesRequestBuilder } from './deviceCompliancePolicyStates/index.js';
// @ts-ignore
import { DeviceConfigurationStatesRequestBuilderNavigationMetadata, DeviceConfigurationStatesRequestBuilderRequestsMetadata, type DeviceConfigurationStatesRequestBuilder } from './deviceConfigurationStates/index.js';
// @ts-ignore
import { DeviceHealthScriptStatesRequestBuilderNavigationMetadata, DeviceHealthScriptStatesRequestBuilderRequestsMetadata, type DeviceHealthScriptStatesRequestBuilder } from './deviceHealthScriptStates/index.js';
// @ts-ignore
import { DisableRequestBuilderRequestsMetadata, type DisableRequestBuilder } from './disable/index.js';
// @ts-ignore
import { DisableLostModeRequestBuilderRequestsMetadata, type DisableLostModeRequestBuilder } from './disableLostMode/index.js';
// @ts-ignore
import { EnableLostModeRequestBuilderRequestsMetadata, type EnableLostModeRequestBuilder } from './enableLostMode/index.js';
// @ts-ignore
import { EnrollNowActionRequestBuilderRequestsMetadata, type EnrollNowActionRequestBuilder } from './enrollNowAction/index.js';
// @ts-ignore
import { GetFileVaultKeyRequestBuilderRequestsMetadata, type GetFileVaultKeyRequestBuilder } from './getFileVaultKey/index.js';
// @ts-ignore
import { GetNonCompliantSettingsRequestBuilderRequestsMetadata, type GetNonCompliantSettingsRequestBuilder } from './getNonCompliantSettings/index.js';
// @ts-ignore
import { InitiateDeviceAttestationRequestBuilderRequestsMetadata, type InitiateDeviceAttestationRequestBuilder } from './initiateDeviceAttestation/index.js';
// @ts-ignore
import { InitiateMobileDeviceManagementKeyRecoveryRequestBuilderRequestsMetadata, type InitiateMobileDeviceManagementKeyRecoveryRequestBuilder } from './initiateMobileDeviceManagementKeyRecovery/index.js';
// @ts-ignore
import { InitiateOnDemandProactiveRemediationRequestBuilderRequestsMetadata, type InitiateOnDemandProactiveRemediationRequestBuilder } from './initiateOnDemandProactiveRemediation/index.js';
// @ts-ignore
import { LocateDeviceRequestBuilderRequestsMetadata, type LocateDeviceRequestBuilder } from './locateDevice/index.js';
// @ts-ignore
import { LogCollectionRequestsRequestBuilderNavigationMetadata, LogCollectionRequestsRequestBuilderRequestsMetadata, type LogCollectionRequestsRequestBuilder } from './logCollectionRequests/index.js';
// @ts-ignore
import { LogoutSharedAppleDeviceActiveUserRequestBuilderRequestsMetadata, type LogoutSharedAppleDeviceActiveUserRequestBuilder } from './logoutSharedAppleDeviceActiveUser/index.js';
// @ts-ignore
import { ManagedDeviceMobileAppConfigurationStatesRequestBuilderNavigationMetadata, ManagedDeviceMobileAppConfigurationStatesRequestBuilderRequestsMetadata, type ManagedDeviceMobileAppConfigurationStatesRequestBuilder } from './managedDeviceMobileAppConfigurationStates/index.js';
// @ts-ignore
import { OverrideComplianceStateRequestBuilderRequestsMetadata, type OverrideComplianceStateRequestBuilder } from './overrideComplianceState/index.js';
// @ts-ignore
import { PauseConfigurationRefreshRequestBuilderRequestsMetadata, type PauseConfigurationRefreshRequestBuilder } from './pauseConfigurationRefresh/index.js';
// @ts-ignore
import { PlayLostModeSoundRequestBuilderRequestsMetadata, type PlayLostModeSoundRequestBuilder } from './playLostModeSound/index.js';
// @ts-ignore
import { RebootNowRequestBuilderRequestsMetadata, type RebootNowRequestBuilder } from './rebootNow/index.js';
// @ts-ignore
import { RecoverPasscodeRequestBuilderRequestsMetadata, type RecoverPasscodeRequestBuilder } from './recoverPasscode/index.js';
// @ts-ignore
import { ReenableRequestBuilderRequestsMetadata, type ReenableRequestBuilder } from './reenable/index.js';
// @ts-ignore
import { RemoteLockRequestBuilderRequestsMetadata, type RemoteLockRequestBuilder } from './remoteLock/index.js';
// @ts-ignore
import { RemoveDeviceFirmwareConfigurationInterfaceManagementRequestBuilderRequestsMetadata, type RemoveDeviceFirmwareConfigurationInterfaceManagementRequestBuilder } from './removeDeviceFirmwareConfigurationInterfaceManagement/index.js';
// @ts-ignore
import { RequestRemoteAssistanceRequestBuilderRequestsMetadata, type RequestRemoteAssistanceRequestBuilder } from './requestRemoteAssistance/index.js';
// @ts-ignore
import { ResetPasscodeRequestBuilderRequestsMetadata, type ResetPasscodeRequestBuilder } from './resetPasscode/index.js';
// @ts-ignore
import { RetireRequestBuilderRequestsMetadata, type RetireRequestBuilder } from './retire/index.js';
// @ts-ignore
import { RetrieveMacOSManagedDeviceLocalAdminAccountDetailRequestBuilderRequestsMetadata, type RetrieveMacOSManagedDeviceLocalAdminAccountDetailRequestBuilder } from './retrieveMacOSManagedDeviceLocalAdminAccountDetail/index.js';
// @ts-ignore
import { RevokeAppleVppLicensesRequestBuilderRequestsMetadata, type RevokeAppleVppLicensesRequestBuilder } from './revokeAppleVppLicenses/index.js';
// @ts-ignore
import { RotateBitLockerKeysRequestBuilderRequestsMetadata, type RotateBitLockerKeysRequestBuilder } from './rotateBitLockerKeys/index.js';
// @ts-ignore
import { RotateFileVaultKeyRequestBuilderRequestsMetadata, type RotateFileVaultKeyRequestBuilder } from './rotateFileVaultKey/index.js';
// @ts-ignore
import { RotateLocalAdminPasswordRequestBuilderRequestsMetadata, type RotateLocalAdminPasswordRequestBuilder } from './rotateLocalAdminPassword/index.js';
// @ts-ignore
import { SecurityBaselineStatesRequestBuilderNavigationMetadata, SecurityBaselineStatesRequestBuilderRequestsMetadata, type SecurityBaselineStatesRequestBuilder } from './securityBaselineStates/index.js';
// @ts-ignore
import { SendCustomNotificationToCompanyPortalRequestBuilderRequestsMetadata, type SendCustomNotificationToCompanyPortalRequestBuilder } from './sendCustomNotificationToCompanyPortal/index.js';
// @ts-ignore
import { SetDeviceNameRequestBuilderRequestsMetadata, type SetDeviceNameRequestBuilder } from './setDeviceName/index.js';
// @ts-ignore
import { ShutDownRequestBuilderRequestsMetadata, type ShutDownRequestBuilder } from './shutDown/index.js';
// @ts-ignore
import { SyncDeviceRequestBuilderRequestsMetadata, type SyncDeviceRequestBuilder } from './syncDevice/index.js';
// @ts-ignore
import { TriggerConfigurationManagerActionRequestBuilderRequestsMetadata, type TriggerConfigurationManagerActionRequestBuilder } from './triggerConfigurationManagerAction/index.js';
// @ts-ignore
import { type UpdateWindowsDeviceAccountRequestBuilder, UpdateWindowsDeviceAccountRequestBuilderRequestsMetadata } from './updateWindowsDeviceAccount/index.js';
// @ts-ignore
import { type UsersRequestBuilder, UsersRequestBuilderRequestsMetadata } from './users/index.js';
// @ts-ignore
import { type WindowsDefenderScanRequestBuilder, WindowsDefenderScanRequestBuilderRequestsMetadata } from './windowsDefenderScan/index.js';
// @ts-ignore
import { type WindowsDefenderUpdateSignaturesRequestBuilder, WindowsDefenderUpdateSignaturesRequestBuilderRequestsMetadata } from './windowsDefenderUpdateSignatures/index.js';
// @ts-ignore
import { type WindowsProtectionStateRequestBuilder, WindowsProtectionStateRequestBuilderNavigationMetadata, WindowsProtectionStateRequestBuilderRequestsMetadata } from './windowsProtectionState/index.js';
// @ts-ignore
import { type WipeRequestBuilder, WipeRequestBuilderRequestsMetadata } from './wipe/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedDevices property of the microsoft.graph.deviceManagement entity.
 */
export interface ManagedDeviceItemRequestBuilder extends BaseRequestBuilder<ManagedDeviceItemRequestBuilder> {
    /**
     * Provides operations to call the activateDeviceEsim method.
     */
    get activateDeviceEsim(): ActivateDeviceEsimRequestBuilder;
    /**
     * Provides operations to manage the assignmentFilterEvaluationStatusDetails property of the microsoft.graph.managedDevice entity.
     */
    get assignmentFilterEvaluationStatusDetails(): AssignmentFilterEvaluationStatusDetailsRequestBuilder;
    /**
     * Provides operations to call the bypassActivationLock method.
     */
    get bypassActivationLock(): BypassActivationLockRequestBuilder;
    /**
     * Provides operations to call the changeAssignments method.
     */
    get changeAssignments(): ChangeAssignmentsRequestBuilder;
    /**
     * Provides operations to call the cleanWindowsDevice method.
     */
    get cleanWindowsDevice(): CleanWindowsDeviceRequestBuilder;
    /**
     * Provides operations to call the createDeviceLogCollectionRequest method.
     */
    get createDeviceLogCollectionRequest(): CreateDeviceLogCollectionRequestRequestBuilder;
    /**
     * Provides operations to call the deleteUserFromSharedAppleDevice method.
     */
    get deleteUserFromSharedAppleDevice(): DeleteUserFromSharedAppleDeviceRequestBuilder;
    /**
     * Provides operations to call the deprovision method.
     */
    get deprovision(): DeprovisionRequestBuilder;
    /**
     * Provides operations to manage the detectedApps property of the microsoft.graph.managedDevice entity.
     */
    get detectedApps(): DetectedAppsRequestBuilder;
    /**
     * Provides operations to manage the deviceCategory property of the microsoft.graph.managedDevice entity.
     */
    get deviceCategory(): DeviceCategoryRequestBuilder;
    /**
     * Provides operations to manage the deviceCompliancePolicyStates property of the microsoft.graph.managedDevice entity.
     */
    get deviceCompliancePolicyStates(): DeviceCompliancePolicyStatesRequestBuilder;
    /**
     * Provides operations to manage the deviceConfigurationStates property of the microsoft.graph.managedDevice entity.
     */
    get deviceConfigurationStates(): DeviceConfigurationStatesRequestBuilder;
    /**
     * Provides operations to manage the deviceHealthScriptStates property of the microsoft.graph.managedDevice entity.
     */
    get deviceHealthScriptStates(): DeviceHealthScriptStatesRequestBuilder;
    /**
     * Provides operations to call the disable method.
     */
    get disable(): DisableRequestBuilder;
    /**
     * Provides operations to call the disableLostMode method.
     */
    get disableLostMode(): DisableLostModeRequestBuilder;
    /**
     * Provides operations to call the enableLostMode method.
     */
    get enableLostMode(): EnableLostModeRequestBuilder;
    /**
     * Provides operations to call the enrollNowAction method.
     */
    get enrollNowAction(): EnrollNowActionRequestBuilder;
    /**
     * Provides operations to call the getFileVaultKey method.
     */
    get getFileVaultKey(): GetFileVaultKeyRequestBuilder;
    /**
     * Provides operations to call the getNonCompliantSettings method.
     */
    get getNonCompliantSettings(): GetNonCompliantSettingsRequestBuilder;
    /**
     * Provides operations to call the initiateDeviceAttestation method.
     */
    get initiateDeviceAttestation(): InitiateDeviceAttestationRequestBuilder;
    /**
     * Provides operations to call the initiateMobileDeviceManagementKeyRecovery method.
     */
    get initiateMobileDeviceManagementKeyRecovery(): InitiateMobileDeviceManagementKeyRecoveryRequestBuilder;
    /**
     * Provides operations to call the initiateOnDemandProactiveRemediation method.
     */
    get initiateOnDemandProactiveRemediation(): InitiateOnDemandProactiveRemediationRequestBuilder;
    /**
     * Provides operations to call the locateDevice method.
     */
    get locateDevice(): LocateDeviceRequestBuilder;
    /**
     * Provides operations to manage the logCollectionRequests property of the microsoft.graph.managedDevice entity.
     */
    get logCollectionRequests(): LogCollectionRequestsRequestBuilder;
    /**
     * Provides operations to call the logoutSharedAppleDeviceActiveUser method.
     */
    get logoutSharedAppleDeviceActiveUser(): LogoutSharedAppleDeviceActiveUserRequestBuilder;
    /**
     * Provides operations to manage the managedDeviceMobileAppConfigurationStates property of the microsoft.graph.managedDevice entity.
     */
    get managedDeviceMobileAppConfigurationStates(): ManagedDeviceMobileAppConfigurationStatesRequestBuilder;
    /**
     * Provides operations to call the overrideComplianceState method.
     */
    get overrideComplianceState(): OverrideComplianceStateRequestBuilder;
    /**
     * Provides operations to call the pauseConfigurationRefresh method.
     */
    get pauseConfigurationRefresh(): PauseConfigurationRefreshRequestBuilder;
    /**
     * Provides operations to call the playLostModeSound method.
     */
    get playLostModeSound(): PlayLostModeSoundRequestBuilder;
    /**
     * Provides operations to call the rebootNow method.
     */
    get rebootNow(): RebootNowRequestBuilder;
    /**
     * Provides operations to call the recoverPasscode method.
     */
    get recoverPasscode(): RecoverPasscodeRequestBuilder;
    /**
     * Provides operations to call the reenable method.
     */
    get reenable(): ReenableRequestBuilder;
    /**
     * Provides operations to call the remoteLock method.
     */
    get remoteLock(): RemoteLockRequestBuilder;
    /**
     * Provides operations to call the removeDeviceFirmwareConfigurationInterfaceManagement method.
     */
    get removeDeviceFirmwareConfigurationInterfaceManagement(): RemoveDeviceFirmwareConfigurationInterfaceManagementRequestBuilder;
    /**
     * Provides operations to call the requestRemoteAssistance method.
     */
    get requestRemoteAssistance(): RequestRemoteAssistanceRequestBuilder;
    /**
     * Provides operations to call the resetPasscode method.
     */
    get resetPasscode(): ResetPasscodeRequestBuilder;
    /**
     * Provides operations to call the retire method.
     */
    get retire(): RetireRequestBuilder;
    /**
     * Provides operations to call the retrieveMacOSManagedDeviceLocalAdminAccountDetail method.
     */
    get retrieveMacOSManagedDeviceLocalAdminAccountDetail(): RetrieveMacOSManagedDeviceLocalAdminAccountDetailRequestBuilder;
    /**
     * Provides operations to call the revokeAppleVppLicenses method.
     */
    get revokeAppleVppLicenses(): RevokeAppleVppLicensesRequestBuilder;
    /**
     * Provides operations to call the rotateBitLockerKeys method.
     */
    get rotateBitLockerKeys(): RotateBitLockerKeysRequestBuilder;
    /**
     * Provides operations to call the rotateFileVaultKey method.
     */
    get rotateFileVaultKey(): RotateFileVaultKeyRequestBuilder;
    /**
     * Provides operations to call the rotateLocalAdminPassword method.
     */
    get rotateLocalAdminPassword(): RotateLocalAdminPasswordRequestBuilder;
    /**
     * Provides operations to manage the securityBaselineStates property of the microsoft.graph.managedDevice entity.
     */
    get securityBaselineStates(): SecurityBaselineStatesRequestBuilder;
    /**
     * Provides operations to call the sendCustomNotificationToCompanyPortal method.
     */
    get sendCustomNotificationToCompanyPortal(): SendCustomNotificationToCompanyPortalRequestBuilder;
    /**
     * Provides operations to call the setDeviceName method.
     */
    get setDeviceName(): SetDeviceNameRequestBuilder;
    /**
     * Provides operations to call the shutDown method.
     */
    get shutDown(): ShutDownRequestBuilder;
    /**
     * Provides operations to call the syncDevice method.
     */
    get syncDevice(): SyncDeviceRequestBuilder;
    /**
     * Provides operations to call the triggerConfigurationManagerAction method.
     */
    get triggerConfigurationManagerAction(): TriggerConfigurationManagerActionRequestBuilder;
    /**
     * Provides operations to call the updateWindowsDeviceAccount method.
     */
    get updateWindowsDeviceAccount(): UpdateWindowsDeviceAccountRequestBuilder;
    /**
     * Provides operations to manage the users property of the microsoft.graph.managedDevice entity.
     */
    get users(): UsersRequestBuilder;
    /**
     * Provides operations to call the windowsDefenderScan method.
     */
    get windowsDefenderScan(): WindowsDefenderScanRequestBuilder;
    /**
     * Provides operations to call the windowsDefenderUpdateSignatures method.
     */
    get windowsDefenderUpdateSignatures(): WindowsDefenderUpdateSignaturesRequestBuilder;
    /**
     * Provides operations to manage the windowsProtectionState property of the microsoft.graph.managedDevice entity.
     */
    get windowsProtectionState(): WindowsProtectionStateRequestBuilder;
    /**
     * Provides operations to call the wipe method.
     */
    get wipe(): WipeRequestBuilder;
    /**
     * Delete navigation property managedDevices for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The list of managed devices.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedDevice>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ManagedDeviceItemRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedDevice | undefined>;
    /**
     * Update the navigation property managedDevices in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedDevice>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ManagedDevice, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedDevice | undefined>;
    /**
     * Delete navigation property managedDevices for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The list of managed devices.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedDeviceItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property managedDevices in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ManagedDevice, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of managed devices.
 */
export interface ManagedDeviceItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const ManagedDeviceItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/managedDevices/{managedDevice%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ManagedDeviceItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ManagedDeviceItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagedDeviceItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    activateDeviceEsim: {
        requestsMetadata: ActivateDeviceEsimRequestBuilderRequestsMetadata,
    },
    assignmentFilterEvaluationStatusDetails: {
        requestsMetadata: AssignmentFilterEvaluationStatusDetailsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentFilterEvaluationStatusDetailsRequestBuilderNavigationMetadata,
    },
    bypassActivationLock: {
        requestsMetadata: BypassActivationLockRequestBuilderRequestsMetadata,
    },
    changeAssignments: {
        requestsMetadata: ChangeAssignmentsRequestBuilderRequestsMetadata,
    },
    cleanWindowsDevice: {
        requestsMetadata: CleanWindowsDeviceRequestBuilderRequestsMetadata,
    },
    createDeviceLogCollectionRequest: {
        requestsMetadata: CreateDeviceLogCollectionRequestRequestBuilderRequestsMetadata,
    },
    deleteUserFromSharedAppleDevice: {
        requestsMetadata: DeleteUserFromSharedAppleDeviceRequestBuilderRequestsMetadata,
    },
    deprovision: {
        requestsMetadata: DeprovisionRequestBuilderRequestsMetadata,
    },
    detectedApps: {
        requestsMetadata: DetectedAppsRequestBuilderRequestsMetadata,
        navigationMetadata: DetectedAppsRequestBuilderNavigationMetadata,
    },
    deviceCategory: {
        requestsMetadata: DeviceCategoryRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceCategoryRequestBuilderNavigationMetadata,
    },
    deviceCompliancePolicyStates: {
        requestsMetadata: DeviceCompliancePolicyStatesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceCompliancePolicyStatesRequestBuilderNavigationMetadata,
    },
    deviceConfigurationStates: {
        requestsMetadata: DeviceConfigurationStatesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceConfigurationStatesRequestBuilderNavigationMetadata,
    },
    deviceHealthScriptStates: {
        requestsMetadata: DeviceHealthScriptStatesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceHealthScriptStatesRequestBuilderNavigationMetadata,
    },
    disable: {
        requestsMetadata: DisableRequestBuilderRequestsMetadata,
    },
    disableLostMode: {
        requestsMetadata: DisableLostModeRequestBuilderRequestsMetadata,
    },
    enableLostMode: {
        requestsMetadata: EnableLostModeRequestBuilderRequestsMetadata,
    },
    enrollNowAction: {
        requestsMetadata: EnrollNowActionRequestBuilderRequestsMetadata,
    },
    getFileVaultKey: {
        requestsMetadata: GetFileVaultKeyRequestBuilderRequestsMetadata,
    },
    getNonCompliantSettings: {
        requestsMetadata: GetNonCompliantSettingsRequestBuilderRequestsMetadata,
    },
    initiateDeviceAttestation: {
        requestsMetadata: InitiateDeviceAttestationRequestBuilderRequestsMetadata,
    },
    initiateMobileDeviceManagementKeyRecovery: {
        requestsMetadata: InitiateMobileDeviceManagementKeyRecoveryRequestBuilderRequestsMetadata,
    },
    initiateOnDemandProactiveRemediation: {
        requestsMetadata: InitiateOnDemandProactiveRemediationRequestBuilderRequestsMetadata,
    },
    locateDevice: {
        requestsMetadata: LocateDeviceRequestBuilderRequestsMetadata,
    },
    logCollectionRequests: {
        requestsMetadata: LogCollectionRequestsRequestBuilderRequestsMetadata,
        navigationMetadata: LogCollectionRequestsRequestBuilderNavigationMetadata,
    },
    logoutSharedAppleDeviceActiveUser: {
        requestsMetadata: LogoutSharedAppleDeviceActiveUserRequestBuilderRequestsMetadata,
    },
    managedDeviceMobileAppConfigurationStates: {
        requestsMetadata: ManagedDeviceMobileAppConfigurationStatesRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedDeviceMobileAppConfigurationStatesRequestBuilderNavigationMetadata,
    },
    overrideComplianceState: {
        requestsMetadata: OverrideComplianceStateRequestBuilderRequestsMetadata,
    },
    pauseConfigurationRefresh: {
        requestsMetadata: PauseConfigurationRefreshRequestBuilderRequestsMetadata,
    },
    playLostModeSound: {
        requestsMetadata: PlayLostModeSoundRequestBuilderRequestsMetadata,
    },
    rebootNow: {
        requestsMetadata: RebootNowRequestBuilderRequestsMetadata,
    },
    recoverPasscode: {
        requestsMetadata: RecoverPasscodeRequestBuilderRequestsMetadata,
    },
    reenable: {
        requestsMetadata: ReenableRequestBuilderRequestsMetadata,
    },
    remoteLock: {
        requestsMetadata: RemoteLockRequestBuilderRequestsMetadata,
    },
    removeDeviceFirmwareConfigurationInterfaceManagement: {
        requestsMetadata: RemoveDeviceFirmwareConfigurationInterfaceManagementRequestBuilderRequestsMetadata,
    },
    requestRemoteAssistance: {
        requestsMetadata: RequestRemoteAssistanceRequestBuilderRequestsMetadata,
    },
    resetPasscode: {
        requestsMetadata: ResetPasscodeRequestBuilderRequestsMetadata,
    },
    retire: {
        requestsMetadata: RetireRequestBuilderRequestsMetadata,
    },
    retrieveMacOSManagedDeviceLocalAdminAccountDetail: {
        requestsMetadata: RetrieveMacOSManagedDeviceLocalAdminAccountDetailRequestBuilderRequestsMetadata,
    },
    revokeAppleVppLicenses: {
        requestsMetadata: RevokeAppleVppLicensesRequestBuilderRequestsMetadata,
    },
    rotateBitLockerKeys: {
        requestsMetadata: RotateBitLockerKeysRequestBuilderRequestsMetadata,
    },
    rotateFileVaultKey: {
        requestsMetadata: RotateFileVaultKeyRequestBuilderRequestsMetadata,
    },
    rotateLocalAdminPassword: {
        requestsMetadata: RotateLocalAdminPasswordRequestBuilderRequestsMetadata,
    },
    securityBaselineStates: {
        requestsMetadata: SecurityBaselineStatesRequestBuilderRequestsMetadata,
        navigationMetadata: SecurityBaselineStatesRequestBuilderNavigationMetadata,
    },
    sendCustomNotificationToCompanyPortal: {
        requestsMetadata: SendCustomNotificationToCompanyPortalRequestBuilderRequestsMetadata,
    },
    setDeviceName: {
        requestsMetadata: SetDeviceNameRequestBuilderRequestsMetadata,
    },
    shutDown: {
        requestsMetadata: ShutDownRequestBuilderRequestsMetadata,
    },
    syncDevice: {
        requestsMetadata: SyncDeviceRequestBuilderRequestsMetadata,
    },
    triggerConfigurationManagerAction: {
        requestsMetadata: TriggerConfigurationManagerActionRequestBuilderRequestsMetadata,
    },
    updateWindowsDeviceAccount: {
        requestsMetadata: UpdateWindowsDeviceAccountRequestBuilderRequestsMetadata,
    },
    users: {
        requestsMetadata: UsersRequestBuilderRequestsMetadata,
    },
    windowsDefenderScan: {
        requestsMetadata: WindowsDefenderScanRequestBuilderRequestsMetadata,
    },
    windowsDefenderUpdateSignatures: {
        requestsMetadata: WindowsDefenderUpdateSignaturesRequestBuilderRequestsMetadata,
    },
    windowsProtectionState: {
        requestsMetadata: WindowsProtectionStateRequestBuilderRequestsMetadata,
        navigationMetadata: WindowsProtectionStateRequestBuilderNavigationMetadata,
    },
    wipe: {
        requestsMetadata: WipeRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedDeviceItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ManagedDeviceItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ManagedDeviceItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedDeviceFromDiscriminatorValue,
        queryParametersMapper: ManagedDeviceItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ManagedDeviceItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedDeviceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedDevice,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
