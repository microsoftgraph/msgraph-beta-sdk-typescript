/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceRegistrationPolicyFromDiscriminatorValue, serializeDeviceRegistrationPolicy, type DeviceRegistrationPolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceRegistrationPolicy property of the microsoft.graph.policyRoot entity.
 */
export interface DeviceRegistrationPolicyRequestBuilder extends BaseRequestBuilder<DeviceRegistrationPolicyRequestBuilder> {
    /**
     * Read the properties and relationships of a deviceRegistrationPolicy object. Represents deviceRegistrationPolicy quota restrictions, additional authentication, and authorization policies to register device identities to your organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceRegistrationPolicy
     * @see {@link https://learn.microsoft.com/graph/api/deviceregistrationpolicy-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DeviceRegistrationPolicyRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceRegistrationPolicy | undefined>;
    /**
     * Update the properties of a deviceRegistrationPolicy object. Represents deviceRegistrationPolicy quota restrictions, additional authentication, and authorization policies to register device identities to your organization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceRegistrationPolicy
     * @see {@link https://learn.microsoft.com/graph/api/deviceregistrationpolicy-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: DeviceRegistrationPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceRegistrationPolicy | undefined>;
    /**
     * Read the properties and relationships of a deviceRegistrationPolicy object. Represents deviceRegistrationPolicy quota restrictions, additional authentication, and authorization policies to register device identities to your organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceRegistrationPolicyRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a deviceRegistrationPolicy object. Represents deviceRegistrationPolicy quota restrictions, additional authentication, and authorization policies to register device identities to your organization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: DeviceRegistrationPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a deviceRegistrationPolicy object. Represents deviceRegistrationPolicy quota restrictions, additional authentication, and authorization policies to register device identities to your organization.
 */
export interface DeviceRegistrationPolicyRequestBuilderGetQueryParameters {
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceRegistrationPolicyRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceRegistrationPolicyRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceRegistrationPolicyFromDiscriminatorValue,
        queryParametersMapper: DeviceRegistrationPolicyRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceRegistrationPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceRegistrationPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DeviceRegistrationPolicyRequestBuilderUriTemplate = "{+baseurl}/policies/deviceRegistrationPolicy{?%24select}";
/* tslint:enable */
/* eslint-enable */