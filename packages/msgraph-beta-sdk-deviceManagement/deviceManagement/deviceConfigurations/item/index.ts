/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceConfigurationFromDiscriminatorValue, serializeDeviceConfiguration, type DeviceConfiguration } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AssignRequestBuilderRequestsMetadata, type AssignRequestBuilder } from './assign/index.js';
// @ts-ignore
import { AssignedAccessMultiModeProfilesRequestBuilderRequestsMetadata, type AssignedAccessMultiModeProfilesRequestBuilder } from './assignedAccessMultiModeProfiles/index.js';
// @ts-ignore
import { AssignmentsRequestBuilderNavigationMetadata, AssignmentsRequestBuilderRequestsMetadata, type AssignmentsRequestBuilder } from './assignments/index.js';
// @ts-ignore
import { DeviceSettingStateSummariesRequestBuilderNavigationMetadata, DeviceSettingStateSummariesRequestBuilderRequestsMetadata, type DeviceSettingStateSummariesRequestBuilder } from './deviceSettingStateSummaries/index.js';
// @ts-ignore
import { DeviceStatusesRequestBuilderNavigationMetadata, DeviceStatusesRequestBuilderRequestsMetadata, type DeviceStatusesRequestBuilder } from './deviceStatuses/index.js';
// @ts-ignore
import { DeviceStatusOverviewRequestBuilderRequestsMetadata, type DeviceStatusOverviewRequestBuilder } from './deviceStatusOverview/index.js';
// @ts-ignore
import { GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderRequestsMetadata, type GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder } from './getOmaSettingPlainTextValueWithSecretReferenceValueId/index.js';
// @ts-ignore
import { GroupAssignmentsRequestBuilderNavigationMetadata, GroupAssignmentsRequestBuilderRequestsMetadata, type GroupAssignmentsRequestBuilder } from './groupAssignments/index.js';
// @ts-ignore
import { type UserStatusesRequestBuilder, UserStatusesRequestBuilderNavigationMetadata, UserStatusesRequestBuilderRequestsMetadata } from './userStatuses/index.js';
// @ts-ignore
import { type UserStatusOverviewRequestBuilder, UserStatusOverviewRequestBuilderRequestsMetadata } from './userStatusOverview/index.js';
// @ts-ignore
import { type WindowsPrivacyAccessControlsRequestBuilder, WindowsPrivacyAccessControlsRequestBuilderRequestsMetadata } from './windowsPrivacyAccessControls/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceConfigurations property of the microsoft.graph.deviceManagement entity.
 */
export interface DeviceConfigurationItemRequestBuilder extends BaseRequestBuilder<DeviceConfigurationItemRequestBuilder> {
    /**
     * Provides operations to call the assign method.
     */
    get assign(): AssignRequestBuilder;
    /**
     * Provides operations to call the assignedAccessMultiModeProfiles method.
     */
    get assignedAccessMultiModeProfiles(): AssignedAccessMultiModeProfilesRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.deviceConfiguration entity.
     */
    get assignments(): AssignmentsRequestBuilder;
    /**
     * Provides operations to manage the deviceSettingStateSummaries property of the microsoft.graph.deviceConfiguration entity.
     */
    get deviceSettingStateSummaries(): DeviceSettingStateSummariesRequestBuilder;
    /**
     * Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceConfiguration entity.
     */
    get deviceStatuses(): DeviceStatusesRequestBuilder;
    /**
     * Provides operations to manage the deviceStatusOverview property of the microsoft.graph.deviceConfiguration entity.
     */
    get deviceStatusOverview(): DeviceStatusOverviewRequestBuilder;
    /**
     * Provides operations to manage the groupAssignments property of the microsoft.graph.deviceConfiguration entity.
     */
    get groupAssignments(): GroupAssignmentsRequestBuilder;
    /**
     * Provides operations to manage the userStatuses property of the microsoft.graph.deviceConfiguration entity.
     */
    get userStatuses(): UserStatusesRequestBuilder;
    /**
     * Provides operations to manage the userStatusOverview property of the microsoft.graph.deviceConfiguration entity.
     */
    get userStatusOverview(): UserStatusOverviewRequestBuilder;
    /**
     * Provides operations to call the windowsPrivacyAccessControls method.
     */
    get windowsPrivacyAccessControls(): WindowsPrivacyAccessControlsRequestBuilder;
    /**
     * Delete navigation property deviceConfigurations for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The device configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DeviceConfigurationItemRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceConfiguration | undefined>;
    /**
     * Provides operations to call the getOmaSettingPlainTextValue method.
     * @param secretReferenceValueId Usage: secretReferenceValueId='{secretReferenceValueId}'
     * @returns {GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder}
     */
     getOmaSettingPlainTextValueWithSecretReferenceValueId(secretReferenceValueId: string | undefined) : GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder;
    /**
     * Update the navigation property deviceConfigurations in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: DeviceConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceConfiguration | undefined>;
    /**
     * Delete navigation property deviceConfigurations for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The device configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceConfigurationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property deviceConfigurations in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: DeviceConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The device configurations.
 */
export interface DeviceConfigurationItemRequestBuilderGetQueryParameters {
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
export const DeviceConfigurationItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceConfigurationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DeviceConfigurationItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceConfigurationItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    getOmaSettingPlainTextValueWithSecretReferenceValueId: {
        requestsMetadata: GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderRequestsMetadata,
        pathParametersMappings: ["secretReferenceValueId"],
    },
    assign: {
        requestsMetadata: AssignRequestBuilderRequestsMetadata,
    },
    assignedAccessMultiModeProfiles: {
        requestsMetadata: AssignedAccessMultiModeProfilesRequestBuilderRequestsMetadata,
    },
    assignments: {
        requestsMetadata: AssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentsRequestBuilderNavigationMetadata,
    },
    deviceSettingStateSummaries: {
        requestsMetadata: DeviceSettingStateSummariesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceSettingStateSummariesRequestBuilderNavigationMetadata,
    },
    deviceStatuses: {
        requestsMetadata: DeviceStatusesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceStatusesRequestBuilderNavigationMetadata,
    },
    deviceStatusOverview: {
        requestsMetadata: DeviceStatusOverviewRequestBuilderRequestsMetadata,
    },
    groupAssignments: {
        requestsMetadata: GroupAssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: GroupAssignmentsRequestBuilderNavigationMetadata,
    },
    userStatuses: {
        requestsMetadata: UserStatusesRequestBuilderRequestsMetadata,
        navigationMetadata: UserStatusesRequestBuilderNavigationMetadata,
    },
    userStatusOverview: {
        requestsMetadata: UserStatusOverviewRequestBuilderRequestsMetadata,
    },
    windowsPrivacyAccessControls: {
        requestsMetadata: WindowsPrivacyAccessControlsRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceConfigurationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DeviceConfigurationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DeviceConfigurationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceConfigurationFromDiscriminatorValue,
        queryParametersMapper: DeviceConfigurationItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DeviceConfigurationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceConfigurationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceConfiguration,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
