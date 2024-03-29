/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCloudPcProvisioningPolicyFromDiscriminatorValue, serializeCloudPcProvisioningPolicy, type CloudPcProvisioningPolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ApplyRequestBuilderRequestsMetadata, type ApplyRequestBuilder } from './apply/';
import { AssignRequestBuilderRequestsMetadata, type AssignRequestBuilder } from './assign/';
import { AssignmentsRequestBuilderNavigationMetadata, AssignmentsRequestBuilderRequestsMetadata, type AssignmentsRequestBuilder } from './assignments/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the provisioningPolicies property of the microsoft.graph.virtualEndpoint entity.
 */
export interface CloudPcProvisioningPolicyItemRequestBuilder extends BaseRequestBuilder<CloudPcProvisioningPolicyItemRequestBuilder> {
    /**
     * Provides operations to call the apply method.
     * @deprecated The onPremisesConnectionId property is deprecated and will stop returning on July 30, 2023. as of 2023-03/onPremisesConnectionId
     */
    get apply(): ApplyRequestBuilder;
    /**
     * Provides operations to call the assign method.
     * @deprecated The onPremisesConnectionId property is deprecated and will stop returning on July 30, 2023. as of 2023-03/onPremisesConnectionId
     */
    get assign(): AssignRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.cloudPcProvisioningPolicy entity.
     * @deprecated The onPremisesConnectionId property is deprecated and will stop returning on July 30, 2023. as of 2023-03/onPremisesConnectionId
     */
    get assignments(): AssignmentsRequestBuilder;
    /**
     * Delete a cloudPcProvisioningPolicy object. You can’t delete a policy that’s in use.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The onPremisesConnectionId property is deprecated and will stop returning on July 30, 2023. as of 2023-03/onPremisesConnectionId
     * @see {@link https://learn.microsoft.com/graph/api/cloudpcprovisioningpolicy-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a cloudPcProvisioningPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPcProvisioningPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The onPremisesConnectionId property is deprecated and will stop returning on July 30, 2023. as of 2023-03/onPremisesConnectionId
     * @see {@link https://learn.microsoft.com/graph/api/cloudpcprovisioningpolicy-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CloudPcProvisioningPolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<CloudPcProvisioningPolicy | undefined>;
    /**
     * Update the properties of a cloudPcProvisioningPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPcProvisioningPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The onPremisesConnectionId property is deprecated and will stop returning on July 30, 2023. as of 2023-03/onPremisesConnectionId
     * @see {@link https://learn.microsoft.com/graph/api/cloudpcprovisioningpolicy-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: CloudPcProvisioningPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudPcProvisioningPolicy | undefined>;
    /**
     * Delete a cloudPcProvisioningPolicy object. You can’t delete a policy that’s in use.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The onPremisesConnectionId property is deprecated and will stop returning on July 30, 2023. as of 2023-03/onPremisesConnectionId
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a cloudPcProvisioningPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The onPremisesConnectionId property is deprecated and will stop returning on July 30, 2023. as of 2023-03/onPremisesConnectionId
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CloudPcProvisioningPolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a cloudPcProvisioningPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The onPremisesConnectionId property is deprecated and will stop returning on July 30, 2023. as of 2023-03/onPremisesConnectionId
     */
     toPatchRequestInformation(body: CloudPcProvisioningPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a cloudPcProvisioningPolicy object.
 */
export interface CloudPcProvisioningPolicyItemRequestBuilderGetQueryParameters {
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
export const CloudPcProvisioningPolicyItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CloudPcProvisioningPolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CloudPcProvisioningPolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof CloudPcProvisioningPolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    apply: {
        requestsMetadata: ApplyRequestBuilderRequestsMetadata,
    },
    assign: {
        requestsMetadata: AssignRequestBuilderRequestsMetadata,
    },
    assignments: {
        requestsMetadata: AssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CloudPcProvisioningPolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: CloudPcProvisioningPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: CloudPcProvisioningPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPcProvisioningPolicyFromDiscriminatorValue,
        queryParametersMapper: CloudPcProvisioningPolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: CloudPcProvisioningPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPcProvisioningPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCloudPcProvisioningPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
