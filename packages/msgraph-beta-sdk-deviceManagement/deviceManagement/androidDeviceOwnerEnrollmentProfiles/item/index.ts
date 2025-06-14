/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAndroidDeviceOwnerEnrollmentProfileFromDiscriminatorValue, serializeAndroidDeviceOwnerEnrollmentProfile, type AndroidDeviceOwnerEnrollmentProfile } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ClearEnrollmentTimeDeviceMembershipTargetRequestBuilderRequestsMetadata, type ClearEnrollmentTimeDeviceMembershipTargetRequestBuilder } from './clearEnrollmentTimeDeviceMembershipTarget/index.js';
// @ts-ignore
import { CreateTokenRequestBuilderRequestsMetadata, type CreateTokenRequestBuilder } from './createToken/index.js';
// @ts-ignore
import { RetrieveEnrollmentTimeDeviceMembershipTargetRequestBuilderRequestsMetadata, type RetrieveEnrollmentTimeDeviceMembershipTargetRequestBuilder } from './retrieveEnrollmentTimeDeviceMembershipTarget/index.js';
// @ts-ignore
import { RevokeTokenRequestBuilderRequestsMetadata, type RevokeTokenRequestBuilder } from './revokeToken/index.js';
// @ts-ignore
import { SetEnrollmentTimeDeviceMembershipTargetRequestBuilderRequestsMetadata, type SetEnrollmentTimeDeviceMembershipTargetRequestBuilder } from './setEnrollmentTimeDeviceMembershipTarget/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the androidDeviceOwnerEnrollmentProfiles property of the microsoft.graph.deviceManagement entity.
 */
export interface AndroidDeviceOwnerEnrollmentProfileItemRequestBuilder extends BaseRequestBuilder<AndroidDeviceOwnerEnrollmentProfileItemRequestBuilder> {
    /**
     * Provides operations to call the clearEnrollmentTimeDeviceMembershipTarget method.
     */
    get clearEnrollmentTimeDeviceMembershipTarget(): ClearEnrollmentTimeDeviceMembershipTargetRequestBuilder;
    /**
     * Provides operations to call the createToken method.
     */
    get createToken(): CreateTokenRequestBuilder;
    /**
     * Provides operations to call the retrieveEnrollmentTimeDeviceMembershipTarget method.
     */
    get retrieveEnrollmentTimeDeviceMembershipTarget(): RetrieveEnrollmentTimeDeviceMembershipTargetRequestBuilder;
    /**
     * Provides operations to call the revokeToken method.
     */
    get revokeToken(): RevokeTokenRequestBuilder;
    /**
     * Provides operations to call the setEnrollmentTimeDeviceMembershipTarget method.
     */
    get setEnrollmentTimeDeviceMembershipTarget(): SetEnrollmentTimeDeviceMembershipTargetRequestBuilder;
    /**
     * Delete navigation property androidDeviceOwnerEnrollmentProfiles for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Android device owner enrollment profile entities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AndroidDeviceOwnerEnrollmentProfile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AndroidDeviceOwnerEnrollmentProfileItemRequestBuilderGetQueryParameters> | undefined) : Promise<AndroidDeviceOwnerEnrollmentProfile | undefined>;
    /**
     * Update the navigation property androidDeviceOwnerEnrollmentProfiles in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AndroidDeviceOwnerEnrollmentProfile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: AndroidDeviceOwnerEnrollmentProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AndroidDeviceOwnerEnrollmentProfile | undefined>;
    /**
     * Delete navigation property androidDeviceOwnerEnrollmentProfiles for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Android device owner enrollment profile entities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AndroidDeviceOwnerEnrollmentProfileItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property androidDeviceOwnerEnrollmentProfiles in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AndroidDeviceOwnerEnrollmentProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Android device owner enrollment profile entities.
 */
export interface AndroidDeviceOwnerEnrollmentProfileItemRequestBuilderGetQueryParameters {
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
export const AndroidDeviceOwnerEnrollmentProfileItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AndroidDeviceOwnerEnrollmentProfileItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AndroidDeviceOwnerEnrollmentProfileItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AndroidDeviceOwnerEnrollmentProfileItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    clearEnrollmentTimeDeviceMembershipTarget: {
        requestsMetadata: ClearEnrollmentTimeDeviceMembershipTargetRequestBuilderRequestsMetadata,
    },
    createToken: {
        requestsMetadata: CreateTokenRequestBuilderRequestsMetadata,
    },
    retrieveEnrollmentTimeDeviceMembershipTarget: {
        requestsMetadata: RetrieveEnrollmentTimeDeviceMembershipTargetRequestBuilderRequestsMetadata,
    },
    revokeToken: {
        requestsMetadata: RevokeTokenRequestBuilderRequestsMetadata,
    },
    setEnrollmentTimeDeviceMembershipTarget: {
        requestsMetadata: SetEnrollmentTimeDeviceMembershipTargetRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AndroidDeviceOwnerEnrollmentProfileItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AndroidDeviceOwnerEnrollmentProfileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AndroidDeviceOwnerEnrollmentProfileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAndroidDeviceOwnerEnrollmentProfileFromDiscriminatorValue,
        queryParametersMapper: AndroidDeviceOwnerEnrollmentProfileItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AndroidDeviceOwnerEnrollmentProfileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAndroidDeviceOwnerEnrollmentProfileFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAndroidDeviceOwnerEnrollmentProfile,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
