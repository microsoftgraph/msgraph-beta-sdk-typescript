/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserExperienceAnalyticsDeviceWithoutCloudIdentityFromDiscriminatorValue, serializeUserExperienceAnalyticsDeviceWithoutCloudIdentity, type UserExperienceAnalyticsDeviceWithoutCloudIdentity } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsDevicesWithoutCloudIdentity property of the microsoft.graph.deviceManagement entity.
 */
export interface UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilder extends BaseRequestBuilder<UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilder> {
    /**
     * Delete navigation property userExperienceAnalyticsDevicesWithoutCloudIdentity for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * User experience analytics devices without cloud identity.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsDeviceWithoutCloudIdentity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilderGetQueryParameters> | undefined) : Promise<UserExperienceAnalyticsDeviceWithoutCloudIdentity | undefined>;
    /**
     * Update the navigation property userExperienceAnalyticsDevicesWithoutCloudIdentity in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsDeviceWithoutCloudIdentity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: UserExperienceAnalyticsDeviceWithoutCloudIdentity, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserExperienceAnalyticsDeviceWithoutCloudIdentity | undefined>;
    /**
     * Delete navigation property userExperienceAnalyticsDevicesWithoutCloudIdentity for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * User experience analytics devices without cloud identity.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property userExperienceAnalyticsDevicesWithoutCloudIdentity in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: UserExperienceAnalyticsDeviceWithoutCloudIdentity, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * User experience analytics devices without cloud identity.
 */
export interface UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilderGetQueryParameters {
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
export const UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsDeviceWithoutCloudIdentityFromDiscriminatorValue,
        queryParametersMapper: UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: UserExperienceAnalyticsDeviceWithoutCloudIdentityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsDeviceWithoutCloudIdentityFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserExperienceAnalyticsDeviceWithoutCloudIdentity,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
